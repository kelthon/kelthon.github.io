import { RiCameraOffLine } from '@remixicon/react';
import { useState } from 'react';
import './FallbackImage.css';
interface SizeProps {
  width?: string | number;
  height?: string | number;
}

interface ImageProps extends SizeProps {
  src: string;
  alt: string;
  radius?: string | number;
  color?: string;
  iconSize?: string | number;
  backgroundColor?: string;
}

function PlaceholderImage({
  src,
  alt,
  color,
  width,
  height,
  radius,
  iconSize,
  backgroundColor,
}: ImageProps): JSX.Element {
  const [useFallback, setUseFallback] = useState<boolean>(false);
  const changeToFallback = () => setUseFallback(true);

  return (
    <>
      {useFallback ? (
        <span
          className="image-placeholder"
          style={{
            width: width,
            height: height,
            borderRadius: radius,
            color: color ? color : 'inherit',
            backgroundColor: backgroundColor ? backgroundColor : 'inherit',
          }}
        >
          <RiCameraOffLine size={iconSize} />
        </span>
      ) : (
        <img
          className="image-wrapper"
          src={src}
          alt={alt}
          width={width}
          height={height}
          onError={changeToFallback}
          style={{ borderRadius: radius }}
        />
      )}
    </>
  );
}

export default PlaceholderImage;
