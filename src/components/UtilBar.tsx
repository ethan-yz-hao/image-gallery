import styled from 'styled-components';
import React, {useState} from "react";
import {FaSearch, FaDownload, FaTrash, FaCaretDown} from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store.ts";
import {unselect} from "@/features/selectionSlice";

const Bar = styled.div`
    position: fixed;
    top: 45px;
    width: 100%;
    height: 50px;
    z-index: 10;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    border-bottom: 1px solid #e7e7e7;
    font-family: 'Helvetica Neue', sans-serif;
    justify-content: space-between;
    box-sizing: border-box;
`;

const LeftGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

`;

const RightGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const IconBtn = styled.button`
    background-color: transparent;
    border: none;
    padding: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #333;
    flex-grow: 0;

    &:hover {
        color: #e60023;
    }
`;

const Link = styled.div`
    color: #333;
    text-decoration: underline;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        color: #e60023; // Pinterest red for hover effect
    }
`;

const Select = styled.select`
    width: 145px;
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color: white; // Enhancing visual style to be more aligned with Pinterest
    font-family: 'Helvetica Neue', sans-serif;
`;

const Text = styled.p`
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    color: #333;
    white-space: nowrap;
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex-grow: 1;
    min-width: 300px;
`;

const Dropdown = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownContent = styled.div`
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 5px;
`;

const DropdownButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover ${DropdownContent} {
        display: block;
    }
`;

const DropdownItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
`;

const DropdownItemText = styled.div`
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    color: #333;
    text-align: left;
    white-space: nowrap;
    flex-grow: 1;
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

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const dispatch = useDispatch();
    const {selectedItems} = useSelector((state: RootState) => ({
        selectedItems: state.selection.selectedItems
    }));


    return (
        <Bar>
            <LeftGroup>
                <Text>Sort By:</Text>
                <Select value={currentSortMethod} onChange={e => setCurrentSortMethod(e.target.value)}>
                    <option value="">None</option>
                    <option value="name-asc">Name A-Z</option>
                    <option value="name-desc">Name Z-A</option>
                    <option value="created-asc">Created Oldest</option>
                    <option value="created-desc">Created Newest</option>
                </Select>
            </LeftGroup>
            <RightGroup>
                <Input type="text" placeholder="Search images..." onChange={e => setSearchQuery(e.target.value)}
                       onKeyPress={handleKeyPress}/>
                <IconBtn onClick={initiateSearch}><FaSearch/></IconBtn>
                <Dropdown>
                    <DropdownButton onClick={toggleDropdown}>
                        <Text>{selectedItems.length} selected</Text>
                        <FaCaretDown/>
                    </DropdownButton>
                    {dropdownOpen && <DropdownContent>
                        {selectedItems.map(item => (
                            <DropdownItem>
                                <DropdownItemText>{item.title}</DropdownItemText>
                                <IconBtn onClick={() => dispatch(unselect(item))}><FaTrash/></IconBtn>
                            </DropdownItem>
                        ))}
                    </DropdownContent>}
                </Dropdown>
                <Link onClick={selectAll}>Select All</Link>
                <Link onClick={clearSelection}>Clear</Link>
                <IconBtn onClick={downloadSelected}><FaDownload/></IconBtn>
            </RightGroup>
        </Bar>
    );
};

export default UtilBar;
