import React from 'react'
import './App.css'
import Footer from './footer'
import { FaPython, FaJs, FaCss3, FaHtml5, FaFlask, FaNodeJs, FaJava, FaPhp, FaCuttlefish } from 'react-icons/fa'

function Home() {
  return (
    <>
    <div class="bg-gray-900 text-gray-300 min-h-screen bg-dark flex flex-col items-center justify-center text-center relative">
  <div class="bg-gray-900 text-gray-300 absolute top-4 left-4 flex items-center">
    <span class="text-3xl font-bold text-blue-500">IK</span>
    <span class="text-3xl font-bold text-gray-500">.</span>
  </div>

    <div class="absolute top-4 right-4 sm:block hidden">
    <div class="space-y-2">
      <div class="w-8 h-1 bg-blue-500"></div>
      <div class="w-8 h-1 bg-blue-500"></div>
      <div class="w-8 h-1 bg-blue-500"></div>
    </div>
  </div>

    <div className="relative flex flex-col items-center">
    {/* <div className="relative mb-6"> */}
      
    {/* <div className="relative w-[300px] h-[300px] rounded-full border border-gray-400">
    <FaPython className="absolute inset-0 transform rotate-0 translate-x-[120px] text-blue-500 w-12 h-12 animate-spin-slow" />
  <FaJs className="absolute inset-0 transform rotate-45 translate-x-[120px] text-yellow-500 w-12 h-12 animate-spin-slow" />
  <FaCss3 className="absolute inset-0 transform rotate-90 translate-x-[120px] text-blue-600 w-12 h-12 animate-spin-slow" />
  <FaHtml5 className="absolute inset-0 transform rotate-135 translate-x-[120px] text-orange-500 w-12 h-12 animate-spin-slow" />
  <FaFlask className="absolute inset-0 transform rotate-180 translate-x-[120px] text-black w-12 h-12 animate-spin-slow" />
  <FaNodeJs className="absolute inset-0 transform rotate-225 translate-x-[120px] text-green-500 w-12 h-12 animate-spin-slow" />
  <FaJava className="absolute inset-0 transform rotate-270 translate-x-[120px] text-red-600 w-12 h-12 animate-spin-slow" />
  <FaPhp className="absolute inset-0 transform rotate-315 translate-x-[120px] text-indigo-500 w-12 h-12 animate-spin-slow" />
</div> */}
      {/* </div> */}
    
    
    <div className=" min-h-screen flex p-6">
      <div className="max-w-md flex-shrink-0">
    <div className="h-0.5 w-20 bg-blue-400 mt-1 mr-1"></div>
    <p className="text-blue-400 text-sm tracking-wide" >Intro</p>
    
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-4">Hi there, I'm Izaack Kuria.</h1>
    <p className='text-lg md:text-xl text-gray-400 mb-6'>
    I'm a passionate software developer who loves building 
        intuitive and responsive web applications. With hands-on 
        experience in frameworks like Flask, Django, and 
        React.js,I enjoy turning ideas into functional, user-friendly digital
        solutions. I have a strong foundation in JavaScript, HTML5, 
        CSS, and Tailwind, which allows me to create seamless and visually 
        appealing user experiences. I'm always excited to embrace new technologies
         and thrive in collaborative, fast-paced environments.</p>
    <div className='space-x-4'>
    <button className='px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md'>Get in touch</button>
    <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-md">View Work</button>
    </div>
    </div>
    </div>

    <div className='min-h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white p-8'>
      <div className='mb-10'>
      <h3 className='text-3xl font-bold mb-4"'>About me</h3>
      </div>
      <div className=''>
    <p className='text-2xl font-semibold mb-6'>Skills</p>


  <div class="flex flex-wrap gap-4">
        <span class="bg-gray-800 py-2 px-4 rounded-md">Go</span>
        <span class="bg-gray-800 py-2 px-4 rounded-md">JavaScript</span>
        <span class="bg-gray-800 py-2 px-4 rounded-md">TypeScript</span>
        <span class="bg-gray-800 py-2 px-4 rounded-md">Python</span>
        <span class="bg-gray-800 py-2 px-4 rounded-md">Angular 2+</span>
        <span class="bg-gray-800 py-2 px-4 rounded-md">CSS3 | SASS</span>
        <span class="bg-gray-800 py-2 px-4 rounded-md">HTML5</span>
        <span class="bg-gray-800 py-2 px-4 rounded-md">Node.js | Express.js</span>
        <span class="bg-gray-800 py-2 px-4 rounded-md">Django</span>
        <span class="bg-gray-800 py-2 px-4 rounded-md">Flask</span>
        <span class="bg-gray-800 py-2 px-4 rounded-md">Fast API</span>
        <span class="bg-gray-800 py-2 px-4 rounded-md">MySQL</span>
      </div>

    </div>
    </div>
    <div>
      <h3>Experience</h3>
      <p>In experience</p>
    </div>
    <div>
      <h3>Projects</h3>

    </div>
    <div class="min-h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white py-12">
  
  <div class="text-left mb-10 px-8">
    <h3 class="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">Testimonials</h3>
  </div>

  
  <div class="relative flex items-center justify-center">
    
    <div class="max-w-4xl text-center px-6 py-8 bg-gray-800 rounded-xl shadow-lg relative">
      <p class="text-xl italic leading-relaxed mb-4">
        "Exceptional problem-solver with an unmatched ability to transform complex ideas into seamless, functional code. Their attention to detail, creativity, and commitment to quality are truly world-class."
      </p>
      <h4 class="text-lg font-semibold text-blue-400">Stephen Kuria</h4>
      <p class="text-blue-400">Founder @pure Care</p>
      
      
      <div class="absolute text-8xl text-blue-500 -top-12 left-4 transform rotate-180">“</div>
    </div>

    <div class="absolute top-0 left-0 transform translate-y-8 -translate-x-8">
      <img src="avatar1.jpg" class="h-24 w-24 rounded-full border-4 border-blue-500 shadow-lg" />
    </div>
    <div class="absolute top-16 right-0 transform translate-y-4 translate-x-8">
      <img src="avatar2.jpg" class="h-20 w-20 rounded-full border-4 border-gray-500 shadow-lg grayscale" />
    </div>
    <div class="absolute bottom-16 left-0 transform translate-y-4 -translate-x-12">
      <img src="avatar3.jpg" class="h-16 w-16 rounded-full border-4 border-green-400 shadow-lg" />
    </div>
    <div class="absolute bottom-4 right-0 transform translate-y-12 translate-x-4">
      <img src="avatar4.jpg" class="h-20 w-20 rounded-full border-4 border-blue-500 shadow-lg grayscale" />
    </div>
    <div class="absolute bottom-0 left-12 transform translate-y-4 translate-x-6">
      <img src="avatar5.jpg" class="h-20 w-20 rounded-full border-4 border-gray-500 shadow-lg grayscale" />
    </div>
  </div>
</div>
    <div>
      <h3>What's Next?</h3>
    </div>
    </div>
    </div>
      <Footer />
    </>
  )
}

export default Home

