import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import aboutme from "../../svg/aboutme.svg";

export function AboutMe({ open, toggleAbout }) {
  return (
    <>
      <Dialog className="" size={"lg"} open={open} handler={toggleAbout}>
        <DialogBody className="border-none flex-col" divider>
          <img
            className="float-left mr-5 mb-4 w-70"
            src={aboutme}
            alt="About Me"
          />
          <Typography className=" text-3xl font bold font-bold mb-12 mt-4 ">
            About Me
          </Typography>
          <Typography className="justify-center">
            Transitioning from a background in Procurement Management, including
            a pivotal role in the Air Force ICBM program, to the dynamic world
            of Full-Stack Web Development, I seamlessly blend strategic insight
            with my growing technical skills. My expanding portfolio stands as a
            testament to my determination, swift learning curve, and
            versatility. Drawing upon my rich logistics and defense experience,
            I am poised to craft tech solutions that not only resonate with user
            requirements but also dovetail with business objectives. I am eager
            to carve a distinctive niche in the tech arena. If you wish to
            contact me, please view my Resume for my contact information.
          </Typography>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default AboutMe;
