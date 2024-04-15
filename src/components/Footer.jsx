//import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";

import {Link} from 'react-router-dom';


const Footer = () => {
  return (
    <footer className=" min-w-[100px] py-14 md:pl-56  grid grid-cols-[10fr,3fr,1fr]  text-center">
      <div className=" w-full border-l-2 border-gray-600 border-r-2 ">
        <img className=" w-[100px] h-[100px] rounded-[50%] object-contain relative left-[45%] "
          src={"https://avatars.githubusercontent.com/ShubhamSingh-28"}
          alt="Founder"
        />

        <h2 className=" m-4">Shubham Singh</h2>
        <p className=" ">Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article className=" mt-4 flex flex-col items-center">
          <Link className=" w-[50px] h-[50px] rounded-[50%] grid place-items-center" to="https://instagram.com/shivam_singh28_" target={"blank"}>
            <AiFillInstagram className=" md:w-12 md:h-12" />
          </Link>
          <Link to="https://github.com/ShubhamSingh-28" target={"blank"}>
            <AiFillGithub className=" md:w-12 md:h-12"/>
          </Link>
        </article>
      </aside>
      <Link  href="/">
        <AiOutlineArrowUp />
      </Link>
    </footer>
  );
};

export default Footer;