
export const Footer = () => {

  return (

    <footer className="bg-black-cards h-20 mt-20 flex justify-center px-2">

       

        <div className="w-1/3  flex flex-col items-center justify-center text-center">
            
        <a href="https://www.linkedin.com/in/juan-panizzi-768522105/" target="_blank" className="text-base md:text-xl text-green-1 hover:font-bold">
        <i className=" hover:cursor-pointer hover:text-green-1   fa-brands fa-linkedin text-white block text-xl md:text-3xl "></i>Linkedin</a>
        </div>   

        <div className="w-1/3  flex flex-col justify-center items-center text-center">
          <a href="mailto:juanpanizzi@hotmail.com"  className="text-base md:text-xl text-green-1 hover:font-bold">
        <i className=" hover:cursor-pointer hover:text-green-1  fa-regular fa-envelope text-white  block text-xl md:text-3xl "></i> 
            juanpanizzi@hotmail.com
            </a>
        </div> 

        <div className="w-1/3  flex flex-col items-center justify-center text-center">
        <i className=" hover:cursor-pointer hover:text-green-1   fa-brands fa-github text-white text-xl md:text-3xl "></i>
          <a href="https://github.com/JuanPanizzi" target="_blank" className="text-base md:text-xl text-green-1 hover:font-bold">Github</a>
        </div>
    </footer>
  )
}
