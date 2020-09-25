import React from 'react';
import Imgix from "react-imgix";

function Gallery() {
  const images = ['Alpha_Photoshoot1', 'Alpha_Photoshoot2',
    'Alpha_Photoshoot3', 'CrossingOver'
  ];

  const buildURL = imagePath => `https://tps-pics.s3.us-east-2.amazonaws.com/${imagePath}.jpg`

  return (
    <div className="App-main">
      <h2 className='title'>Gallery</h2>
      <div className='gallery'>
        {images.map(image => (
          <Imgix
            sizes='(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw'
            src={buildURL(image)}
            imgixParams={{
              fit: 'crop',
              fm: 'jpg'
            }}
            width='auto'
            height={600}
            className='image'
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;