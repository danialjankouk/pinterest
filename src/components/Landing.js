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
  function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  return (
    <div className="grid grid-cols-6 gap-4 mt-5">
      {data.map((img)=>{
        return(
          <div key={img.id} className="flex h-[20rem] p-1 flex-col justify-around">
            <img src={img.userImageURL} alt={img.tags} className={`rounded-xl`} height={randomInt(30,800)}/>  
            <p>{img.user}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Landing;
