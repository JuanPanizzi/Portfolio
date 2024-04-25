import { useEffect, useState } from 'react'
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
    
    <div className='fixed top-0 left-0 right-0  mx-auto w-4/5 md:w-4/5  '>
        <nav className=''>
            <ul className={` md:text-lg  md:flex md:justify-evenly font-medium text-xs  flex justify-center  items-center rounded-b-lg p-1 text-white transition-all duration-300 ${scrolled ? 'bg-black-cards blur-bg-white' : ''} `}>
                <li className='text-sm md:text-base hover:text-green-1 transition'> <a href="#proyectos"> Proyectos </a></li>
                <li className='text-sm md:text-base mx-2 md:mx-0 hover:text-green-1 transition'> <a href="#tecnologias"> Tecnologías </a> </li>
                <li className='text-sm md:text-base mr-2 md:mx-0 hover:text-green-1 transition'><a href="#aboutme">  Sobre Mí </a></li>
                <li className='text-sm md:text-base hover:text-green-1 transition'> <a href="#contacto"> Contacto </a> </li>
            </ul>
        </nav>
    </div>
  )
}
