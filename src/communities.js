import { Data } from "./data"
import './community.css';
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";

const Blogs = ()=>{
    return(
        <section>
            <div className="blogs">
                {
                    Data.map((blog,index)=>(
                        <div className="blog-preview" key={index}>
                            <img src={blog.image} alt={index} />
                           
                            <div className='blog-preview-info'> 
                                <div>
                                    <h2>{blog.title}</h2>
                                    <p className="author-name"><FaRegUser style={{marginRight:'5px'}}/> By {blog.author}</p>
                                </div>
                                <p>{blog.body}</p>
                                <p className="blog-stat">{blog.likes}<AiOutlineLike className="stat-icon"/> {blog.comments}<FaRegComment className="stat-icon"/>  {blog.shares}<FaRegShareSquare className="stat-icon"/></p>
                            </div> 
                        </div>
                    ))
                }
            </div>

        </section>
    );
}

export default Blogs;