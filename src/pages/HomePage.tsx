import ImageGrid from '@/components/ImageGrid';
import useImages, {ImageItem} from "@/hooks/useImages.ts";
import UtilBar from "@/components/UtilBar.tsx";
import {RootState} from "@/store.ts";
import {useDispatch, useSelector} from "react-redux";
import { clearSelection, selectAll } from '@/features/selectionSlice';

const HomePage = () => {
    const {imageArray, loading, error} = useImages()
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

    return (
        <div>
            <UtilBar
                selectAll={() => handleSelectAll(imageArray)}
                clearSelection={handleClearSelection}
                downloadSelected={downloadSelected}
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {imageArray && <ImageGrid allItems={imageArray} />}
        </div>
    );
};

export default HomePage;
