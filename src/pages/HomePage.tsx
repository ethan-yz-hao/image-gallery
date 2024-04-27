import useImages from "@/hooks/useImages.ts";

const HomePage = () => {
    const { images, loading, error } = useImages();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading images!</p>;

    return (
        <div>
            <h1>Images</h1>
            <ul>
                {images.map((image: any) => (
                    <li key={image.id}>
                        <img src={image.url} alt={image.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;