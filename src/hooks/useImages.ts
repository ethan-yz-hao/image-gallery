import { useState, useEffect } from 'react';

const useImages = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://eulerity-hackathon.appspot.com/pets');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setImages(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return { images, loading, error };
};

export default useImages;
