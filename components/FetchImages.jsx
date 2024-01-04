// FetchImages.js
'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const FetchImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Replace 'YOUR_SERVER_ENDPOINT' with the actual endpoint to fetch images from your server
        const response = await axios.get('/api/upload');
        setImages(response.data.images); // Assuming the server responds with an array of image URLs
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {images.map((imageUrl, index) => (
        <div key={index} className="max-w-full h-auto rounded-md shadow-lg overflow-hidden">
          <Image
            src={imageUrl?.url}
            alt={`Images`}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};

export default FetchImages;
