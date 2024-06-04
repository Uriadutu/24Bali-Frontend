import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AddLaporan = () => {
  return (
    <div className="  p-10 ">
      <div className=" mt-[60px]  h-[100vh]  bg-white rounded-xl">
        <div className="flex px-6 pt-3">
          <div className="">
            <Link
              to={"/balireport"}
              className="flex gap-1 items-center font-semibold"
            >
              <FaArrowLeft />
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLaporan
