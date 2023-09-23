import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";
import Alan from "../Page1/Alan";
import SvgContainer from "../Page1/SvgContainer";

function Main() {
  return (
    <div>
      <ParticlesBackground />
      <div className=" flex flex-col items-center ">
        <div className="absolute z-10">
          <Alan />
          <SvgContainer />
        </div>
      </div>
    </div>
  );
}

export default Main;
