import React from 'react'

const OptionsComponent = ({images, selectedImageIndex, goToImage}) => {
  return (
    <span className='imagesOptionsPortion'>
              {images.map((image, index) => (
                <span
                  key={index}
                  className={`imagesOptions ${selectedImageIndex === index ? 'highlighted' : 'normal'}`}
                  onClick={() => goToImage(index)}
                >
                  <img src={image} alt='location' />
                </span>
              ))}
            </span>
  )
}

export default OptionsComponent