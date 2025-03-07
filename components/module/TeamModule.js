import Image from "next/image";

const TeamModule = ({image , name})=>{

    return(

        <>

            <div className="lg:w-[175px] pr-2 pl-2 relative group">
                <Image src={image} alt="" width={184} height={366} className="hover:opacity-30"/>
                <p className="absolute top-1/2 right-5 transform -translate-y-1/2 font-bold opacity-0 group-hover:opacity-90 hover:text-red-500 text-xl text-red-700">{name}</p>
            </div>

        </>

    )

}


export default TeamModule;