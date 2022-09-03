import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const MyblogCard = ({ blog, setBlogId }) => {
  const { blogType, title, blog: text, _id,likes } = blog;
  const [isOpen,setOpen] = useState(false)
  const navigate = useNavigate();

  return (
    <div>
      <div class="card max-w-sm h-[100%] bg-base-100 shadow-sm mt-4">
        <div class="card-body">
          <h2 className="text-xl font-bold">{blogType}</h2>
          <h2 class="card-title">{title}</h2>
          <p className="text-gray-500">
            {text.length > 100 ? <span>{text.slice(0,100) }{
              isOpen && <span>{text.slice(100,text.length)}</span>
            }
             <span onClick={()=>setOpen(!isOpen)} className="text-[#3f66da] font-bold">{isOpen ? "see less" :"see more..."}   </span>   </span>
              :text}
              </p>
              <p className="font-bold">likes:{likes.length}</p>
          <div class="card-actions justify-end">
            <BiEdit onClick={() => navigate(`/dashboard/edit-blog-post/${_id}`)} className="text-2xl text-[#f7a000] mr-2" />
            <label onClick={() => setBlogId(_id)} for="blog-delete-modal">
              <AiFillDelete className="text-2xl text-red-600 mr-2" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyblogCard;
