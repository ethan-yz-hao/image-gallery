import styled from 'styled-components';
import React, {useEffect, useRef, useState} from 'react';
import {FaCaretDown} from 'react-icons/fa';

const CustomSelectContainer = styled.div`
    position: relative;
    width: 150px;
    user-select: none;
`;

const SelectedValue = styled.div`
    height: 32px;
    padding: 0 10px 0 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 0.9rem;
`;

const OptionsContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border: 1px solid #ddd;
    border-top: none;
    border-radius: 0 0 8px 8px;
    background-color: white;
    z-index: 100;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const Option = styled.div`
    font-size: 0.9rem;
    text-align: left;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f9f9f9;
    }
`;

function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>, onOutsideClick: () => void) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onOutsideClick();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onOutsideClick]);
}

interface Props {
    options: { label: string; value: string }[];
    value: string;
    onChange: (value: string) => void;

}


const CustomSelect = ({ options, value, onChange }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, () => setIsOpen(false));

    const handleSelect = (option: string) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <CustomSelectContainer ref={wrapperRef}>
            <SelectedValue onClick={() => setIsOpen(!isOpen)}>
                {value || "Select..."}
                <FaCaretDown />
            </SelectedValue>
            {isOpen && (
                <OptionsContainer>
                    {options.map((option, index) => (
                        <Option key={index} onClick={() => handleSelect(option.value)}>
                            {option.label}
                        </Option>
                    ))}
                </OptionsContainer>
            )}
        </CustomSelectContainer>
    );
};

export default CustomSelect;
