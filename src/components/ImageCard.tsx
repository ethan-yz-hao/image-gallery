import styled from 'styled-components';
import {ImageItem} from "@/hooks/useImages.ts";

const Card = styled.div`
    background: #fff;
    border: 1px solid #eee;
    border-radius: 12px;
    margin: 10px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const Content = styled.div`
    padding: 20px;
    font-family: 'Helvetica Neue', Arial, sans-serif;
`;

const Title = styled.h3`
    margin: 0 0 10px;
    color: #333;
    font-size: 1.4em;
`;

const Description = styled.p`
    color: #555;
    font-size: 0.9em;
`;

const DateText = styled.small`
    display: block;
    margin-top: 10px;
    color: #aaa;
    font-size: 0.8em;
`;

const SelectButton = styled.button`
    background-color: #e60023;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #cc001d;
    }
`;

interface Props {
    item: ImageItem;
    isSelected: boolean;
    toggleSelect: (item: ImageItem) => void;

}


const ImageCard = ({ item, isSelected, toggleSelect }: Props) => {
    return (
        <Card>
            <Image src={item.url} alt={item.title} />
            <Content>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <DateText>Posted on: {new Date(item.created).toLocaleDateString()}</DateText>
                <SelectButton onClick={() => toggleSelect(item)}>
                    {isSelected ? 'Unselect' : 'Select'}
                </SelectButton>
            </Content>
        </Card>
    );
};

export default ImageCard;
