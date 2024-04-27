import ImageCard from './ImageCard';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSelect } from '../features/selectionSlice';
import { RootState } from '../store';
import styled from 'styled-components';
import {ImageItem} from "@/hooks/useImages.ts";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

interface Props {
    allItems: ImageItem[];
}

const ImageGrid = ({ allItems }: Props) => {
    const dispatch = useDispatch();
    const { selectedItems } = useSelector((state: RootState) => ({
        selectedItems: state.selection.selectedItems
    }));

    const isItemSelected = (item: ImageItem) => {
        return selectedItems.some(selectedItem => selectedItem.url === item.url);
    };

    return (
        <Grid>
            {allItems.map(item => (
                <ImageCard
                    key={item.url}
                    item={item}
                    isSelected={isItemSelected(item)}
                    toggleSelect={() => dispatch(toggleSelect(item))}
                />
            ))}
        </Grid>
    );
};

export default ImageGrid;
