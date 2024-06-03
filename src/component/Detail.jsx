import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getBeritabyId = async (idBerita) => {
    try {
      const response = await axios.get(`http://localhost:5000/laporan/${idBerita}`);
      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeritabyId(id);
  }, [id]);

  return (
    <div>
      <div className="mt-[60px]">
        <img className="w-full h-[600px]" style={{objectFit: "cover"}} src={detail && detail.url} alt="" />
        <div className="my-5 flex justify-center">{detail && detail.Title}</div>
        <div className="flex jutify-end px-[100px] grid gap-x-5 grid-cols-2 mt-[80px]">
          <div className="w-full">
            <p>{detail && detail.Content}</p>
          </div>
          <div className="">
            <p>contoh</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Detail;
