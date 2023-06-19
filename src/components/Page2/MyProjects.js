import React from 'react';

function MyProjects() {
  const images = [

    "https://res.cloudinary.com/dzjr3skhe/image/upload/v1687049071/portfolio/Screen_Shot_2023-06-17_at_8.43.39_PM_fgwgod.png",
    "https://res.cloudinary.com/dzjr3skhe/image/upload/v1687048654/portfolio/Screen_Shot_2023-06-17_at_8.34.41_PM_r3hjdt.png",

    "https://res.cloudinary.com/dzjr3skhe/image/upload/v1687049417/portfolio/Screen_Shot_2023-06-17_at_8.49.57_PM_ljy1ap.png"
  ];

  return (
    <div className='flex flex-col items-center'>
      <h1 className='pt-10 text-lightyellow text-3xl font-bold uppercase'>Web Applications</h1>
      <hr className='border-white w-72 m-10' />
      <div className='flex'>
        {images.map((img, index) => (
          <img key={index} className='w-52 h-52 mx-10 rounded-full' src={img} alt={`Project ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default MyProjects;

