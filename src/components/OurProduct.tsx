import React from 'react'
import Image from 'next/image'


function OurProduct() {
  return (
    <>
    <div className='flex justify-between items-center pt-20 '>
        <div>

        
        <Image src="/fp-1.png" alt='' width={334} height={334}/>
        <p className="">Detailed description of Feature 1.</p>
          <span className=" text-lg font-semibold ">$100</span>
          </div>
          <div>
          <Image src="/fp-2.png" alt='' width={334} height={334}/>
        <p className="">Detailed description of Feature 1.</p>
          <span className=" text-lg font-semibold ">$100</span>
          </div><div>
          <Image src="/fp-3.png" alt='' width={334} height={334}/>
        <p className="">Detailed description of Feature 1.</p>
          <span className=" text-lg font-semibold ">$100</span></div><div>
          <Image src="/fp-4.png" alt='' width={334} height={334}/>
        <p className="">Detailed description of Feature 1.</p>
          <span className=" text-lg font-semibold ">$100</span></div>
    </div>

<div className='flex justify-between items-center pt-20 '>
<div>


<Image src="/fp-1.png" alt='' width={334} height={334}/>
<p className="">Detailed description of Feature 1.</p>
  <span className=" text-lg font-semibold ">$100</span>
  </div>
  <div>
  <Image src="/fp-2.png" alt='' width={334} height={334}/>
<p className="">Detailed description of Feature 1.</p>
  <span className=" text-lg font-semibold ">$100</span>
  </div><div>
  <Image src="/fp-3.png" alt='' width={334} height={334}/>
<p className="">Detailed description of Feature 1.</p>
  <span className=" text-lg font-semibold ">$100</span></div><div>
  <Image src="/fp-4.png" alt='' width={334} height={334}/>
<p className="">Detailed description of Feature 1.</p>
  <span className=" text-lg font-semibold ">$100</span></div>
</div>
</>
  )
}

export default OurProduct