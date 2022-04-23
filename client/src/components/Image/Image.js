import React from 'react';
import Img from "react-cool-img";
function Image({src, fallbackSrc,alt,mediaType="image/webp",...delegated}) {
  return (
    <picture>
      <source srcSet={src} type={mediaType} srcset="path/to/image.jp2" />
      <Img src={fallbackSrc} alt={alt} />
    </picture>
  );
}

export default Image