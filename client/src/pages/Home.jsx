import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import BlogList from '../components/BlogList';
import NewsLtter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <BlogList/>
      <NewsLtter/>
      <Footer/>
    </>
  )
}

export default Home;
