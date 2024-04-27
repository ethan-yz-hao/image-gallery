import ImageGrid from '@/components/ImageGrid';
import useImages, {ImageItem} from "@/hooks/useImages.ts";
import UtilBar from "@/components/UtilBar.tsx";
import {RootState} from "@/store.ts";
import {useDispatch, useSelector} from "react-redux";
import { clearSelection, selectAll } from '@/features/selectionSlice';
import {useState} from "react";

const HomePage = () => {
    const {imageArray, loading, error} = useImages()

    // handle selection
    const dispatch = useDispatch();
    const { selectedItems } = useSelector((state: RootState) => ({
        selectedItems: state.selection.selectedItems
    }));

    const handleSelectAll = (items: ImageItem[]) => {
        dispatch(selectAll(items));
    };

    const handleClearSelection = () => {
        dispatch(clearSelection());
    };

    const downloadSelected = () => {
        const urls = selectedItems.map(item => item.url);
        console.log('Downloading:', urls);
    };

    // handle sort and search
    const [nameSortDirection, setNameSortDirection] = useState('');
    const [createdSortDirection, setCreatedSortDirection] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const toggleSortDirection = (current: string) => {
        switch(current) {
            case 'asc': return 'desc';
            case 'desc': return '';
            default: return 'asc';
        }
    };

    const sortByName = () => {
        setNameSortDirection(toggleSortDirection(nameSortDirection));
        setCreatedSortDirection('');
    };

    const sortByCreated = () => {
        setCreatedSortDirection(toggleSortDirection(createdSortDirection));
        setNameSortDirection('');
    };

    const filteredAndSortedItems = () => {
        const filtered = imageArray.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (nameSortDirection === 'asc') {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (nameSortDirection === 'desc') {
            filtered.sort((a, b) => b.title.localeCompare(a.title));
        }

        if (createdSortDirection === 'asc') {
            filtered.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime());
        } else if (createdSortDirection === 'desc') {
            filtered.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
        }

        return filtered;
    };

    return (
        <div>
            <UtilBar
                selectAll={() => handleSelectAll(imageArray)}
                clearSelection={handleClearSelection}
                downloadSelected={downloadSelected}
                sortByName={sortByName}
                nameSortDirection={nameSortDirection}
                sortByCreated={sortByCreated}
                createdSortDirection={createdSortDirection}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && <ImageGrid allItems={filteredAndSortedItems()} />}
        </div>
    );
};

export default HomePage;
