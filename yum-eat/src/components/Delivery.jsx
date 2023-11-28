import React from 'react'

export default function Delivery() {
  return (
    <div className='w-[1300px] bg-white py-16 px-4 '>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>
            Quick Delivery App
        </h3>
        <div className='w-full mx-auto grid md:grid-cols-2'>
            <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt="" className='w-[550px] mx-auto my-4 '/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus aliquam voluptate repudiandae
                     eligendi quia quis quos fugiat corrupti reprehenderit excepturi, modi alias exercitationem magnam 
                    aspernatur et labore odio cum. Soluta?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis aut veritatis at doloremque molestiae voluptatem, natus id? Temporibus provident, debitis doloribus odio similique eligendi! Architecto recusandae et consectetur atque eligendi?
                    Cumque rerum vel non, laudantium accusamus porro dolorem nemo perferendis? Delectus, ipsam autem placeat impedit dolor, earum animi fugiat voluptatum ipsa eum ipsum laboriosam molestiae facilis, mollitia distinctio quo deleniti!
                </p>
                <button className='bg-black text-[#00df9a] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 w-[200px]'>Get Started</button>
            </div>

        </div>
    </div>
  )
}
