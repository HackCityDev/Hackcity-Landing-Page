import React from "react";
import who from "../assets/Images/who.png";
import vetted from "../assets/Images/vetted.png";
import goal from "../assets/Images/goal.png";
import gear from "../assets/Images/gear.png";

function WhoWeAre() {
  return (
    <div className="mt-10 px-6 md:mt-20 md:px-0">
      <section className="flex flex-col-reverse items-start md:flex-row justify-around">
        <div className="md:ml-10 z-20 m-auto mt-10 md:mt-0">
          <img
            src={who}
            className="max-w-[270px] md:max-h-[380px]"
            alt="who we are"
          />
        </div>

        <div className="who-text md:w-[60%]">
          <h3 className="text-[33px] text-[#032555] font-semibold mb-5">
            <span className="text-[#eb5757] text-[15px] font-semibold">
              Who we are
            </span>
            <br />
            Experienced Tech <br /> Solutions Provider
          </h3>
          <p className="who-para text-[16px] md:w-[85%] text-[3a3a3a] leading-7 mb-5 md:mb-0">
            HackCity is a one-stop tech company where ideas are transformed into
            products and businesses. Our product/business development teams have
            vast experiences and are equipped with the right tools to help you
            bring your idea to life, no matter how complex or incomplete it is.
          </p>
        </div>
      </section>

      <section className="who-card flex flex-col items-center my-14 md:flex-row justify-between px-6 md:px-20">
        <div className="shadow-2xl shadow-inner rounded-[14px] mb-10 p-5 w-[350px] h-[200px] text-left items-center m-auto">
          <div className="flex items-center mb-10 md:mb-5 font-bold">
            <img className="w-[40px]" src={gear} alt="gear" />
            <h5 className="ml-5">Tech. + Business</h5>
          </div>
          <p className="text-[14px] text-gray-600">
            We go beyond software development, we also offer business
            development services
          </p>
        </div>
        <div className="shadow-2xl shadow-inner rounded-[14px] mb-10 p-5 w-[350px] h-[200px] text-left items-center m-auto">
          <div className="flex items-center mb-10 md:mb-5 font-bold">
            <img className="w-[40px]" src={vetted} alt="vetted" />
            <h5 className="ml-5"> Vetted + Experienced</h5>
          </div>
          <p className="text-[14px] text-gray-600">
            Team of well-vetted experienced developers for your tech and
            business needs
          </p>
        </div>
        <div className="shadow-2xl shadow-inner rounded-[14px] mb-10 p-5 w-[350px] h-[200px] text-left items-center m-auto">
          <div className="flex items-center mb-6 md:mb-5 font-bold">
            <img className="w-[40px]" src={goal} alt="goal" />
            <h5 className="ml-5">Effective + Efficient</h5>
          </div>
          <p className="text-[14px] text-gray-600">
            Adopts an effective and efficient development scheme, saving you
            time and money
          </p>
        </div>
      </section>
    </div>
  );
}

export default WhoWeAre;
