import React from 'react';

const BackgroundImage = ({className, children, src, linearGradient}) => {
  return (
    <div className={className} style={{backgroundImage: `url(${src}), ${linearGradient}`}}>
      {children}
    </div>
  );
};

export default BackgroundImage;
