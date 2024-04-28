import ImageGrid from '@/components/ImageGrid';
import useImages, {ImageItem} from "@/hooks/useImages.ts";
import UtilBar from "@/components/UtilBar.tsx";
import {RootState} from "@/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {clearSelection, selectAll} from '@/features/selectionSlice';
import {useEffect, useState} from "react";
import styled from "styled-components";

const Grid = styled.div`
    position: absolute;
    top: 110px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const HomePage = () => {
    const {imageArray, loading, error} = useImages()

    // handle selection
    const dispatch = useDispatch();
    const {selectedItems} = useSelector((state: RootState) => ({
        selectedItems: state.selection.selectedItems
    }));

    const handleSelectAll = (items: ImageItem[]) => {
        dispatch(selectAll(items));
    };

    const handleClearSelection = () => {
        dispatch(clearSelection());
    };

    const downloadSelected = async () => {
        for (const item of selectedItems) {
            try {
                if (!item.url) {
                    console.warn('No URL found for item:', item);
                    continue;
                }
                const response = await fetch(item.url);
                if (!response.ok) throw new Error('Network response was not ok');
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const filename = item.url.split('/').pop()?.split('?')[0]?.split('#')[0] || 'download';
                const link = document.createElement('a');
                link.href = url;
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(link);
            } catch (error) {
                console.error('Failed to fetch and download image:', error);
            }
        }
    };

    // handle sort and search
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredList, setFilteredList] = useState<ImageItem[]>([]);
    const [currentSortMethod, setCurrentSortMethod] = useState('');

    useEffect(() => {
        if (imageArray && imageArray.length > 0) {
            applySearchAndSorting(imageArray);
        }
    }, [imageArray, currentSortMethod]);

    const applySearchAndSorting = (items: ImageItem[]) => {
        const filtered = items.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        applySorting(filtered);
    };

    const applySorting = (filtered: ImageItem[]) => {
        switch (currentSortMethod) {
            case 'name-asc':
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'name-desc':
                filtered.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'created-asc':
                filtered.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime());
                break;
            case 'created-desc':
                filtered.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
                break;
            default:
                break;
        }
        setFilteredList(filtered);
    };

    return (
        <>
            <UtilBar
                selectAll={() => handleSelectAll(filteredList)}
                clearSelection={handleClearSelection}
                downloadSelected={downloadSelected}
                setSearchQuery={setSearchQuery}
                currentSortMethod={currentSortMethod}
                setCurrentSortMethod={setCurrentSortMethod}
                initiateSearch={() => applySearchAndSorting(imageArray)}
            />
            <Grid>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && <ImageGrid allItems={filteredList}/>}
            </Grid>
        </>
    );
};

export default HomePage;
