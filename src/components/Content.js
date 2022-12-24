import Card from "../components/Card"

export default function Content() {
    return(
        <div className="flex flex-col md:items-center ml-[1.2rem] mr-[1.2rem] md:ml-0 md:mr-0 md:flex-row">
            <div className="flex flex-col justify-start ">
                <h2 className="text-white font-Lora font-medium text-[3.6rem] md:text-[4.8rem] leading-[4.6rem] md:leading-[6.1rem] mt-[3.6rem]">Modern interior</h2>
                <p className="text-white font-Montserrat text-[1.4rem] md:text-[2.4rem] leading-[1.7rem] md:leading-[2.9] mt-[2.5rem]">A full-Service residential & <br></br>
                                        commercial interior design and <br></br>
                                        staging company offering <br></br>
                                        professional organizing & <br></br>
                                        eco-services.</p>
                <div className="text-white font-Montserrat font-bold text-[1.4rem] md:text-[1.8rem] leading-[1.7rem] md:leading-[2.1rem] mt-[2.5rem] cursor-pointer">Read more    &#8594;</div>  
            </div>
            <div className="mt-[3.7rem] md:mt-[17.7rem] md:ml-[13.9rem]">
                <img className="w-[35.1rem] h-[26.4rem] md:w-[73.7rem] md:h-[55.5rem] relative" src={require(`../images/photo1.png`)} alt=""/>
                <div>
                    <Card/>
                </div>
            </div>
            
        </div>
    )
    
}