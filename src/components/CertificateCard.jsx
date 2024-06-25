import React from 'react'

const CertificateCard = (props) => {
  return (
    <a href={props.source} target="_blank"><section className="flex max-sm:flex-col p-[10px] m-[30px] gap-10 rounded-[15px] border-[#27272a]  hover:border-slate-300 border-[3px] bg-[#0a0a0a] w-fit pr-[20px] cursor-pointer">
        <div className="">
            <img src={props.src} className="rounded-[15px] object-cover object-center  "/>
        </div>
        <div>
            <h3 className="text-2xl max-sm:text-[20px] font-poppins text-[#bbbbbb] pt-4 hover:underline">{props.name}</h3>
            <p className="text-xl  pt-4 font-nunito text-[#71717a]">{props.from}</p>
        </div>
    </section></a>
  )
}

export default CertificateCard