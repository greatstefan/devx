// imageKit.js
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { IKContext } from 'imagekitio-react';

// Dynamically import IKImage with no SSR
const IKImage = dynamic(() => import('imagekitio-react').then(mod => mod.IKImage), { ssr: false });

// Replace with your ImageKit URL endpoint
const imagekitURL = 'https://ik.imagekit.io/devxdigital/devxwebsite/';

const ImageKitComponent = ({ path, alt, transformations = [], lazy = true, ...props }) => {
  const [isInView, setIsInView] = useState(!lazy);

  useEffect(() => {
    if (typeof window === 'undefined' || !lazy) {
      return;
    }

    const handleScroll = () => {
      const imgElement = document.querySelector(`img[alt="${alt}"]`);
      if (imgElement) {
        const rect = imgElement.getBoundingClientRect();
        const inView = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
        if (inView) {
          setIsInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount to check if already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [alt, lazy]);

  return (
    <IKContext urlEndpoint={imagekitURL}>
      <IKImage
        path={path}
        alt={alt}
        transformation={[
          ...transformations,
          { format: 'webp', quality: '80', lossless: true }
        ]}
        {...props}
        loading={lazy && !isInView ? 'lazy' : 'eager'} // Conditionally apply lazy loading
      />
    </IKContext>
  );
};

export default ImageKitComponent;
