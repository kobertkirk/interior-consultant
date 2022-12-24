export default function Header(){

    const links = [
        {name:'Home', link:'/'},
        {name:'Collection', link:'/collection'},
        {name:'About', link:'/about'},
        {name:'Contact', link:'/contact'}
    ]

    return(
        <div>
            <div className={`flex justify-between items-center flex-col
                            md:flex-row md:pt-[5rem] md:pl-[8.5rem] md:pb-[2rem]`}>
            <div >
                <p className="font-Crimson leading-[1.56rem] text-[1.4rem] text-white font-extralight border-solid border-[.1rem] p-[.8rem] border-white ">This Interior</p> 
            </div>
            <div className="flex justify-between flex-col
                            md:flex-row">
            {links.map((elems) =>{
                return(
                    <li className={`font-Montserrat text-[1.8rem] font-normal text-white list-none 
                    md:pr-[7.6rem] md:pl-[5.6rem]
                    
                    ${window.location.pathname === elems.link ? 'underline decoration-2 underline-offset-8 font-bold cursor-pointer' : 'no-underline' }`} >
                        <a href={`${elems.link}`}>
                            {elems.name}
                        </a>
                    </li>
                )
            })}
            </div> 
            </div>
            
        </div>
    )
}