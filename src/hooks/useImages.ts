import { useState, useEffect } from 'react';

export interface ImageItem {
    "title": string;
    "description": string;
    "url": string;
    "created": string;
}

const useImages = () => {
    const [imageArray, setImageArray] = useState<ImageItem[]>([]);
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
                setImageArray(data);
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

    return { imageArray, loading, error };
};

export default useImages;
