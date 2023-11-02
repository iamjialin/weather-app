const BackgroundImage = ({className, children, src}) => {
  return (
    <div className={className} style={{ backgroundImage: `url(${src})` }}>
      {children}
    </div>
  )
}

export default BackgroundImage;
