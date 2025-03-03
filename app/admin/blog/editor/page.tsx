"use client";

import { useState, ChangeEvent } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { toast } from "sonner";
import axios from "axios";
import { Button } from "@/components/ui/button";
import MetadataInput from "./components/MetadataInput";
import MDEditorComponent from "./components/MDEditorComponent";
import BlogPreview from "./components/BlogPreview";
import ThumbnailUploader from "./components/ThumbnailUploader";
import { BlogPost, Metadata } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL_BLOG;

export default function BlogEditor() {
  const [mdxContent, setMdxContent] = useState<string>("");
  const [preview, setPreview] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState<Metadata>({ title: "", tags: "", category: "" });
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [mdxSource, setMdxSource] = useState<any>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (!uploadedFile) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      if (typeof event.target?.result === "string") {
        setMdxContent(event.target.result);
        const serializedMdx = await serialize(event.target.result);
        setMdxSource(serializedMdx);
      }
    };
    reader.readAsText(uploadedFile);
    setFile(uploadedFile);
  };

  const handleUpload = async () => {
    if (!mdxContent || !metadata.title) {
      toast.error("Please provide both a title and content.");
      return;
    }

    try {
      const sanitizedFileName = metadata.title.replace(/\s+/g, "-").toLowerCase();
      const presignedResponse = await axios.post(
        `${BASE_URL}/presigned-url`,
        { fileName: `${sanitizedFileName}`, fileType: "text/markdown" }
      );

      const uploadUrl = presignedResponse.data.presignedUrl;
      const filePath = presignedResponse.data.filePath;
      await axios.put(uploadUrl, mdxContent, { headers: { "Content-Type": "text/markdown" } });

      const newPost: BlogPost = {
        title: metadata.title,
        tags: metadata.tags.split(","),
        category: metadata.category,
        s3Url: filePath,
        thumbnail: thumbnail || "",  // Ensure thumbnail is included
        status: "published",
        excerpt: "",
        author: "Joaquin Swears.",
      };

      await axios.post(`${BASE_URL}/posts`, newPost);

      toast.success("Blog post uploaded successfully!");
      setMdxContent("");
      setMetadata({ title: "", tags: "", category: "" });
      setThumbnail(null);
      setMdxSource(null);
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="mb-16 container mx-auto max-w-4xl px-6 py-24 bg-background/50 shadow-lg rounded-2xl">
      <h1 className="text-4xl font-bold text-primary mb-6">MDX Blog Editor</h1>

      {/* Metadata Input */}
      <MetadataInput metadata={metadata} setMetadata={setMetadata} />

      {/* File Upload */}
      <label className="text-sm text-muted-foreground">Upload MDX File</label>
      <input
        type="file"
        accept=".mdx"
        onChange={handleFileUpload}
        className="mt-4 p-2 border border-border rounded-lg w-full text-sm text-muted-foreground"
      />

      {/* Thumbnail Upload */}
      <ThumbnailUploader onUploadSuccess={setThumbnail} BASE_URL={BASE_URL!} />

      {/* Markdown Editor */}
      <div className="mt-6">
        <MDEditorComponent mdxContent={mdxContent} setMdxContent={setMdxContent} />
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-4">
        <Button onClick={() => setPreview(!preview)} variant="outline" className="hover:scale-105 transition-all">
          {preview ? "Hide Preview" : "Show Preview"}
        </Button>
        <Button onClick={handleUpload} className="bg-green-500 hover:scale-105 transition-all">
          Upload Blog Post
        </Button>
      </div>

      {/* Blog Preview */}
      {preview && <BlogPreview mdxSource={mdxSource} />}
    </div>
  );
}
