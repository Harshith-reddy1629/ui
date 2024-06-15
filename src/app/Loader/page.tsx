import React from 'react'

function Loader() {
  return (
    <main className=" flex  justify-around items-center p-6 h-[calc(100dvh_-_57px)]">
    {/* <Image
      src={PIC}
      alt="."
      className=" flex-[1_1_50%] h-96 rounded-full relative  object-contain w-fit before:content-[''] before:absolute before:w-full before:h-full before:top-6  before:bg-red-700 "
    /> */}

<svg width={25} height={25} className="-rotate-[96deg]  rounded-full"  >
<circle cy={12.5} cx={12.5} fill="transparent"  className="	origin-center  animate-slowspin" r={10} stroke="#3988fd" strokeWidth={3} strokeDasharray='.01,36%' strokeLinecap="round" />
<circle cy={12.5} cx={12.5} fill="transparent" className="	origin-center animate-speedspin"  r={10} stroke="#3988fd" strokeWidth={3}  strokeDasharray='11,1000' strokeLinecap="round" >

</circle>

</svg>
<svg width={25} height={25} className="-rotate-[96deg]"  >
<circle cy={12.5} cx={12.5} fill="transparent"  className="	origin-center  animate-slowspin" r={10} stroke="#3988fd" strokeWidth={4} strokeDasharray='.01,36%' strokeLinecap="round" />
<circle cy={12.5} cx={12.5} fill="transparent" className="	origin-center animate-speedspin"  r={10} stroke="#3988fd" strokeWidth={4}  strokeDasharray='11,1000' strokeLinecap="round" >

</circle>

</svg>

</main>  )
}

export default Loader