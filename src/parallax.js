import React, { useState, useEffect } from 'react';
 // Assuming you have a CSS file for styling

const Parallax = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      console.log(window.scrollY);
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const outerStyle = {
    
    height: '500px',
    backgroundColor: 'red',
    position: 'relative',
    overflow:'hidden'
    
  };

  const innerTop = scrollPosition / 2 - 1350;

  const innerStyle = {
    height: '200px',
    backgroundColor: 'blue',
    position: 'absolute',
    top: `${innerTop}px`,
    left:'50%',
    width: '30%',
    zIndex:'2'
  };

  return (
    <div style={{height:'1000px'}}>
        <div className="outer" style={outerStyle} >
      <div className="inner" style={innerStyle}></div>
    </div>
    </div>
    
  );
};

export default Parallax;