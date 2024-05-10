import './topproducts.css';
import pc from './images/pc.webp';
import pc1 from './images/pc1.jpg';
import pc3 from './images/pc3.webp';
import cpu from './images/cpu.jpg';
import hyperx from './images/hyperx.webp';
import streaming from './images/streaming.jpg';
import { useInView } from 'react-intersection-observer';
import { Data } from './data';
import { useRef } from 'react';

import { FaRegUser } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";

const Featured = ()=>{

    return(
        <div style={{margin:'100px 30px'}}>
        <p className="title">Blogs</p>
        <div className="featured-products">
            <div className="left-featured">
                <div>
                    <img src={pc} alt="Here" />
                    <div className="featured-info">
                    <h2 style={{marginBottom:'2rem'}}>Prebuilt Gaming PC</h2>
                    Start your gaming journey with professionally designed RDY prebuilt systems and get Free 2-Day Shipping!
                    </div>
                </div>
            </div>

            <div className="right-featured">
                {
                    Data.slice(0,4).map((blog,index)=>(
                        <div className='blog-preview' key={blog.id}>
                            <img src={blog.image} alt={blog.title}/>
                            <div className='blog-preview-info'>
                                <h2>{blog.title}</h2>
                                <p style={{display:'flex',columnGap:'2rem',color:'rgb(197, 197, 197)' ,marginBottom:'1rem'}}>
                                    <p><FaRegUser />By {blog.author} </p>
                                    <div>
                                    {blog.likes}<AiOutlineLike className="stat-icon"/> {blog.comments}<FaRegComment className="stat-icon"/>  {blog.shares}<FaRegShareSquare className="stat-icon"/>
                                    </div>
                                </p>
                                <p>{blog.body}</p>
                            </div>  
                        </div>
                    ))
                }
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
                <p style={{fontSize:'4rem',
                marginBottom:'2rem'
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
    const container = useRef(null);
   
    const scroll = (dir)=>{
        const scrollAmount = container.current.clientWidth * dir;
        console.log(scrollAmount);
        container.current.scrollBy({
            left: scrollAmount,
            behavior: 'smooth', 
          });
    }

const Images = [
    pc1,pc3,pc,hyperx,pc1,pc3,pc,hyperx,
]

    return(
        <div>
            <h1>Join us and be a part of our family!!!</h1>
            <div className='community-container'>
            
             <div className="community" ref={container}>
            {
                Images.map((img,index)=>(
                    <div className='community-image' key={index}>
                        <img src={img} alt={index} key ={index} />
                    </div>
                    
                ))
            }
           
            </div>
            <button style={{left:'-2.5rem'}} onClick={()=>{scroll(-1)}}>&lt;</button>
            <button style={{right:'-2.5rem'}} onClick={()=>{scroll(1)}}>&gt;</button>
        </div>
        </div>
        
           
             
      
    );
}
export default Featured;