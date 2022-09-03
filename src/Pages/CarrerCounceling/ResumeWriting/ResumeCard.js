import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/icon/profile.png';
import "../AllArticle/Article.css";

const ResumeCard = ({ resume }) => {
  const { title, blog, name, date, _id,img } = resume;
  const navigate = useNavigate();
  return (
    <div className="md:w-[500px] mx-auto  ">
    <div className="blog_post p-10  h-[350px] md:h-[300px] mt-12  ">
      <div className="img_pod">
        {
          img ? <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={img} />
          </div>
        </div>:<img src={logo} alt="" />
        }
      </div>
      <div className=" mt-12">
        <div className="md:flex justify-between">
          <h3 className="text-gray-500 text-[17px]">{name}</h3>
          <h3 className="text-gray-500">{date}</h3>
        </div>
        <h1 className="text-[22px] my-4 font-[600]">{title}</h1>
        <p className="blog-post text-gray-400">{blog.slice(0,100)} 
        
        <span     className="text-[15px] font-bold text-[#3f66da]" onClick={() => navigate(`/career-counselling/blog/${_id}`)}>see more...</span> </p>
      </div>
    </div>
  </div>
  );
};

export default ResumeCard;
