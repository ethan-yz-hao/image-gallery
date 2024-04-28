import styled from 'styled-components';
import { FaRegCircle, FaCheckCircle } from 'react-icons/fa'; // Importing icons
import { ImageItem } from "@/hooks/useImages.ts";

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
    padding: 5px 15px 10px 15px;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    position: relative;
`;

const TitleRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h3`
    text-align: left;
    color: #333;
    font-size: 1.4em;
    margin: 0;
`;

const Description = styled.p`
    text-align: left;
    margin: 5px 0;
    color: #555;
    font-size: 0.9em;
`;

const DateText = styled.small`
    text-align: left;
    display: block;
    color: #aaa;
    font-size: 0.8em;
`;

const SelectIcon = styled.span`
    color: #e60023;
    cursor: pointer;

    &:hover {
        color: #cc001d;
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
                <TitleRow>
                    <Title>{item.title}</Title>
                    <SelectIcon onClick={() => toggleSelect(item)}>
                        {isSelected ? <FaCheckCircle size="1.5em" /> : <FaRegCircle size="1.5em" />}
                    </SelectIcon>
                </TitleRow>
                <Description>{item.description}</Description>
                <DateText>Posted on: {new Date(item.created).toLocaleDateString()}</DateText>
            </Content>
        </Card>
    );
};

export default ImageCard;
