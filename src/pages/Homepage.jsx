import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Homepage = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col pt-0 justify-center min-h-screen p-8 gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-10">
        <h1 className="mt-10 text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="relative z-10 pr-10 font-mono">LI Prestige Automotive</span>
          <br />
          <span className="text-coral-red text-2xl inline-block mt-3">
            (555)-555-5555
          </span>
        </h1>
        <p className="font-serif font-family:Georgia text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          We handle everything from engine rebuilds to simple oil changes and
          tire rotations! Give us a call and let us know how we can help you!
        </p>
        <Button label="Contact Us Today!" destination="/contactus"/>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py40 bg-primary bg-hero bg-cover bg-center">
        <img
          src="https://content-images.carmax.com/qeontfmijmzv/6u3MxZykpcuWJWkthhjpW3/0d8e2e1dfcbe86c80e93eb7eb70bb021/542101_Getting-Used-Cars-Ready-to-Sell_Meet-the-Master-Mechanics_Hero_Fullwidth_1440x625.jpg"
          alt="mechanic"
          width={800}
          className="object-contain relative z-10"
        />
      </div>
    </section>
  );
};

export default Homepage;
