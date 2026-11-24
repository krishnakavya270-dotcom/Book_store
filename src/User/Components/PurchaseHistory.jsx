import React from 'react'

function PurchaseHistory() {
  return (
    <div className='p-30 my-15 shadow rounded'>
         {/* duplicate book status */}
         <div className='bg-gray-100 rounded p-5 mt-4'>
             <div className='md:grid grid-cols-[3fr_1fr]'>
             {/* 1 section */}
                 <div className='px-4'>
                    <h1 className='text-2xl'>Title</h1>
                    <h1 className='text-xl'>Author</h1>
                    <h1 className='text-lg text-blue-600'> $ price</h1>
                    <p className='font-bold '>Abstract : </p>
                    <div className='flex mt-10'>
                      <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/thumbnails/023/630/157/small/web-button-icon-purchase-button-png.png" alt="purchased" />
                     
                        </div>
                    </div>
                    {/* 2 section */}
                    <div className='px-5 mt-5 md:mt-0'>
                       <img src="https://tse2.mm.bing.net/th/id/OIP.JYkV2S6z_qLRzO44DW7q7AHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="no image" />
                       
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PurchaseHistory
