import {  ButtonLink } from '../Shared/buttonLink'
import juan from '../resources/yo.jpeg'


// mt-32 mb-32
export const Presentation = () => {
  return (
    <section className='h-screen flex items-center  text-white mx-auto w-4/5 text-center md:w-4/5 md:h-screen md:flex md:items-center md:mt-0 '>

<article className=' md:flex md:justify-between md:items-center  '>

      <div className=''>
        <div className='w-28  mx-auto rounded-full md:w-44'>
          <img className=' rounded-xl md:rounded-full' src={juan} alt="" />
        </div>
          {/* <p className='w-1/3 mt-2 mx-auto text-[0.5rem] bg-gray-1 text-green-1 border border-green-1 rounded-full p-1 font-bold'>Desarrollador Full Stack</p> */}
      </div>

      <div className='  md:text-left md:w-4/5 md:ml-7 '>

      <h1 className='text-3xl font-bold md:text-3xl lg:text-4xl '>Juan Panizzi</h1>
      <p className='mb-2 font-bold text-green-1 text-3xl md:text-3xl lg:text-4xl'>Desarrollador Full Stack </p>
      <p className='text-lg md:text-xs lg:text-lg mb-3'>  
      ¡Hola! Soy un programador con experiencia en el manejo de tecnologías relacionadas tanto al frontend como al backend. Me gusta participar en ambas áreas y poder colaborar en ellas en todo lo que pueda. </p>
    <div className='flex  justify-center md:justify-start'>
      <ButtonLink title='Github' url='https://github.com/JuanPanizzi' />
      <ButtonLink title='Linkedin' url='https://www.linkedin.com/in/juan-panizzi-768522105/' />
      <ButtonLink title='Descargar CV' url='https://drive.google.com/file/d/1Hc9fT4A8y8XLxc9_WxXe4c5bcbLyB58D/view'/>

    </div>
      </div>

</article>
    </section>
  )
}
