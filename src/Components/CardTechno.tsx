import { TechnoProps } from "../interfaces/TechnoProps"



export const CardTechno = ({title, image}: TechnoProps) => {


    return (

      <div className="mx-3 my-1 flex flex-col items-center md:mx-8 md:my-5">

    <div className=" p-1 w-12  flex flex-col items-center justify-center md:w-20  ">
      <div className="p-1 bg-gray-2 rounded-sm md:w-full md:p-4 md:rounded-lg ">
        <img src={image} alt={title} className="w-full rounded-lg"/>
      </div>
    </div>

        <div className="w-full mt-auto">
        <p className="text-[0.5rem] text-white text-medium md:text-base  text-center">{title}</p>

        </div>

      </div>
  )
}
