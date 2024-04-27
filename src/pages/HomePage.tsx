import ImageGrid from '@/components/ImageGrid';
import useImages, {ImageItem} from "@/hooks/useImages.ts";
import UtilBar from "@/components/UtilBar.tsx";
import {RootState} from "@/store.ts";
import {useDispatch, useSelector} from "react-redux";
import { clearSelection, selectAll } from '@/features/selectionSlice';
import {useEffect, useState} from "react";

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
    const [filteredList, setFilteredList] = useState<ImageItem[]>([]);

    useEffect(() => {
        if (imageArray && imageArray.length > 0) {
            applySearchAndSorting(imageArray);
        }
    }, [imageArray]);

    const handleSearch = () => {
        applySearchAndSorting(imageArray);
    };

    const applySearchAndSorting  = (items: ImageItem[]) => {
        const filtered = items.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        applySorting(filtered);
    };

    const applySorting = (filtered: ImageItem[]) => {
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

        setFilteredList(filtered);  // Set the state with the filtered and sorted list
    };


    const toggleSortDirection = (current: string) => {
        switch(current) {
            case 'asc': return 'desc';
            case 'desc': return '';
            default: return 'asc';
        }
    };

    const sortByName = () => {
        const newDirection = toggleSortDirection(nameSortDirection);
        setNameSortDirection(newDirection);
        setCreatedSortDirection('');
        applySorting(filteredList);  // Apply sorting on current filtered list
    };

    const sortByCreated = () => {
        const newDirection = toggleSortDirection(createdSortDirection);
        setCreatedSortDirection(newDirection);
        setNameSortDirection('');
        applySorting(filteredList);  // Apply sorting on current filtered list
    };

    return (
        <div>
            <UtilBar
                selectAll={() => handleSelectAll(filteredList)}
                clearSelection={handleClearSelection}
                downloadSelected={downloadSelected}
                sortByName={sortByName}
                nameSortDirection={nameSortDirection}
                sortByCreated={sortByCreated}
                createdSortDirection={createdSortDirection}
                setSearchQuery={setSearchQuery}
                initiateSearch={handleSearch}
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && <ImageGrid allItems={filteredList} />}
        </div>
    );
};

export default HomePage;
