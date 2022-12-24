import { Menu } from "@mui/icons-material"
import { Close } from "@mui/icons-material"
import { useState } from "react";


export default function Header2(){

    const [menu, setMenu] = useState(false);

     

    const links = [
        {name:'Home', link:'/'},
        {name:'Collection', link:'/collection'},
        {name:'About', link:'/about'},
        {name:'Contact', link:'/contact'}
    ]

    return(
        <div>
            {menu === true ? 
                <div className="pt-[1.9rem] pb-[1rem] flex flex-col h-screen">
                    <div className={`flex justify-between items-center flex-row`}>
                        <div>
                            
                        </div>
                        <div onClick={()=> setMenu(false)} className="flex mr-[1.2rem]">
                            <Close className={`cursor-pointer`} style={{ color: "white", fontSize:"2.4rem" }}/>
                        </div> 
                    </div> 
                    <div className="flex flex-col self-center mt-[20.4rem]">
                        {links.map((elems) =>{
                            return(
                                <li className={`font-Montserrat text-[1.8rem] font-normal text-white list-none mb-[3.2rem]
                                
                                ${window.location.pathname === elems.link ? 'underline decoration-2 underline-offset-8 font-bold cursor-pointer' : 'no-underline' }`} >
                                    <a href={`${elems.link}`}>
                                        {elems.name}
                                    </a>
                                </li>
                            )
                        })}
                    </div>

                    
                </div>
                :
                <div className="pt-[1.9rem] pb-[1rem]">
                    <div className={`flex justify-between items-center flex-row`}>
                        <div className="ml-[1.2rem]">
                            <p className="font-Crimson leading-[1.56rem] text-[1.4rem] text-white font-extralight
                                        border-solid border-[.1rem] p-[.8rem] border-white ">This Interior</p> 
                        </div>
                        <div className="flex mr-[1.2rem]">
                        <Menu onClick={()=> setMenu(true)} className={`cursor-pointer`} style={{ color: "white", fontSize:"2.4rem" }}/>
                        </div> 
                    </div> 
                </div>
            }
        </div>
        
    )
}