import me from '../resources/Juan.jpeg'

export const AboutMe = () => {
  return (
    <>
    <h1  className="text-white text-center mt-11 mb-4 font-medium"  >Un poco sobre mí</h1>
    <article id='aboutme' >
        <div className='w-4/5 bg-black-cards rounded-xl mx-auto shadow-lg shadow-black pb-5'>
            <div className='pt-2'>
                <img className='w-1/3 mx-auto rounded-xl' src={me} alt="juan" />
            </div>
            <div className='p-3 text-white text-center text-xs'>
                    <p>Soy Juan Panizzi, desarrollador Full Stack de Rawson Chubut, Argentina </p>
                    <p> 
                      Soy una persona con experiencia en diversos trabajos en los que se destacaban el trabajo en equipo y la diversidad de tareas. </p>
                      <p>
                      Me gusta estar en constante aprendizaje y pensar en soluciones a problemas cotidianos a través de la programacion.  
                        
                      </p>
                      <p>

                      Actualmente me encuentro desarrollando algunos proyectos freelance y haciendo cursos para seguir perfeccionandome.</p>
                    <a href='#contacto' className='inline-block mt-10 px-2 text-white text-xs py-[1px] border border-white rounded-full transition  hover:border-green-1 hover:text-green-1'>Contactame</a>
            </div>  
        </div>
    </article>


    
    </>
  )
}
