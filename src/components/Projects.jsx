import React from 'react';
import { Link } from 'react-router-dom';
import pantry from '../assets/pal.png';
import BVIII from '../assets/BVIII.png';
import collabo from '../assets/collabo.png';
import playground from '../assets/playground.png';
import heart from '../assets/heart.png';

export default function Projects() {
  return (
    <>
      <section className="mx-auto fadein px-6">
        <Link className="text-xl absolute top-6 right-8 subpixel-antialiased" to="/">home</Link>
        <h1 className="title text-7xl md:text-8xl relative top-10 subpixel-antialiased">projects</h1>
        <div className="flex justify-center items-center">
          <article className="container flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly md:items-center">
            <div className="icon text-center text-3xl subpixel-antialiased p-6">
              <Link
                to="https://pantry-pal-colab.herokuapp.com/">
                <img
                  src={ pantry }
                  alt="icon for pantry pal"
                  className="project_icon w-72"
                />
                <label className="label text-center">pantry pal</label>
              </Link>
            </div>
            <div className="text-center text-3xl subpixel-antialiased p-6">
              <Link
                to="https://tourmaline-lollipop-044f88.netlify.app/">
                <img
                  src={ playground }
                  alt="icon for playground"
                  className="project_icon"
                />
                <label className="label">playground</label>
              </Link>
            </div>
            <div className="text-center text-3xl subpixel-antialiased p-6">
              <Link
                to="https://buddystockviii.com">
                <img
                  src={ BVIII }
                  alt="icon for buddystock"
                  className="project_icon h-80 mb-10 md:mx-32"
                />
                <label className="label">buddystock</label>
              </Link>
            </div>
            <div className="text-center text-3xl subpixel-antialiased p-6">
              <Link
                to="https://collabomusic.co/">
                <img
                  src={ collabo }
                  alt="icon for collabo"
                  className="project_icon h-80 my-4 md:mx-32"
                />
                <label className="label">collabo</label>
              </Link>
            </div>
            <div className="text-center text-3xl subpixel-antialiased p-6">
              <Link
                to="https://adaamsfavoritebooks.netlify.app/">
                <img 
                  src={ heart } 
                  alt="a heart image" 
                  className="project_icon h-60 mb-10 md:mx-32" />
                <label className="label mb-12">favorite books</label>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
  