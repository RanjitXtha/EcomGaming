import pc from '../images/pc.webp';
import pc1 from '../images/pc1.jpg';
import pc3 from '../images/pc3.webp';
import cpu from '../images/cpu.jpg';
import '../cssFiles/gallery.css';
import { products } from '../data';

import { useEffect , useState } from 'react'
const Gallery = () => {
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
                    {products.slice(0,5).map(item => (
                        <div className="top-items" key={item.index}>
                            <img src={item.image} alt={item.index}/>
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