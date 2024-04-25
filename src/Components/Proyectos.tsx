import { infoCards } from '../resources/info/infoCards'
import { CardProyects } from './CardProyects'

export const Proyectos = () => {
  return (
<>
<h1 className='text-2xl md:text-4xl text-white font-bold text-center mb-10 md:mb-20 ' id='proyectos'>Proyectos</h1>
<section className='w-4/5 mx-auto md:w-4/5 py-2  md:flex md:flex-wrap md:justify-between  '>
        
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
