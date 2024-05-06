import pc from './images/pc.webp';
import pc1 from './images/pc1.jpg';
import pc3 from './images/pc3.webp';
import cpu from './images/cpu.jpg';

import mouse from './images/mouse.png';
import monitor from './images/monitor.png';
import keyboard from './images/keyboard.png';
import headset from './images/headset.png';
import computer from './images/computer.jpg';
import './gallery.css';

import { useEffect , useState } from 'react'
const Gallery = () => {
    const topProduct = [
        {images: mouse, name: 'Mouse', index: 1},
        {images: keyboard, name: 'Keyboard', index: 2},
        {images: headset, name: 'Accesories', index: 3},
        {images: monitor, name: 'Monitor', index: 4},
        {images: computer, name: 'Gaming PC', index: 4},
    ];


    const imageGallery = [
        {images:pc1,title:'Gaming PC',info:'Experience uncompromising performance',index:1},
        {images:pc,title:'Gaming PC',info:'Experience uncompromising performance',index:2},
        {images:pc3,title:'Gaming PC',info:'Experience uncompromising performance',index:3},
        {images:cpu,title:'Gaming PC',info:'Experience uncompromising performance',index:4},
    ]

    let [currentIndex , setCurrentIndex ] = useState(0);

    const decreaseIndex = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? imageGallery.length - 1 : prevIndex - 1));
    };

    const increaseIndex = () => {
        setCurrentIndex(prevIndex => (prevIndex === imageGallery.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            increaseIndex();
        }, 6000); 

        return () => clearInterval(intervalId);
    }, []);



    return (
        <div>
            <div className="container">
                <div className="scroll-image">
                    <div className="slider" id={imageGallery[currentIndex].index}>
                        <div className="slider-info">
                            <p style={{fontWeight: 'bolder'}}>{imageGallery[currentIndex].title}</p>
                            <p style={{fontSize: '2.3rem', marginTop:'1rem'}}>{imageGallery[currentIndex].info}</p>
                            <button className="buy-now-button">Shop Now</button>
                        </div>
                        <img className="slider-img" src={imageGallery[currentIndex].images} key={imageGallery[currentIndex].images} />
                    </div>
                    <nav className="slidernav-button1" onClick={decreaseIndex}></nav>
                    <nav className="slidernav-button2" onClick={increaseIndex}></nav>
                </div>

                <div className="slider-nav">
                    {imageGallery.map(item => (
                        <button key={item.index} className="slider-buttons" onClick={() => setCurrentIndex(item.index - 1)}
                        style={currentIndex+1===item.index?{backgroundColor:'white'}:null}></button>
                    ))}
                </div>
            </div>

            <section>
                <h1>Top products</h1>
                <div className="top-products">
                    {topProduct.map(item => (
                        <div className="top-items" key={item.index}>
                            <img src={item.images} alt={item.index}/>
                            <div>
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
        
    );
}


export default Gallery;