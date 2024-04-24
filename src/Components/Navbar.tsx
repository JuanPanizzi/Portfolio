import React, { useEffect, useState } from 'react'
import '../styles/navbar.css'

export const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  


  return (
    
    <div className='fixed top-1 left-0 right-0  mx-auto w-4/5 '>
        <nav className=''>
            <ul className={`text-xs  flex justify-center  items-center  rounded-full p-1 text-white transition-all duration-300 ${scrolled ? 'bg-black-cards blur-bg-white' : ''} `}>
                <li><a href="#proyectos"> Proyectos </a></li>
                <li className='mx-2 '> <a href="#tecnologias"> Tecnologías </a> </li>
                <li className='mr-2'><a href="#aboutme">  Sobre Mí </a></li>
                <li > <a href="#contacto"> Contacto </a> </li>
            </ul>
        </nav>
    </div>
  )
}
