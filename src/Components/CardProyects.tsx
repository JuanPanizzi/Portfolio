import { CardProps } from '../interfaces/CardProps'

export const CardProyects = ({title, image, description, technologies, urlDeploy, urlGithub}: CardProps) => {
  return (
    <>
    <article className="p-2  group mb-5  md:w-[29%] md:mx-[0px] mx-auto text-center bg-black-cards shadow-lg shadow-black text-white rounded-xl md:flex md:flex-col  md:p-2 ">
  <img
    alt={title}
    src={image}
    className="w-full   mx-auto mt-1 rounded-xl shadow-xl transition "
  />
<div className='ml-2 mt-1 mb-5 '>
  <ul className='flex flex-wrap justify-center md:justify-start text-slate-300'>
    {
      technologies.map((tech, index)=> (
        <li key={index} className='mr-4 text-base md:text-base md:mr-3 '>{tech}</li>
      ))
    }
  </ul>
</div>

  <div className="md:ml-2 mb-auto pb-2 md:pb-4 ">
      <h3 className="text-lg font-medium md:text-2xl md:text-left text-green-1">{title}</h3>

    <p className=" text-base md:text-lg md:mt-2  md:text-left">
      {description}
    </p>
  </div>

    <div className=' md:pl-2 w-full flex justify-center md:flex-wrap md:justify-start mt-auto md:pb-2  py-2 '>
   
   {
    urlDeploy &&
    <a href={urlDeploy} className='text-green-1 py-[1px] flex items-center   rounded-full flex  
    text-sm  mr-1 transition   hover:bg-black-btn-hover  
    lg:text-lg bg-black-btn text-white p-3 py-[4px] md:p-2 md:px-4 hover:text-green-1'
    target='_blank'
    >
          Proyecto
          <i className="fa-solid fa-link ml-1"></i>
        </a>
        }

        <a href={urlGithub} className='flex items-center  text-green-1 py-[1px] rounded-full fle  text-sm   transition  hover:bg-black-btn-hover  lg:text-lg bg-black-btn text-white  p-3 py-[4px] md:p-2 md:px-4 hover:text-green-1  '
    target='_blank'
        >
          Repositorio
          <i className=" fa-brands fa-github ml-1"></i>
        </a>

    </div>

</article>
    </>
  )
}
