import React from "react";
import web from "../assets/Images/web.png";
import mobile from "../assets/Images/mobile.png";
import block from "../assets/Images/block.png";
import game from "../assets/Images/game.png";
import bot from "../assets/Images/bot.png";
import pnp from "../assets/Images/pnp.png";
import play from "../assets/Images/play.png";

function Services() {
  return (
    <div className="services">
      <h2 className="mt-12 text-center text-[20px] md:text-[25px] font-semibold">
        Our Services
      </h2>
      <section className="flex items-center flex-col md:flex-row justify-evenly py-12 px-6 md:px-8 lg:px-20">
        <div className="rounded-[14px] mb-10 md:mb-0 p-5 shadow-inner shadow-2xl w-[300px] h-[300px] md:h-[350px]">
          <img className="w-[40px] mt-5" src={web} alt="web" />
          <h3 className="text-[16px] lg:text-[17px] font-semibold py-4">
            Web Application
          </h3>
          <p className="text-[14px] lg:text-[16px]">
            Design and development of websites and web applications of all kind.
            Our experienced developers handle it all.
          </p>
          <div className="py-10 flex ">
            <img className="mr-3 h-[20px]" src={play} alt="play logo" />
            <h6 className="text-[13px] lg:text[15px] text-[#0066ff]">
              learn more
            </h6>
          </div>
        </div>

        <div className="rounded-[14px] mb-10 md:mb-0 p-5 shadow-inner shadow-2xl w-[300px] h-[300px] md:h-[350px]">
          <img className="w-[40px] mt-5" src={mobile} alt="mobile" />
          <h3 className="text-[16px] lg:text-[17px] font-semibold py-4">
            Mobile Application
          </h3>
          <p className="text-[15px] lg:text-[16px]">
            Hack city tech focus on user experience making your potential
            customers engaged
          </p>
          <div className="py-16 flex ">
            <img className="mr-3 h-[20px]" src={play} alt="play logo" />
            <h6 className="text-[13px] lg:text-[15px] text-[#0066ff]">
              learn more
            </h6>
          </div>
        </div>

        <div className="rounded-[14px] mb-10 md:mb-0 p-5 shadow-inner shadow-2xl w-[300px] h-[300px] md:h-[350px]">
          <img className="w-[40px] mt-5" src={block} alt="blockchain" />
          <h3 className="text-[16px] lg:text-[17px] font-semibold py-4">
            Blockchain Application
          </h3>
          <p className="text-[15px] lg:text-[16px]">
            Hack city tech focus on user experience making your potential
            customers engaged
          </p>
          <div className="py-16 flex ">
            <img className="mr-3 h-[20px]" src={play} alt="play logo" />
            <h6 className="text-[#0066ff] text-[13px] lg:text-[15px]">
              learn more
            </h6>
          </div>
        </div>
      </section>

      <section className="flex items-center flex-col md:flex-row m-auto justify-evenly py-0 md:px-8 lg:px-20">
        <div className="rounded-[14px] mb-10 md:mb-0 p-5 shadow-inner shadow-2xl w-[300px] h-[300px] md:h-[350px]">
          <img className="w-[40px] mt-5" src={game} alt="mobile" />
          <h3 className="text-[16px] lg:text-[17px] font-semibold py-4">
            Game Application
          </h3>
          <p className="text-[15px] lg:text-[16px]">
            Hack city tech focus on user experience making your potential
            customers engaged
          </p>
          <div className="py-16 flex ">
            <img className="mr-3 h-[20px]" src={play} alt="play logo" />
            <h6 className="text-[#0066ff] text-[13px] lg:text-[15px]">
              learn more
            </h6>
          </div>
        </div>

        <div className="rounded-[14px] mb-10 md:mb-0 p-5 shadow-inner shadow-2xl w-[300px] h-[300px] md:h-[350px]">
          <img className="w-[40px] mt-5" src={bot} alt="mobile" />
          <h3 className="text-[16px] lg:text-[17px] font-semibold py-4">
            Bot Application
          </h3>
          <p className="text-[15px] lg:text-[16px]">
            Hack city tech focus on user experience making your potential
            customers engaged
          </p>
          <div className="py-16 flex ">
            <img className="mr-3 h-[20px]" src={play} alt="play logo" />
            <h6 className="text-[#0066ff] text-[13px] lg:text-[15px]">
              learn more
            </h6>
          </div>
        </div>

        <div className="rounded-[14px] mb-10 md:mb-0 p-5 shadow-inner shadow-2xl w-[300px] h-[300px] md:h-[350px]">
          <img className="w-[40px] mt-5" src={pnp} alt="mobile" />
          <h3 className="text-[16px] lg:text-[17px] font-semibold py-4">
            PnP Microservice
          </h3>
          <p className="text-[15px] lg:text-[16px]">
            Hack city tech focus on user experience making your potential
            customers engaged
          </p>
          <div className="py-16 flex ">
            <img className="mr-3 h-[20px]" src={play} alt="play logo" />
            <h6 className="text-[#0066ff] text-[13px] lg:text-[15px]">
              learn more
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
