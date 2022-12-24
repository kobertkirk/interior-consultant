

export default function Card(){
    return(
        <div className="bg-[rgb(24, 23, 25)] w-[30rem] md:w-[41rem] h-[13.8rem] md:h-[18.9rem] ml-[4rem] md:ml-[29.5rem] mt-[-5.13rem] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <div className="flex items-center mt-[1.3rem] mb-[1.8rem] ml-[2.27rem]">
                <img className="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] rounded-full" src={require(`../images/photo2.png`)} alt="avatar"/>
                <div className="ml-[1.4rem]">
                    <p className="text-white font-Montserrat font-semibold text-[1.2rem] md:text-[1.4rem] leading-[1.5rem] md:leading-[1.7rem]">Aliza Webber</p>
                    <p className="text-[#828282] font-Montserrat text-[1rem] md:text-[1.2rem] font-semibold leading-[1.2rem] md:leading-[1.46rem]">Interior designer</p>
                </div>
            </div>
            <p className="text-white font-Lora  font-bold text-[1.8rem] md:text-[2.4rem] leading-[2.3rem] md:leading-[3rem] ml-[2.2rem]">Designed in 2020 by <br></br>
                     Aliza Webber</p>
        </div>
    )
}