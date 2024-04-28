import styled from 'styled-components';
import React from "react";
import {FaSearch, FaDownload} from 'react-icons/fa';

const Bar = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    border-bottom: 1px solid #e7e7e7;
    font-family: 'Helvetica Neue', sans-serif;
`;

const IconBtn = styled.button`
    background-color: transparent;
    border: none;
    padding: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #333;

    &:hover {
        color: #e60023; // Pinterest red for hover effect
    }
`;

const Button = styled.button`
    background-color: #e60023; // Using Pinterest red
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
        background-color: #cc001d;
    }
`;

export const SortButton = styled(Button)`
    background-color: #0056b3;

    &:hover {
        background-color: #00397a;
    }
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%; // Full width for better visibility
    margin-right: 10px;
    flex-grow: 1;
`;

const Select = styled.select`
    width: 150px;
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
`;

interface Props {
    selectAll: () => void;
    clearSelection: () => void;
    downloadSelected: () => void;
    currentSortMethod: string;
    setCurrentSortMethod: (method: string) => void;
    setSearchQuery: (query: string) => void;
    initiateSearch: () => void;
}

const UtilBar = ({
                     selectAll, clearSelection, downloadSelected,
                     currentSortMethod, setCurrentSortMethod,
                     setSearchQuery, initiateSearch
                 }: Props) => {
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            initiateSearch();
        }
    };

    return (
        <Bar>
            <p>Sort By:</p>
            <Select value={currentSortMethod} onChange={e => setCurrentSortMethod(e.target.value)}>
                <option value="">No Sort</option>
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="created-asc">Created Oldest</option>
                <option value="created-desc">Created Newest</option>
            </Select>
            <Input type="text" placeholder="Search images..." onChange={e => setSearchQuery(e.target.value)}
                   onKeyPress={handleKeyPress}/>
            <IconBtn onClick={initiateSearch}>
                <FaSearch/>
            </IconBtn>
            <Button onClick={selectAll}>Select All</Button>
            <Button onClick={clearSelection}>Clear Selection</Button>
            <IconBtn onClick={downloadSelected}>
                <FaDownload/>
            </IconBtn>
        </Bar>
    );
};

export default UtilBar;
