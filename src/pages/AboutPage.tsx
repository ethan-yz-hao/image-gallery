import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    max-width: 800px;
    margin: auto;
    padding: 20px;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Title = styled.h1`
    font-size: 24px;
    color: #e60023;
`;

const Subtitle = styled.h2`
    font-size: 18px;
    color: #e60023;
`;

const Text = styled.p`
    font-size: 16px;
    text-align: left;
    line-height: 1.5;
`;

const List = styled.ul`
    padding-left: 20px;
`;

const ListItem = styled.li`
    text-align: left;
    margin-bottom: 10px;
`;

const Command = styled.code`
    background: #f5f5f5;
    border-radius: 4px;
    padding: 4px 8px;
    font-family: monospace;
    text-align: left;
`;

const AboutPage: React.FC = () => {
    return (
        <div style={{
            width: '100%',
            position: 'fixed',
            top: '45px'
        }}>
            <Container>
                <Title>Image Gallery</Title>
                <Text>This web application is built with React and TypeScript and allows users to interactively view,
                    sort,
                    select, and download images. Utilizing Redux for state management and Styled Components for custom
                    styled elements, it offers a responsive and engaging user experience.</Text>

                <Subtitle>Features</Subtitle>
                <List>
                    <ListItem><b>Infinite Scrolling Image Gallery:</b> Displays images using a masonry layout that
                        supports
                        infinite scrolling.</ListItem>
                    <ListItem><b>Loading Skeleton:</b> Provides a placeholder loading skeleton while images are being
                        fetched.</ListItem>
                    <ListItem><b>Image Sorting:</b> Users can sort images by date and title, in both ascending and
                        descending
                        orders.</ListItem>
                    <ListItem><b>Image Search:</b> Includes a search functionality to filter images by title or
                        description.</ListItem>
                    <ListItem><b>Image Selection:</b> Supports multiple selections, select all, clear all, and a
                        dropdown for
                        bulk
                        actions.</ListItem>
                    <ListItem><b>Responsive Layout:</b> Adapts smoothly from desktop to mobile screens, with dynamic
                        adjustments in
                        the utility bar for different devices.</ListItem>
                </List>

                <Subtitle>Technologies</Subtitle>
                <List>
                    <ListItem><b>Styled Components & React Icons:</b> For styling and iconography.</ListItem>
                    <ListItem><b>React Masonry CSS:</b> For creating an optimal masonry layout of images.</ListItem>
                    <ListItem><b>React Router Dom:</b> For routing capabilities within the application.</ListItem>
                    <ListItem><b>React Redux:</b> For managing global state, specifically for tracking selected
                        images.</ListItem>
                </List>

                <Subtitle>Installation</Subtitle>
                <Text>1. Clone the repository and navigate to the project directory.</Text>
                <Command>git clone https://github.com/ethan-yz-hao/image-gallery.git</Command>
                <Command>cd image-gallery</Command>
                <Text>2. Install the dependencies.</Text>
                <Command>npm install</Command>
                <Text>3. Start the development server.</Text>
                <Command>npm run dev</Command>
            </Container>
        </div>
    );
};

export default AboutPage;
