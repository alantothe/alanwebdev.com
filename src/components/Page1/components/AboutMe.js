import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import aboutme from "../svg/aboutme.svg";

export function AboutMe({ open, toggleAbout }) {
  return (
    <>
      <Dialog className="" size={"lg"} open={open} handler={toggleAbout}>
        <DialogBody className="border-none flex-col" divider>
          <img
            className="float-left mr-5 mb-4 w-62 pt-20"
            src={aboutme}
            alt="About Me"
          />
          <Typography className=" text-3xl font bold font-bold mb-12 mt-4 ">
            About Me
          </Typography>
          <Typography className="justify-center text-black pb-20">
            Full Stack Software Developer with over a year of hands-on coding
            experience, combined with a background in supply chain management
            and procurement in the United States Air Force. I transitioned from
            logistical operations to software development with great enthusiasm.
            I am adept at developing and implementing comprehensive software
            solutions that drive efficiency, and deliver tangible, impactful
            results. My Air Force experience imbued me with discipline,
            teamwork, and the vital ability to operate under pressure, qualities
            that I now channel into every software project I passionately
            undertake.
          </Typography>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default AboutMe;
