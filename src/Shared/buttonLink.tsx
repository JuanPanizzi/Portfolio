import { ButtonProps } from '../interfaces/ButtonProps'

export const ButtonLink = ({title, url}: ButtonProps) => {

  return (


    
    
    <a href={url} className='px-1 text-white py-[1px] inline-block flex items-center border border-white rounded-full flex  text-[0.5rem]  mr-1 transition  hover:border-green-1 hover:text-green-1'
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
