import React from 'react'

function UploadBooks() {
  return (
    <div className='bg-gray-200 p-10 my-20 mx-50'>
      <h1 className='text-center text-3xl font-medium'>Upload Book Details</h1>
      {/* grid */}
      <div className='md:grid grid-cols-2 mt-10 w-full'>
        {/* 1 section */}
        <div className='px-5'>
        <div className='mb-3'>
            <input type="text" placeholder='Book Title' className='w-full p-2 bg-white rounded'/>
        </div>
        <div className='mb-3'>
            <input type="text" placeholder='Author' className='w-full p-2 bg-white rounded'/>
        </div>
        <div className='mb-3'>
            <input type="text" placeholder='Book cover image URL' className='w-full p-2 bg-white rounded'/>
        </div>
        <div className='mb-3'>
            <input type="text" placeholder='Total Pages' className='w-full p-2 bg-white rounded'/>
        </div>
        <div className='mb-3'>
            <input type="text" placeholder='Original price' className='w-full p-2 bg-white rounded'/>
        </div>
        <div className='mb-3'>
            <input type="text" placeholder='Discount Price' className='w-full p-2 bg-white rounded'/>
        </div>
        <div className='mb-3'>
            <textarea type="text" rows={5} placeholder='Abstract' className='w-full p-2 bg-white rounded'/>
        </div>
        </div>
        {/* 2 section */}
        <div className='px-5'>
           <div className='mb-3'>
              <input type="text" placeholder='Publisher' className='w-full p-2 bg-white rounded'/>
          </div>
           <div className='mb-3'>
              <input type="text" placeholder='ISBN' className='w-full p-2 bg-white rounded'/>
          </div>
           <div className='mb-3'>
              <input type="text" placeholder='Language' className='w-full p-2 bg-white rounded'/>
          </div>
           <div className='mb-3'>
              <input type="text" placeholder='Category' className='w-full p-2 bg-white rounded'/>
          </div>
          <div className='my-10 flex justify-center items-center'>
          <label htmlFor='bookImages'> 
             <input type="file" id='bookImages' hidden/>
             <img width={'250px'} height={'250px'} style={{borderRadius:'50%'}} src="https://imgv3.fotor.com/images/homepage-feature-card/Upload-an-image.jpg" alt="upload" />
             </label>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default UploadBooks
