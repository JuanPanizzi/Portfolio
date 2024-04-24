import {  ButtonLink } from '../Shared/buttonLink'
import juan from '../resources/yo.jpeg'



export const Presentation = () => {
  return (
    <section className='mt-20 text-white mx-auto w-4/5 text-center md:w-3/5  '>

<article className='md:flex md:justify-between md:items-center '>

      <div className=''>
        <div className='w-20 sm:w-24 mx-auto rounded-full md:w-36'>
          <img className=' rounded-xl md:rounded-full' src={juan} alt="" />
        </div>
          {/* <p className='w-1/3 mt-2 mx-auto text-[0.5rem] bg-gray-1 text-green-1 border border-green-1 rounded-full p-1 font-bold'>Desarrollador Full Stack</p> */}
      </div>

      <div className='md:text-left md:w-4/5 '>

      <h1 className='text-xl font-bold md:text-3xl'>Juan Panizzi</h1>
      <p className='text-xs md:text-sm'><span className='font-bold text-green-1 text-xl md:text-3xl'>Desarrollador Full Stack </span> <br />  
      ¡Hola! Soy un programador con experiencia en el manejo de tecnologías relacionadas tanto al frontend como al backend. Me gusta participar en ambas áreas y poder colaborar en ellas en todo lo que pueda. </p>
    <div className='flex mt-3 justify-center'>
      <ButtonLink title='Github' url='https://github.com/JuanPanizzi' />
      <ButtonLink title='Linkedin' url='https://www.linkedin.com/in/juan-panizzi-768522105/' />
      <ButtonLink title='Descargar CV' url='https://drive.google.com/file/d/1Hc9fT4A8y8XLxc9_WxXe4c5bcbLyB58D/view'/>

    </div>
      </div>

</article>
    </section>
  )
}
