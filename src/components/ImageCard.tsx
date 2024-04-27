import React from 'react';
import styled from 'styled-components';

export interface ImageItem {
    title: string;
    description: string;
    url: string;
    created: string;
}

const Card = styled.div`
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 10px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const Content = styled.div`
    padding: 15px;
`;

const Title = styled.h3`
    margin: 0;
    color: #333;
    font-size: 1.2em;
`;

const Description = styled.p`
    color: #666;
    font-size: 0.9em;
`;

const DateText = styled.small`
    display: block;
    margin-top: 10px;
    color: #999;
    font-size: 0.8em;
`;

const ImageCard: React.FC<{ item: ImageItem }> = ({item}) => {
    return (
        <Card>
            <Image src={item.url} alt={item.title}/>
            <Content>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <DateText>Posted on: {new Date(item.created).toLocaleDateString()}</DateText>
            </Content>
        </Card>
    );
};

export default ImageCard;