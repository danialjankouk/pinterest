import React, { useEffect, useState } from "react";
import { getImages } from "../api";
const Landing = () => {
  const [data , setData] = useState([])
  useEffect(()=>{
    const fetchApi = async ()=>{
      const data = await getImages()
      setData(data.hits)
    }
    fetchApi()
  },[])
  
  return (
    <div className="grid grid-cols-6 gap-4 mt-5">
      {data.map((img)=>{
        return(
          <div key={img.id} className="flex h-[20rem] p-1 mt-10 flex-col justify-around">
            <img src={img.userImageURL} alt={img.tags} className={`rounded-xl cursor-zoom-in hover:brightness-50`}/>  
            <p>{img.user}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Landing;
