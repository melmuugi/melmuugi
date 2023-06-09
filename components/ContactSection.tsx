import React from 'react'
import SlideUp from "./SlideUp"
import {
    AiOutlineGithub,
    AiOutlineTwitter,
    AiOutlineLinkedin,
    AiOutlineYoutube,
    AiOutlinePhone,
  } from "react-icons/ai"


const ContactSection = () => {
  return (
        <div className="my-12 pb-12 md:pt-16 md:pb-45"> 
        <h1 className="text-center font-bold text-4xl">
          Get In Touch
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>
          <SlideUp offset="-300px 0px -300px 0px">
          <div className="flex flex-col justify-between justify-center items-center animate-slideUpCubiBezier animation-delay-6 my-12 pb-12 md:pt-16 md:pb-25">
            <div className="border-3 w-full max-w-2xl space-y-8 p-8 rounded-lg shadow-lg">
            <div className="flex flex-row items-center justify-center space-x-1 mb-1 text-xl">    
            <AiOutlinePhone className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}/>
              <span> +254 704 690042</span>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/melmuugi" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/melmuugi"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/melmuugi/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.youtube.com/watch?v=tXyx3E81Bbo"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
            </div>
            </div>
            </SlideUp>
        </div>
  )
}

export default ContactSection