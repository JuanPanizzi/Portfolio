import { infoTechno } from "../resources/infoTechno"
import { CardTechno } from "./CardTechno"



export const Habilidades = () => {


    return (
        <>
        <h1 className="text-white text-center mt-11 mb-4 font-medium" id="tecnologias">Tecnologías </h1>
            <article className="flex flex-wrap justify-around mb-16 w-4/5  mx-auto ">

    { infoTechno.map(({title, image}, index)=> (
        
        <CardTechno title={title} image={image} key={`${index}-${title}`} 
        
        />
        
    ))
    
}
</article>
        </>
  )
}
