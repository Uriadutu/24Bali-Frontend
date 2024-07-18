import React from 'react'

const BaliResponse = () => {
  return (
    <div className="p-10">

    <div class="mt-[60px] bg-white p-6 rounded-2xl p-5 w-full h-[90%] shadow-lg flex flex-col justify-between">
      <p className='text-center font-bold'>List Response</p>

      <div class="responses grid grid-cols-2 gap-5 mt-5">
        <div class="response-item bg-gray-100 rounded-xl p-5 flex flex-col justify-between shadow-md">
          <div class="user-info flex items-center mb-2.5">
            <div class="avatar bg-red-500 w-12 h-12 rounded-full mr-2.5"></div>
            <div class="user-details flex flex-col">
              <strong class="text-lg">User1234</strong>
              <small class="text-gray-500">Tuesday, 18.30</small>
            </div>
          </div>
          <p class="question font-bold my-2.5">Where do i find a Cozy Caffe?</p>
          <p class="admin-response text-sm text-gray-800 my-2.5">
            Admin: Hello! You can find caffe on any legian streets
          </p>
          <div class="actions flex justify-end gap-2.5 text-xl">
            <span class="like cursor-pointer">&#128077;</span>
            <span class="share cursor-pointer">&#128257;</span>
          </div>
        </div>
        <div class="response-item bg-gray-100 rounded-xl p-5 flex flex-col justify-between shadow-md">
          <div class="user-info flex items-center mb-2.5">
            <div class="avatar bg-red-500 w-12 h-12 rounded-full mr-2.5"></div>
            <div class="user-details flex flex-col">
              <strong class="text-lg">User1234</strong>
              <small class="text-gray-500">Tuesday, 18.30</small>
            </div>
          </div>
          <p class="question font-bold my-2.5">Where do i find a Cozy Caffe?</p>
          <p class="admin-response text-sm text-gray-800 my-2.5">
            Admin: Hello! You can find caffe on any legian streets
          </p>
          <div class="actions flex justify-end gap-2.5 text-xl">
            <span class="like cursor-pointer">&#128077;</span>
            <span class="share cursor-pointer">&#128257;</span>
          </div>
        </div>
        <div class="response-item bg-gray-100 rounded-xl p-5 flex flex-col justify-between shadow-md">
          <div class="user-info flex items-center mb-2.5">
            <div class="avatar bg-red-500 w-12 h-12 rounded-full mr-2.5"></div>
            <div class="user-details flex flex-col">
              <strong class="text-lg">User1234</strong>
              <small class="text-gray-500">Tuesday, 18.30</small>
            </div>
          </div>
          <p class="question font-bold my-2.5">Where do i find a Cozy Caffe?</p>
          <p class="admin-response text-sm text-gray-800 my-2.5">
            Admin: Hello! You can find caffe on any legian streets
          </p>
          <div class="actions flex justify-end gap-2.5 text-xl">
            <span class="like cursor-pointer">&#128077;</span>
            <span class="share cursor-pointer">&#128257;</span>
          </div>
        </div>
        <div class="response-item bg-gray-100 rounded-xl p-5 flex flex-col justify-between shadow-md">
          <div class="user-info flex items-center mb-2.5">
            <div class="avatar bg-red-500 w-12 h-12 rounded-full mr-2.5"></div>
            <div class="user-details flex flex-col">
              <strong class="text-lg">User1234</strong>
              <small class="text-gray-500">Tuesday, 18.30</small>
            </div>
          </div>
          <p class="question font-bold my-2.5">Where do i find a Cozy Caffe?</p>
          <p class="admin-response text-sm text-gray-800 my-2.5">
            Admin: Hello! You can find caffe on any legian streets
          </p>
          <div class="actions flex justify-end gap-2.5 text-xl">
            <span class="like cursor-pointer">&#128077;</span>
            <span class="share cursor-pointer">&#128257;</span>
          </div>
        </div>
      </div>

      <div class="bottom-bar text-right mt-5">
        <a href="#" class="font-bold text-gray-800">
          For More &gt;&gt;
        </a>
      </div>
    </div>
    </div>
  );
}

export default BaliResponse
