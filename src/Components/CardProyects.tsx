import { CardProps } from '../interfaces/CardProps'

export const CardProyects = ({title, image, description, technologies, urlDeploy, urlGithub}: CardProps) => {
  return (
    <>
    <article className=" group mb-5  md:w-[29%] md:mx-[0px] mx-auto text-center bg-black-cards shadow-lg shadow-black text-white rounded-xl md:flex md:flex-col  md:p-2 ">
  <img
    alt={title}
    src={image}
    className="w-full   mx-auto mt-1 rounded-xl shadow-xl transition "
  />
<div className='ml-2'>
  <ul className='flex flex-wrap   mt-1 md:my-2 md:mb-3  text-slate-300'>
    {
      technologies.map((tech, index)=> (
        <li key={index} className='mr-1 text-[5px] md:text-sm '>{tech}</li>
      ))
    }
  </ul>
</div>

  <div className="md:ml-2">
      <h3 className="text-sm font-medium md:text-xl md:text-left text-green-1">{title}</h3>

    <p className=" text-xs md:text-sm md:mt-2 md:mb-5 md:text-left">
      {description}
    </p>
  </div>

    <div className='w-full flex justify-center items-center md:justify-start md:mt-auto md:ml-2  md:pt-0 md:pb-2  py-2 '>
   
   {
    urlDeploy &&
    <a href={urlDeploy} className='  text-green-1 py-[1px] flex items-center   rounded-full flex  text-[0.5rem]  mr-1 transition   hover:bg-black-btn-hover  
    md:text-sm bg-black-btn text-white p-3 py-[4px] md:p-2 md:px-4 hover:text-green-1'
    target='_blank'
    >
          Ver Proyecto
          <i className="fa-solid fa-link ml-1"></i>
        </a>
        }

        <a href={urlGithub} className='flex items-center  text-green-1 py-[1px] rounded-full fle  text-[0.5rem]  mr-1 transition  hover:bg-black-btn-hover  md:text-sm bg-black-btn text-white  p-3 py-[4px] md:p-2 md:px-4 hover:text-green-1  '
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
