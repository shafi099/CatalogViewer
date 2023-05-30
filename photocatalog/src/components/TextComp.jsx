import React from 'react'
import TextDesc from './TextDesc'
import playpic from '../pics/playpic.png';
import pausepic from '../pics/pausepic.png';

const TextComp = ({selectedImage, taj,maldives,goa,ladakh,singapore, italy, toggleSlideshow,slideshowActive}) => {
  return (
    <div className='TextPlayPortion'>
        <TextDesc selectedImage={selectedImage} taj={taj} maldives={maldives} goa={goa} ladakh={ladakh} singapore={singapore} italy={italy}/>
        <span>
          <button className='playpausebtn' onClick={toggleSlideshow}>{slideshowActive ? <img src={pausepic} alt='pause' className='playpause' /> : <img src={playpic} alt='pause' className='playpause' />}</button>
        </span>
      </div>
  )
}

export default TextComp