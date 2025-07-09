import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Premium Services
          <br />
          Built for Excellence
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Experience next-generation cryptocurrency services with advanced security protocols, 
          lightning-fast transactions, and institutional-grade infrastructure designed for the modern digital economy.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Enterprise Security"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Military-grade encryption and multi-layer security protocols ensure your digital assets remain completely protected at all times."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Optimal Exchange Rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Advanced algorithms continuously scan global markets to provide you with the most competitive rates and minimal slippage."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Lightning Transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Experience near-instantaneous transaction processing with our optimized blockchain infrastructure and smart routing technology."
        />
      </div>
    </div>
  </div>
);

export default Services;
