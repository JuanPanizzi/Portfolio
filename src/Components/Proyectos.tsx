import { infoCards } from '../resources/info/infoCards'
import { CardProyects } from './CardProyects'

export const Proyectos = () => {
  return (
<>
<h1 className='text-xl text-white font-bold text-center mt-14 mb-5' id='proyectos'>Proyectos</h1>
<section className='w-full  grid grid-cols-1 px-20 pt-1  '>
        
    {
      infoCards.map(({title, image, description, technologies, urlDeploy, urlGithub}, index)=>( 
       
        <CardProyects key={index} title={title} image={image} description={description} 
        technologies={technologies} urlDeploy={urlDeploy} urlGithub={urlGithub}/>
      ))
    }

    </section>
</>
  )
}
