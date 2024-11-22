'use client'

import React, { useEffect } from 'react';

declare global {
  interface Window {
    initEmbed?: (formId: string) => void;
  }
}

const FormPopup: React.FC = () => {
  useEffect(() => {
    // Check if the script is already loaded
    if (document.querySelector('script[src="https://noteforms.com/widgets/embed-min.js"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://noteforms.com/widgets/embed-min.js';
    script.async = true;
    script.onload = () => {
      // Safely call initEmbed if it exists on the window object
      if (window.initEmbed) {
        window.initEmbed('hub-hyevny');
      }
    };
    document.body.appendChild(script);

    return () => {
      // Remove the script on component unmount
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className='fixed bottom-5 right-5 z-50'>
      {/* Noteforms widget will be embedded here */}
    </div>
  );
}

export default FormPopup;