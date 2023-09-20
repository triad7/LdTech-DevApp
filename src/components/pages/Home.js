import React from 'react';
import '../../App.css';
import About from '../Subpages/About';
import Footer from '../Subpages/Footer';
import Content from '../Subpages/Content';
import Contact from '../Subpages/Contact';

export default function Home() {
  return (
    <>
      <Content />
      <About />
      <Contact />
      <Footer />
    </>
  );
}