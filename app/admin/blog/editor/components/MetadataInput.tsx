import { MetadataInputProps } from "@/types/components";

const MetadataInput: React.FC<MetadataInputProps> = ({ metadata, setMetadata }) => {
    return (
        <div className="flex flex-col gap-3">
            <input
                type="text"
                placeholder="Title"
                value={metadata.title}
                onChange={(e) => setMetadata({ ...metadata, title: e.target.value })}
                className="w-full p-3 border border-border rounded-lg shadow-sm focus:ring-primary focus:border-primary transition-all"
            />
            <input
                type="text"
                placeholder="Tags (comma-separated)"
                value={metadata.tags}
                onChange={(e) => setMetadata({ ...metadata, tags: e.target.value })}
                className="w-full p-3 border border-border rounded-lg shadow-sm focus:ring-primary focus:border-primary transition-all"
            />
            <input
                type="text"
                placeholder="Category"
                value={metadata.category}
                onChange={(e) => setMetadata({ ...metadata, category: e.target.value })}
                className="w-full p-3 border border-border rounded-lg shadow-sm focus:ring-primary focus:border-primary transition-all"
            />

        </div>
    );
};

export default MetadataInput;
