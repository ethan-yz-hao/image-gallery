import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ImageItem} from "@/hooks/useImages.ts";

interface SelectionState {
    selectedItems: ImageItem[];
}

const initialState: SelectionState = {
    selectedItems: [],
};

const selectionSlice = createSlice({
    name: 'selection',
    initialState,
    reducers: {
        toggleSelect: (state, action: PayloadAction<ImageItem>) => {
            const index = state.selectedItems.findIndex(item => item.url === action.payload.url);
            if (index >= 0) {
                state.selectedItems.splice(index, 1);
            } else {
                state.selectedItems.push(action.payload);
            }
        },
        clearSelection: state => {
            state.selectedItems = [];
        },
        selectAll: (state, action: PayloadAction<ImageItem[]>) => {
            state.selectedItems = action.payload;
        },
        unselect: (state, action: PayloadAction<ImageItem>) => {
            const index = state.selectedItems.findIndex(item => item.url === action.payload.url);
            if (index >= 0) {
                state.selectedItems.splice(index, 1);
            }
        }
    },
});

export const { toggleSelect, clearSelection, selectAll , unselect} = selectionSlice.actions;

export default selectionSlice.reducer;
