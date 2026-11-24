import React from 'react'

function UploadStatus() {
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
                      <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/022/411/806/original/pending-rubber-stamp-red-pending-rubber-grunge-stamp-seal-illustration-vector.jpg" alt="pending" />
                      <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/thumbnails/011/415/136/small_2x/sold-home-gunge-illustrations-vector.jpg" alt="sold" />
                      <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/027/570/210/large_2x/approved-rubber-stamp-approved-icon-seal-of-approval-tested-and-verified-badge-with-check-mark-accepted-sign-authorized-badge-design-with-grunge-texture-illustration-vector.jpg" alt="approved" />
                        </div>
                    </div>
                    {/* 2 section */}
                    <div className='px-5 mt-5 md:mt-0'>
                       <img src="https://tse2.mm.bing.net/th/id/OIP.JYkV2S6z_qLRzO44DW7q7AHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="no image" />
                       <div>
                        <button className='bg-red-900 text-white font-bold px-3 py-2 rounded mt-3'>DELETE</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadStatus
