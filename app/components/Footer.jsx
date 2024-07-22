import React from "react";
import phone from "../assets/phone.png";
import gmail from "../assets/gmail.png";
import address from "../assets/address.png";
import request from "../assets/request.png";
import comapny1 from "../assets/company1.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="mx-[5%] mb-6">
      <div className="flex flex-col w-full bg-[#000000] text-[#ffffff] px-16 pb-8 pt-2 rounded-xl">
        <div className="flex justify-center">
          <Image src={comapny1} alt="company1" />
        </div>
        <div className="flex flex-row justify-between mb-8">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Image src={phone} alt="phone" className="mr-2" />
              <div className="text-[16px] text-[#98A2B3] font-normal">
                Contact nums
              </div>
            </div>
            <div>+91 0000000000</div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Image src={gmail} alt="gmail" className="mr-2" />
              <div className="text-[16px] text-[#98A2B3] font-normal">
                Gmail
              </div>
            </div>
            <div>demo@gmail.com</div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Image src={address} alt="address" className="mr-2" />
              <div className="text-[16px] text-[#98A2B3] font-normal">
                Adress
              </div>
            </div>
            <div>Mumbai, India</div>
          </div>
          <div>
            <div className="flex flex-row">
              <Image src={request} alt="request" className="mr-2" />
              <div className="text-[16px] text-[#98A2B3] font-normal">
                Leave a request
              </div>
            </div>
            <div>Leave a request</div>
          </div>
        </div>
        <div className="flex justify-center">We work throughout the world</div>
      </div>
    </div>
  );
}

export default Footer;
