import { CardProps } from '../interfaces/CardProps'

export const CardProyects = ({title, image, description, technologies, urlDeploy, urlGithub}: CardProps) => {
  return (
    <>
    <article className="group mb-5 p-1  text-center bg-black-cards shadow-lg shadow-black text-white rounded-xl">
  <img
    alt={title}
    src={image}
    className="w-full px-1  mx-auto mt-1 rounded-xl shadow-xl transition "
  />
<div className=''>
  <ul className='flex flex-wrap mx-2 mt-1'>
    {
      technologies.map((tech, index)=> (
        <li key={index} className='mr-1 text-[5px]  px-1'>{tech}</li>
      ))
    }
  </ul>
</div>

  <div className="p-1 ">
      <h3 className="text-sm font-medium ">{title}</h3>

    <p className=" text-xs ">
      {description}
    </p>
  </div>
    <div className='w-full flex justify-center mt-1'>
   
   {
    urlDeploy &&
    <a href={urlDeploy} className='px-2 text-white py-[1px] inline-block flex items-center border border-white rounded-full flex  text-[0.5rem]  mr-1 transition  hover:border-green-1 hover:text-green-1'
    target='_blank'
    >
          Ver Proyecto
        </a>
        }

        <a href={urlGithub} className='px-2 text-white py-[1px] inline-block flex items-center border border-white rounded-full flex  text-[0.5rem]  mr-1 transition  hover:border-green-1 hover:text-green-1'
    target='_blank'
        >
          Repositorio
        </a>

    </div>

</article>
    </>
  )
}
