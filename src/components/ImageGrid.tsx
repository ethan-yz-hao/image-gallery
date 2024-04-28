import Masonry from 'react-masonry-css';
import ImageCard from "@/components/ImageCard.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store.ts";
import {ImageItem} from "@/hooks/useImages.ts";
import {toggleSelect} from "@/features/selectionSlice.ts";

const breakpointColumnsObj = {
    default: 5,
    1600: 4,
    1300: 3,
    980: 2,
    650: 1
};

const ImageGrid = ({allItems}: { allItems: ImageItem[] }) => {
    const dispatch = useDispatch();
    const {selectedItems} = useSelector((state: RootState) => ({
        selectedItems: state.selection.selectedItems
    }));

    const isItemSelected = (item: ImageItem) => {
        return selectedItems.some(selectedItem => selectedItem.url === item.url);
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {allItems.map(item => (
                <ImageCard
                    key={item.url}
                    item={item}
                    isSelected={isItemSelected(item)}
                    toggleSelect={() => dispatch(toggleSelect(item))}
                />
            ))}
        </Masonry>
    );
};

export default ImageGrid;