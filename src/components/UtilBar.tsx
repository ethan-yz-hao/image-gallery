import styled from 'styled-components';
import React from "react";

const Bar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #f8f9fa;
    border-bottom: 1px solid #e7e7e7;
`;

const Button = styled.button`
    background-color: #28a745;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #218838;
    }
`;

export const SortButton = styled(Button)`
    background-color: #007bff;

    &:hover {
        background-color: #0056b3;
    }
`;

const Input = styled.input`
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;


interface Props {
    selectAll: () => void;
    clearSelection: () => void;
    downloadSelected: () => void;
    sortByName: () => void;
    nameSortDirection?: string;
    sortByCreated: () => void;
    createdSortDirection?: string;
    setSearchQuery: (query: string) => void;
    initiateSearch: () => void;
}

const UtilBar = ({
                     selectAll, clearSelection, downloadSelected,
                     sortByName, nameSortDirection,
                     sortByCreated, createdSortDirection,
                     setSearchQuery,
                     initiateSearch
                 }: Props) => {
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            initiateSearch();
        }
    };

    return (
        <Bar>
            <Input type="text" placeholder="Search images..." onChange={e => setSearchQuery(e.target.value)} onKeyPress={handleKeyPress} />
            <Button onClick={initiateSearch}>Search</Button>
            <Button onClick={selectAll}>Select All</Button>
            <Button onClick={clearSelection}>Clear Selection</Button>
            <Button onClick={downloadSelected}>Download Selected</Button>
            <SortButton onClick={() => sortByName()}>{`Name: ${nameSortDirection || 'Off'}`}</SortButton>
            <SortButton onClick={() => sortByCreated()}>{`Created: ${createdSortDirection || 'Off'}`}</SortButton>
        </Bar>
    );
};

export default UtilBar;
