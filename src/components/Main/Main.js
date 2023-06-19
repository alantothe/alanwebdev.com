import React,{useRef} from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';
import Alan from '../Page1/Alan';
import SvgContainer from '../Page1/SvgContainer';
import MyProjects from '../Page2/MyProjects';
import ResumeJSX from '../Resume/ResumeJSX';



function Main() {
    const parallaxRef = useRef({ scrollTo: () => {} });

    return (
        <Parallax pages={3} ref={parallaxRef}>
        <ParticlesBackground />
            <ParallaxLayer offset={0}>
                <div className="relative flex flex-col items-center ">
                    <div className="absolute z-10">
                        <Alan />
                        <SvgContainer parallaxRef={parallaxRef}/>
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1}>
                <MyProjects/>
            </ParallaxLayer>
            <ParallaxLayer offset={2}>


            </ParallaxLayer>
        </Parallax>
    );
}

export default Main;
