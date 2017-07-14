import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = ({ children }) => {
  // console.log('children from root', children)
  // children === Switch component/function 
  return (
  <div id="main" className="container-fluid">
    <Navbar />
    { children }
    <Footer />
  </div>
);
}

export default Root;
