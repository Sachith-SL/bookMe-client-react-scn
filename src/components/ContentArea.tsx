import React from 'react';

const ContentArea: React.FC = () => {
  const backgroundImageUrl = 'https://via.placeholder.com/1920x1080'; // Replace with your image URL

  return (
    <div
      style={{
        height: '100vh', // Full viewport height
        width: '100%', // Full width
        backgroundImage: `url(${backgroundImageUrl})`, // Set the background image
        backgroundSize: 'cover', // Make sure the image covers the whole area
        backgroundPosition: 'center', // Center the image
        display: 'flex', // Enable flexbox for centering
        justifyContent: 'center', // Horizontally center the content
        alignItems: 'center', // Vertically center the content
      }}
    >
      <h1 style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
        My App Name
      </h1>
    </div>
  );
};

export default ContentArea;
