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
<div className=''>
  <ul className='flex flex-wrap   mt-1 md:my-2 md:mb-3  text-slate-300'>
    {
      technologies.map((tech, index)=> (
        <li key={index} className='mr-1 text-[5px] md:text-sm '>{tech}</li>
      ))
    }
  </ul>
</div>

  <div className="p-1 ">
      <h3 className="text-sm font-medium md:text-xl md:text-left text-green-1">{title}</h3>

    <p className=" text-xs md:text-base md:mt-2 md:mb-5 md:text-left">
      {description}
    </p>
  </div>
    <div className='w-full flex justify-center md:justify-evenly  md:mt-auto  '>
   
   {
    urlDeploy &&
    <a href={urlDeploy} className='px-2  text-green-1 py-[1px] inline-block flex items-center   rounded-full flex  text-[0.5rem]  mr-1 transition   hover:border-green-1 hover:text-green-1 
    md:text-sm md:px-3 bg-black-btn md:p-2 '
    target='_blank'
    >
          Ver Proyecto
        </a>
        }

        <a href={urlGithub} className='px-2 text-green-1 py-[1px] inline-block flex items-center   rounded-full flex  text-[0.5rem]  mr-1 transition  hover:border-green-1 hover:text-green-1 md:text-sm md:px-3 bg-black-btn md:p-2 '
    target='_blank'
        >
          Repositorio
        </a>

    </div>

</article>
    </>
  )
}
