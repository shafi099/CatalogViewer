import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import taj from './pics/taj.jpeg';
import italy from './pics/italy.jpg';
import maldives from './pics/maldives.jpg';
import singapore from './pics/singapore.jpg';
import ladakh from './pics/ladakh.jpg';
import goa from './pics/goa.jpg';
import ImagesComp from './components/Images Comp';
import TextComp from './components/TextComp';

const images = [taj, italy, singapore, ladakh, maldives, goa];

function App() {
  const [selectedImage, setSelectedImage] = useState(taj);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [slideshowActive, setSlideshowActive] = useState(false);

  const goToNextImage = useCallback(() => {
    const nextIndex = (selectedImageIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setSelectedImageIndex(nextIndex);
  }, [selectedImageIndex]);


  useEffect(() => {
    let intervalId;

    if (slideshowActive) {
      intervalId = setInterval(goToNextImage, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [slideshowActive, goToNextImage]);



  const goToPreviousImage = () => {
    const previousIndex = (selectedImageIndex + images.length - 1) % images.length;
    setSelectedImage(images[previousIndex]);
    setSelectedImageIndex(previousIndex);
  };




  const goToImage = (index) => {
    setSelectedImage(images[index]);
    setSelectedImageIndex(index);
  };

  const toggleSlideshow = () => {
    setSlideshowActive((prevSlideshowActive) => !prevSlideshowActive);
  };

  return (
    <div className='App'>
      
      <ImagesComp selectedImage={selectedImage} goToPreviousImage={goToPreviousImage} 
      images={images} selectedImageIndex={selectedImageIndex} 
      goToImage={goToImage} goToNextImage={goToNextImage}
      />

      <TextComp selectedImage={selectedImage} taj={taj} 
      maldives={maldives} goa={goa} 
      ladakh={ladakh} singapore={singapore} 
      italy={italy} toggleSlideshow={toggleSlideshow}
      slideshowActive={slideshowActive}
      />

    </div>
  );
}

export default App;

