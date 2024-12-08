import React from 'react'
import Image from 'next/image'

function Explore() {
  return (
<div>
    <section>
        <div className='flex items-center'>

        
        <div>
<Image src="/item-category1.png " alt='' width={638} height={648}/>
        </div>
        <div className='flex flex-col items-center'>
        <div className='flex'>
            <div>
<Image className='p-1' src="/card.png " alt='' width={312} height={312}/>

            </div>
            <div>
<Image className='p-1' src="/card-1.png" alt='' width={312} height={312 }/>

            </div>
</div>
<div className='flex items-center'>


<div>
<Image className='p-1' src="/card-2.png" alt='' width={312} height={312 }/>

</div>
<div>
<Image className='p-1' src="/card-1.png" alt='' width={312} height={312 }/>

</div>
</div>
</div>

        </div>
    </section>
</div>  )
}

export default Explore