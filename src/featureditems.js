import './topproducts.css';
import pc from './images/pc.webp';
import pc1 from './images/pc1.jpg';
import pc3 from './images/pc3.webp';
import cpu from './images/cpu.jpg';
import hyperx from './images/hyperx.webp';
import streaming from './images/streaming.jpg';
import { useInView } from 'react-intersection-observer';

const Featured = ()=>{

    return(
        <div style={{margin:'100px 30px'}}>
        <p className="title">Blogs</p>
        <div className="featured-products">
            <div className="left-featured">
                <div>
                    <img src={pc} alt="Here" />
                    <div className="featured-info">
                    <p>Prebuilt Gaming PC</p>
                    Start your gaming journey with professionally designed RDY prebuilt systems and get Free 2-Day Shipping!
                    </div>
                </div>
                
                <div>
                    <img src={pc1} alt="Here" />
                </div>

                <div>
                    <img src={pc1} alt="Here" />
                </div>
            </div>

            <div className="right-featured">
                <div className="right-featured-divs">
                    <img src={cpu} alt="Here" />
                </div>

                <div className="right-featured-divs">
                    <img src={pc3} alt="Here" />
                </div>
            </div>
        </div>
        <Partnered />
        <Special />
        <Community />
    </div>
    );
}

const Special = ()=>{
    const specialBlogs = [
        {images:streaming, body:`From gaming microphones with stunning RGB, to gaming monitors optimize for streaming, 
         HyperX has everything you need for streaming and content creation`,title:"Streamers Collection"},
         {images:streaming, body:`From gaming microphones with stunning RGB, to gaming monitors optimize for streaming, 
         HyperX has everything you need for streaming and content creation`,title:"Streamers Collection"},
         {images:streaming, body:`From gaming microphones with stunning RGB, to gaming monitors optimize for streaming, 
         HyperX has everything you need for streaming and content creation`,title:"Streamers Collection"},
    ]
    return(
        <div>
            {
                specialBlogs.map((items,index)=>(
       <Blogs index={index} items ={items} key ={index} />
    ))
            }
        </div>
    );
   
}

const Blogs = ({items,index})=>{

    const { ref: blogRef, inView: isBlogInView } = useInView({
        threshold: 0,
      });

      const isEvenIndex = index % 2 === 0;

      return(
        <div className={`special${!isEvenIndex?'-even':'-odd'}`} key={index} ref={blogRef}
        style={{transform:isBlogInView?'translate(0%)':isEvenIndex?'translate(-50%)':'translate(50%)'}}
        >
            <div className="special-img">
                <img src={items.images} alt={index}/>
            </div>

            <div className="special-texts">
                <p style={{fontSize:'40px',
                marginBottom:'20px'
                }}>
                    {items.title}
                </p>
                <p>{items.body}</p>
                <button className="buy-now-button">Buy Now</button>
            </div>
        </div>
    );

}

const Partnered = ()=>{
    return(
        <div className="carasoule">
            <div className="thisStyle">
                <div>HyperX</div>
                <div>Logitech</div>
                <div>Predator</div>
                <div>Razer</div>
                <div>RedDragon</div>
                
            </div>

            <div className="thisStyle">
                <div>HyperX</div>
                <div>Logitech</div>
                <div>Predator</div>
                <div>Razer</div>
                <div>RedDragon</div>
                
            </div>

          
        </div>
    )
}


const Community = ()=>{
const Images = [
    pc1,pc3,pc,hyperx,
]

    return(
        <div className="community">
        {
            Images.map((img,index)=>(

                <img src={img} alt={index} key ={index} />
            ))
        }
        </div>
    );
}
export default Featured;