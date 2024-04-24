import { TechnoProps } from "../interfaces/TechnoProps"



export const CardTechno = ({title, image}: TechnoProps) => {


    return (
    <div className=" p-1 w-9 mx-2 flex flex-col items-center justify-center">
      <div className="p-1 bg-gray-2 rounded-sm">
        <img src={image} alt={title} className="w-full"/>
      </div>
        <p className="text-[0.5rem] text-white text-medium ">{title}</p>
    </div>
  )
}
