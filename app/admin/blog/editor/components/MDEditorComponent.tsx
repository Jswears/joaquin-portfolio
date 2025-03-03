import dynamic from "next/dynamic";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

interface MDEditorComponentProps {
    mdxContent: string;
    setMdxContent: (content: string) => void;
}

const MDEditorComponent: React.FC<MDEditorComponentProps> = ({ mdxContent, setMdxContent }) => {
    return (
        <MDEditor
            value={mdxContent}
            onChange={(value) => setMdxContent(value || "")}
            height={400}
            className="border border-border rounded-lg shadow-sm"
        />
    );
};

export default MDEditorComponent;
