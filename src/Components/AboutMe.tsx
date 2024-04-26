// import me from '../resources/Juan.jpeg'

export const AboutMe = () => {
  return (
    <>
    <h1  className="text-2xl text-white text-center mt-11 mb-4  font-medium md:text-4xl md:mt-40 md:mb-10 "  >Sobre Mí</h1>
    <article id='aboutme' className=' w-4/5 mx-auto text-sm md:text-lg text-center text-white' >
            {/* <div className='pt-2'>
                <img className='w-1/3 mx-auto rounded-xl' src={me} alt="juan" />
            </div> */}
            {/* <div className='p-3 text-white text-center text-xs'> */}
                    <p>Soy Juan Panizzi, desarrollador Full Stack de Rawson Chubut, Argentina </p>
                    <p> 
                      Soy una persona con experiencia en diversos trabajos en los que se destacaban el trabajo en equipo y la diversidad de tareas. </p>
                      <p>
                      Me gusta estar en constante aprendizaje y pensar en soluciones a problemas cotidianos a través de la programación.  
                        
                      </p>
                      <p>

                      Actualmente me encuentro trabajando como freelance desarrollando algunos proyectos y haciendo cursos para perfeccionarme.</p>
                      <p>Si te interesa podemos coordinar una entrevista para conocernos y hablar mejor.</p>
                      <p>¡Desde ya muchas gracias por tu atención!</p>
                    <a href='#contacto' className='inline-block mt-5 px-3 text-white text-xs py-[3px] border border-white rounded-full transition  hover:border-green-1 hover:text-green-1 md:text-base'>Contactame</a>
    </article>


    
    </>
  )
}
