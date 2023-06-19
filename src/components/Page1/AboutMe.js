import React from 'react'

function AboutMe() {
  return (
    <div className='flex justify-center items-center my-2 py-2 px-96'>
      <div className="flex flex-col text-center font-bold"> {/* replaced 'justify-center' with 'text-center' */}
      <p className='text-lightyellow text-2xl m-0 pb-5'>Full Stack Web Developer | Former Procurement Manager for Air Force ICBMs</p>
      {/* <p className='text-lightyellow text-xl m-0 pb-5'>With a background in managing procurement for ICBMs and NEXRAD Radars, I've transferred my strategic and meticulous approach to the realm of web development.</p>
      <p className='text-lightyellow text-xl m-0 pb-5'>From coding to teamwork, I love to engage with new challenges and create web solutions that are both robust and user-friendly. Let's connect if you're looking for a detail-oriented developer with a unique blend of experience.</p>" */}
      </div>
    </div>
  )
}

export default AboutMe
