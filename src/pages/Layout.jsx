import React from 'react'
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <div className="fixed top-0 w-full p-3 bg-white z-[100] drop-shadow-lg">
        <Navbar />
      </div>
      <div
        className="flex bg-[#37B9C2] mt-3 z-10"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-full">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Layout
