import useImages from "@/hooks/useImages.ts";

const HomePage = () => {
    const { imageArray, loading, error } = useImages();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading images!</p>;

    return (
        <div>
            <h1>Images</h1>
            <ul>
                {imageArray.map((imageItem, index) => (
                    <li key={index}>
                        <img src={imageItem.url} alt={imageItem.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;