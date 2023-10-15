import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function ProjectsDialog({ open, toggleDialog }) {
  return (
    <>
      <Dialog
        divider={false}
        open={open}
        size={"xl"}
        handler={toggleDialog}
        className=""
      >
        {/* <DialogHeader className="h-20 bg-zinc-700">
          Its a simple dialog.
        </DialogHeader> */}
        <DialogBody>
          <div
            className="flex flex-col justify-evenly gap-4 m-4 text-black"
            style={{
              fontFamily: "'Sudbury Book', sans-serif",
            }}
          >
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-8 items-center sm:items-center md:items-start lg:items-start">
              <div className="flex flex-col w-3/4 sm:w-3/4 md:w-1/4 lg:w-1/4 gap-4">
                <a
                  href="https://chat.alanwebdev.com/"
                  target="_blank"
                  className="outline-none"
                >
                  <h1 className="text-center text-2xl sm:text-2xl md:text-xl lg:text-xl hover:opacity-50 w-full">
                    Chat App
                  </h1>
                  <img
                    src="https://res.cloudinary.com/dzjr3skhe/image/upload/v1695398677/Screen_Shot_2023-09-22_at_12.04.24_PM_zqyblg.png"
                    alt="Wine About It"
                    className="cursor-pointer hover:opacity-50 object-contain w-full"
                  ></img>
                </a>
              </div>

              <div className="flex flex-col w-3/4 mr-4">
                <div
                  className="flex justify-between text-sm mobile:text-xs"
                  style={{ color: "rgb(102, 101, 171)" }}
                >
                  <a
                    href="https://chat.alanwebdev.com/"
                    target="_blank"
                    className="text-center cursor-pointer hover:opacity-50"
                  >
                    Deployed App
                  </a>
                  <a
                    href="https://github.com/alantothe/chat_app_client_next"
                    target="_blank"
                    className="text-center cursor-pointer hover:opacity-50"
                  >
                    GitHub Client Repository
                  </a>
                  <a
                    href="https://github.com/alantothe/chat_app_server"
                    target="_blank"
                    className="text-center cursor-pointer hover:opacity-50"
                  >
                    GitHub Server Repository
                  </a>
                </div>
                <p className="flex grow items-center text-sm mt-2">
                  After completing the 12-week Software Engineering Immersive at
                  General Assembly, I embarked on an ambitious solo project
                  Leveraging the skills and experience I gained during the
                  immersive program, I aimed to create a chat platform with
                  modern technologies and seamless real-time capabilities.The
                  App is built on a MERN (MongoDB, Express, React, Node) stack,
                  enhanced with the addition of Next.js. One of the core
                  features of my chat platform is its real-time communication
                  abilities, powered by socket.io. This allows users to engage
                  in direct messages and participate in group chats with zero
                  latency. In addition, I've designed a friend request system, a
                  notification system, and integrated avatars for personal
                  touch. I integrated technologies such as Dropzone for
                  user-friendly image uploads and Cloudinary API for efficient
                  image link storage. As of now, while I have a fully functional
                  prototype, the development journey is ongoing. Future
                  enhancements include customizable profiles, online status
                  indicator and an ability to send images in a message.
                </p>
              </div>
            </div>

            <hr
              style={{ backgroundColor: "rgb(102, 101, 171)", height: "2px" }}
            ></hr>
            <div className="flex gap-8">
              <div className="flex flex-col w-3/4 sm:w-3/4 md:w-1/4 lg:w-1/4 gap-4">
                <a
                  href="https://vino.alanwebdev.com"
                  target="_blank"
                  className="outline-none"
                >
                  <h1 className="text-center text-2xl sm:text-2xl md:text-xl lg:text-xl hover:opacity-50 w-full">
                    Le Vino
                  </h1>
                  <img
                    src="https://res.cloudinary.com/doqgufzuq/image/upload/v1694204829/Portfolio/Projects/Wine%20About%20It.png"
                    alt="Le Vino"
                    className="cursor-pointer hover:opacity-50 object-contain"
                  ></img>
                </a>
              </div>

              <div className="flex flex-col w-3/4 mr-4">
                <div
                  className="flex justify-between text-sm mobile:text-xs"
                  style={{ color: "rgb(102, 101, 171)" }}
                >
                  <a
                    href="https://vino.alanwebdev.com"
                    target="_blank"
                    className="text-center cursor-pointer hover:opacity-50"
                  >
                    Deployed App
                  </a>
                  <a
                    href="https://github.com/alantothe/wine-about-it-personal-client"
                    target="_blank"
                    className="text-center cursor-pointer hover:opacity-50"
                  >
                    GitHub Client Repository
                  </a>
                  <a
                    href="https://github.com/alantothe/wine-about-it-personal-server"
                    target="_blank"
                    className="text-center cursor-pointer hover:opacity-50"
                  >
                    GitHub Server Repository
                  </a>
                </div>
                <p className="flex grow items-center text-sm mt-2">
                  Around week 9 of 12 at General Assembly, my team and I
                  launched "Wine About It". Teaming up with three other
                  developers, I initially took charge of the backend
                  architecture, crafting a solid and efficient foundation. Upon
                  completion of the backend, my focus transitioned to assets the
                  team on the front end. It was here that I trained and led the
                  team in integrating advanced technologies such as Redux and
                  Tailwind CSS, ensuring a modern and responsive user interface.
                  Our MERN (MongoDB, Express, React, Node) stack-based ecommerce
                  application stands out with its image carousels on the landing
                  page. Users can effortlessly sign up, peruse wines
                  alphabetically, by type or by price range, mark wines as
                  favorites, fill their carts, and proceed to purchase. An added
                  convenience is the ability for users to revisit and review
                  their order details post-purchase.
                  {/* Beyond
                  the core features, we've expanded the application with
                  enhancements such as a responsive search bar, handpicked food
                  and wine pairings, and full-fledged account management tools. */}
                </p>
              </div>
            </div>

            <hr
              style={{ backgroundColor: "rgb(102, 101, 171)", height: "2px" }}
            ></hr>

            <div className="flex gap-8">
              <div className="flex flex-col w-3/4 sm:w-3/4 md:w-1/4 lg:w-1/4 gap-4">
                <a
                  href="https://youandmeme.netlify.app/"
                  target="_blank"
                  className="outline-none"
                >
                  <h1 className="text-center text-2xl sm:text-2xl md:text-xl lg:text-xl hover:opacity-50 w-full">
                    You & Meme
                  </h1>
                  <img
                    src="https://res.cloudinary.com/dzjr3skhe/image/upload/v1695365491/Screen_Shot_2023-09-22_at_1.53.30_AM_p4skcd.png"
                    alt="You and Meme"
                    className="cursor-pointer hover:opacity-50 object-contain"
                  ></img>
                </a>
              </div>

              <div className="flex flex-col w-3/4 mr-4">
                <div
                  className="flex justify-between text-sm mobile:text-xs"
                  style={{ color: "rgb(102, 101, 171)" }}
                >
                  <a
                    href="https://youandmeme.netlify.app/"
                    target="_blank"
                    className="text-center cursor-pointer hover:opacity-50"
                  >
                    Deployed App
                  </a>
                  <a
                    href="https://github.com/manfredjoa/you-and-meme-client"
                    target="_blank"
                    className="text-center cursor-pointer hover:opacity-50"
                  >
                    GitHub Client Repository
                  </a>
                  <a
                    href="https://github.com/manfredjoa/you-and-meme-server"
                    target="_blank"
                    className="text-center cursor-pointer hover:opacity-50"
                  >
                    GitHub Server Repository
                  </a>
                </div>
                <p className="flex grow items-center text-sm mt-2">
                  In the final week of our 12-week Software Engineering
                  Immersive at General Assembly, my team introduced "You &
                  Meme", a Django-React (DR) stack-based social media platform.
                  As the team leader among six developers, we strived to build a
                  user-friendly interface. Users can establish personalized
                  accounts with unique avatars, design memes from a variety of
                  templates, and actively engage with others by commenting and
                  liking posts. One of the standout features of our platform is
                  the integration with an API that allows users to generate
                  custom text on a wide array of meme templates. The platform
                  provides a seamless navigation experience with a home page,
                  detailed post views, and user profiles.
                </p>
              </div>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
