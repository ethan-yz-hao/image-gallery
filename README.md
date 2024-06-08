# Image Gallery

![Image Gallery Homepage](https://raw.githubusercontent.com/ethan-yz-hao/image-gallery/main/images/home.png)

This web application is built with React and TypeScript and allows users to interactively view, sort, select, and download images. Utilizing Redux for state management and Styled Components for custom styled elements, it offers a responsive and engaging user experience.

Deployed on Vercel: [Image Gallery](https://image-gallery-kappa-six.vercel.app/)

## Features
- **Infinite Scrolling Image Gallery**: Displays images using a masonry layout that supports infinite scrolling.
- **Loading Skeleton**: Provides a placeholder loading skeleton while images are being fetched.
- **Image Sorting**: Users can sort images by date and title, in both ascending and descending orders.
- **Image Search**: Includes a search functionality to filter images by title or description.
- **Image Selection**: Supports multiple selections, select all, clear all, and a dropdown for bulk actions.
- **Responsive Layout**: Adapts smoothly from desktop to mobile screens, with dynamic adjustments in the utility bar for different devices.
- **Download Selected Images**: Allows users to download selected images.
  - ![Image Gallery Download](https://raw.githubusercontent.com/ethan-yz-hao/image-gallery/main/images/download.png)

## Technologies

- **Styled Components & React Icons**: For styling and iconography.
- **React Masonry CSS**: For creating an optimal masonry layout of images.
- **React Router Dom**: For routing capabilities within the application.
- **React Redux**: For managing global state, specifically for tracking selected images.

## Installation

1. Clone the repository and navigate to the project directory.
   ```
   git clone https://github.com/ethan-yz-hao/image-gallery.git
   cd image-gallery
   ```

2. Install the dependencies.
   ```
   npm install
   ```

3. Start the development server.

   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.
   ```
   npm run dev
   ```
