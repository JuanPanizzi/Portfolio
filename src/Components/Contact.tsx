
export const Contact = () => {
  return (




      <>
{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}
<h1 className='text-3xl text-white text-center mt-28 mb-14 font-medium md:mt-40 md:mb-16 md:text-4xl' id='contacto'>¡Contactame!</h1>
<section className=''>

    <div className=" w-4/5 mx-auto max-w-screen-xl  py-1 sm:px-6 lg:px-8">

      <div className="bg-black-cards shadow-lg shadow-black text-white rounded-xl p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form 
        action="https://formspree.io/f/mnqellkn"
  method="POST" className="space-y-4 md:w-2/3  md:mx-auto">
          <div >
            <label className="sr-only" htmlFor="name">Nombre</label>
            <input
              className="w-full rounded-lg bg-black-cards   border border-white focus:border-0 focus:bg-black-btn focus:ring-2 focus:ring-green-1 text-base outline-none text-white py-2 px-3  "
              placeholder="Nombre"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 ">
            <div className=" md:w-full">
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg bg-black-cards   border border-white focus:border-0 focus:bg-black-btn focus:ring-2 focus:ring-green-1 text-base outline-none text-white py-2 px-3"
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

        
          </div>


          <div>
            <label className="sr-only" htmlFor="message">Mensaje</label>

            <textarea
              className="w-full rounded-lg bg-black-cards  rounded border border-white focus:border-0 focus:bg-black-btn focus:ring-2 focus:ring-green-1 text-base outline-none text-white py-2 px-3"
              placeholder="Mensaje"
              rows={8}
              id="message"
              name="message"
              required
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-xl bg-black-btn border hover:border-1 hover:text-green-1 hover:border-green-1  px-5 py-3 text-white sm:w-auto"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
  </div>
</section>
</>
  )
}
