import useImages from "@/hooks/useImages.ts";
import ImageCard from "@/components/ImageCard.tsx";

const ImageGrid = () => {
    const { imageArray, loading, error } = useImages();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading images!</p>;

    return (
        <ul>
            {imageArray.map((imageItem, index) => (
                <li key={index}>
                    <ImageCard key={imageItem.url} item={imageItem} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGrid;
