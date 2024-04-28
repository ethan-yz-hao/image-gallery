import styled, {keyframes} from 'styled-components';
import {FaCheckCircle, FaRegCircle} from 'react-icons/fa'; // Importing icons
import {ImageItem} from "@/hooks/useImages.ts";
import {useState} from "react";

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

const ImageWrapper = styled.div`
    width: 100%;
    background: #eee;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
`;

const Content = styled.div`
    padding: 10px 15px 10px 15px;
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
    display: flex;
    align-items: center;

    &:hover {
        color: #cc001d;
    }
`;

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const SkeletonImage = styled.div`
    height: 200px;
    background: #eee linear-gradient(to right, #eeeeee 0%, #dddddd 20%, #eeeeee 40%, #eeeeee 100%) no-repeat;
    animation: ${shimmer} 0.1s linear infinite;
    background-size: 800px 350px;
`;

interface Props {
    item: ImageItem;
    isSelected: boolean;
    toggleSelect: (item: ImageItem) => void;
}

const ImageCard = ({ item, isSelected, toggleSelect }: Props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <Card>
            <ImageWrapper>
                {!isLoaded && <div style={{ height: '300px', background: '#ccc'}}></div>}
                <Image
                    src={item.url}
                    alt={item.title}
                    onLoad={() => setIsLoaded(true)}
                    style={{ display: isLoaded ? 'block' : 'none' }}
                />
            </ImageWrapper>
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
