import { useState, ChangeEvent } from "react";
import { toast } from "sonner";
import axios from "axios";
import { ThumbnailUploaderProps } from "@/types/components";

const ThumbnailUploader: React.FC<ThumbnailUploaderProps> = ({ onUploadSuccess, BASE_URL }) => {
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];
        if (!uploadedFile) return;

        setFile(uploadedFile);
        const previewUrl = URL.createObjectURL(uploadedFile);
        setThumbnail(previewUrl);

        try {
            const presignedResponse = await axios.post(`${BASE_URL}/presigned-url`, {
                fileName: uploadedFile.name,
                fileType: uploadedFile.type,
            });

            const uploadUrl = presignedResponse.data.presignedUrl;
            const filePath = presignedResponse.data.filePath;

            await axios.put(uploadUrl, uploadedFile, {
                headers: { "Content-Type": uploadedFile.type },
            });

            onUploadSuccess(filePath);
            toast.success("Thumbnail uploaded successfully!");
        } catch (error) {
            toast.error("An error occurred while uploading the thumbnail.");
            console.error(error);
        }
    };

    return (
        <div className="mt-4 flex flex-col items-left gap-4">
            <label className="text-sm text-muted-foreground">Upload Thumbnail</label>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="p-2 border border-border rounded-lg w-full text-sm text-muted-foreground"
            />
            {thumbnail && <img src={thumbnail} alt="Thumbnail Preview" className="w-48 h-32 rounded-lg shadow-md object-cover" />}
        </div>
    );
};

export default ThumbnailUploader;
