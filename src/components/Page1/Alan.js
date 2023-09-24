import { useState, useEffect } from "react";

function Alan() {
  const [index, setIndex] = useState(0);
  const titles = [
    "Full-Stack Web Developer",
    "Front-End Specialist",
    "Back-End Engineer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center pt-32" id="images">
        <h1
          className="flex justify-center text-white text-4xl max-xs:text-lg  uppercase tracking-wider leading-7 mt-12 mb-6 font-josefin"
          id="name"
        >
          Alan Malpartida
        </h1>
        <h2
          className="flex justify-center text-4xl max-xs:text-lg  uppercase tracking-wider m-4 mb-6 font-josefin text-lightyellow font-extrabold  animate-flip-up animate-infinite animate-duration-[2000ms] animate-delay-[2000ms] animate-ease-out animate-alternate-reverse"
          id="name"
        >
          {titles[index]}
        </h2>
        <div className="w-60 rounded-full flex justify-center items-center">
          <img
            className="bg-lightyellow rounded-full"
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
