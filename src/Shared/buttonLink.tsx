import { ButtonProps } from '../interfaces/ButtonProps'

export const ButtonLink = ({title, url}: ButtonProps) => {

  return (


    
    
    <a href={url} className='lg:text-[1rem] lg:px-3 lg:py-[7px] py-[2px] px-2 text-white py-[5px] inline-block flex items-center border border-white rounded-full flex  text-sm   mr-1 transition  hover:border-green-1 hover:text-green-1 md:text-xs md:px-2 md:py-1 md:mt-2 '
    target='_blank'
        > 
    {/* <img src={image} alt={title} className='inline-block w-5 mr-1 p-[1px] hover:text-green-1'/> */}
    {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}

    {
      title == 'Github' && <i className="mr-1 fa-brands fa-github"></i>
    }
    {
     title == 'Linkedin' && <i className="mr-1 fa-brands fa-linkedin"></i> 
    }
    {
      title == 'Descargar CV' && 
      <i className="mr-1 fa-solid fa-download"></i>
    }
         {title}
        
    </a>

  )
}
