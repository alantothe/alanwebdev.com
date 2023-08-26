import React from "react";

function Alan() {
  return (
    <div>
      <div className="flex flex-col items-center pt-32" id="images">
        <h1
          className="flex justify-center text-white text-6xl font-sans uppercase tracking-wider leading-7 mt-12 mb-6 font-josefin "
          id="name"
        >
          Alan Malpartida
        </h1>
        <h2
          className="flex justify-center text-2xl font-sans uppercase tracking-wider m-4 mb-6 font-josefin text-lightyellow font-extrabold"
          id="name"
        >
          Full-Stack Web Developer
        </h2>
        <div className="w-60  rounded-full flex justify-center items-center">
          <img
            className="bg-lightyellow rounded-full "
            src="https://res.cloudinary.com/dzjr3skhe/image/upload/v1687213143/alan_photos/alan-photo-pixelicious_iknzvi.png"
            alt="Alan's photo"
          />
        </div>
        <img
          className="w-60"
          src="https://res.cloudinary.com/dzjr3skhe/image/upload/v1686682050/alan-logo_hljnjg.png"
          alt="Alan's logo"
        />
      </div>
    </div>
  );
}

export default Alan;
