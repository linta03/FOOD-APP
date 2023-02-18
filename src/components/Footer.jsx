import React from 'react'

const Footer = () => {
  return (
    <div className='h-60 bg-purple-300 flex'>
      {/* Logo section */}
      <div >
        <h1 className='px-10 pt-20 font-extrabold font-mono text-2xl'>Food Villah💜</h1>
      </div>
      {/* Navigation list section */}
      <div>
      <div className="flex justify-end w-auto text-md">
      <ul className="flex m-4 mx-36 font-semibold flex-col px-28 pt-12">
        <li className="mx-6 p-1"> ◾Home</li>
        <li className="mx-6 p-1">◾About</li>
        <li className="mx-6 p-1"> ◾Contact</li>
        <li className="mx-6 p-1">◾Cart</li>
        <li className="mx-6 p-1"> ◾Mart</li>
      </ul>
    </div>
      </div>
    {/* Catch phrase section */}
      <div>
      <h1 className='px-20 pt-24 font-extrabold font-mono text-2xl'>HAPPY FOOD😍</h1>
      </div>
    </div>
  )
}

export default Footer