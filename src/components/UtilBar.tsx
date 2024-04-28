import styled from 'styled-components';
import React, {useState} from "react";
import {FaCaretDown, FaDownload, FaSearch, FaTrash} from 'react-icons/fa';
import {BsList} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store.ts";
import {unselect} from "@/features/selectionSlice";
import CustomSelect from "@/components/CustomSelect.tsx";

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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
`;

const SortGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 599px) {
        display: none;
    }
`;

const SearchGroup = styled.div`
    margin: 0 10px 0 10px;
    display: flex;
    align-items: center;
    justify-items: end;
    flex-grow: 1;
    gap: 10px;
`;

const ToolsGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 825px) {
        display: none;
    }
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
    margin: 0 10px 0 10px;
    text-decoration: underline;
    text-align: left;
    font-family: 'Helvetica Neue', sans-serif;
    white-space: nowrap;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        color: #e60023; // Pinterest red for hover effect
    }
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
    max-width: 500px;
`;

const Dropdown = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownContent = styled.div`
    position: absolute;
    background-color: #ffffff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    z-index: 1;
    border-radius: 8px;
    padding: 5px 0;
    max-height: 500px;
    overflow-y: auto;
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
    padding: 8px 16px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #f7f7f7;
    }
`;

const DropdownItemText = styled.div`
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    color: #333;
    text-align: left;
    white-space: nowrap;
    flex-grow: 1;
`;

const MobileDropdown = styled.div`
    display: none;

    @media (max-width: 825px) {
        display: block;
    }
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

const sortOptions = [
    {value: '', label: 'None'},
    {value: 'name-asc', label: 'Name A-Z'},
    {value: 'name-desc', label: 'Name Z-A'},
    {value: 'created-asc', label: 'Created Oldest'},
    {value: 'created-desc', label: 'Created Newest'}
];

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
            <SortGroup>
                <Text>Sort By:</Text>
                <CustomSelect
                    options={sortOptions}
                    value={sortOptions.find(o => o.value === currentSortMethod)!.label}
                    onChange={(value: string) => setCurrentSortMethod(value)}
                />
            </SortGroup>
            <SearchGroup>
                <Input type="text" placeholder="Search images..." onChange={e => setSearchQuery(e.target.value)}
                       onKeyPress={handleKeyPress}/>
                <IconBtn onClick={initiateSearch}><FaSearch/></IconBtn>
            </SearchGroup>
            <ToolsGroup>
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
            </ToolsGroup>
            <MobileDropdown>
                <DropdownButton onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <BsList size={24}/>
                </DropdownButton>
                {dropdownOpen && (
                    <DropdownContent style={{translate: "-90%"}}>
                        <Link onClick={selectAll}>Select All</Link>
                        <Link onClick={clearSelection}>Clear</Link>
                        <IconBtn onClick={downloadSelected}><FaDownload/></IconBtn>
                    </DropdownContent>
                )}
            </MobileDropdown>
        </Bar>
    );
};

export default UtilBar;
