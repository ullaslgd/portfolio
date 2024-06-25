import React from 'react'
import { certificates } from '../constants';
import  CertificateCard  from "../components/CertificateCard"

const Certificate = () => {
  return (
    <section className="flex justify-center h-fit py-[40px] flex-col pb-[200px] ]">
        <div className="flex justify-center py-[60px] ">
            <h2 className="text-3xl font-play text-[#bbbbbb]">CERTIFICATES</h2>
            
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1">
            {certificates.map((certi)=>(
                <div>
                    <CertificateCard src={certi.src} name={certi.name} from={certi.from} source={certi.source} />
                </div>
            ))}
        </div>



    </section>
  )
}

export default Certificate