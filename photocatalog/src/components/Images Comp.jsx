import React from 'react'
import OptionsComponent from './OptionsComponent';
import nextpic from '../pics/nextpic.png';
import prevpic from '../pics/prevpic.png';

const ImagesComp = ({selectedImage,goToPreviousImage, images, 
    selectedImageIndex, goToImage, goToNextImage}) => {
  return (
    <div className='imageSection'>
    <div className='highlight'>
      <img src={selectedImage} alt='location' />
    </div>
    <div className='options'>
      <span className='buttonPortion'>
        <button onClick={goToPreviousImage}>
          <img src={prevpic} alt='prevImageButton' className='prevNextButton' />
        </button>
      </span>
      <span>
        <OptionsComponent images={images} selectedImageIndex={selectedImageIndex} goToImage={goToImage}/>

      </span>
      <span className='buttonPortion'>
        <button onClick={goToNextImage}>
          <img src={nextpic} alt='prevImageButton' className='prevNextButton' />
        </button>
      </span>
    </div>
  </div>
  )
}

export default ImagesComp