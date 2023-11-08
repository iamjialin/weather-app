const BackgroundImage = ({className, children, src, linearGradient}) => {
  console.log("In Background Image js",src)
  return (
    <div className={className} style={{backgroundImage: `url(${src}), ${linearGradient}`}}>
      {children}
    </div>
  );
};

export default BackgroundImage;
