import React from "react";
import company from "../assets/company.png";
import phonegreen from "../assets/phonegreen.png";
import mailgreen from "../assets/mailgreen.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function NavBar() {
  return (
    <>
      <nav className="block flex flex-row justify-between items-center px-10 py-3 max-sm:hidden max-lg:hidden">
        <div>
          <Image
            src={company}
            alt="company"
            className="w-[174px] h-[60px] cursor-pointer"
          />
        </div>
        <div className="flex flex-row gap-2">
          <button className="rounded-xl px-4 py-2 shadow-none hover:shadow-2xl hover:bg-[#d3d3d3]">
            <a href="#DevelopmentCycle" key="DevelopmentCycle">
              Services
            </a>
          </button>
          <button className="rounded-xl px-4 py-2 shadow-none hover:shadow-2xl hover:bg-[#d3d3d3]">
            <a href="#IndustriesProjects" key="IndustriesProjects">
              Media
            </a>
          </button>
          <button className="rounded-xl px-4 py-2 shadow-none hover:shadow-2xl hover:bg-[#d3d3d3]">
            <a href="#Projects" key="Projects">
              Cases
            </a>
          </button>
          <button className="rounded-xl px-4 py-2 shadow-none hover:shadow-2xl hover:bg-[#d3d3d3]">
            <a href="#FAQ" key="FAQ">
              FAQ
            </a>
          </button>
          <button className="rounded-xl px-4 py-2 shadow-none hover:shadow-2xl hover:bg-[#d3d3d3]">
            <a href="#Contact" key="Contact">
              Contacts
            </a>
          </button>
        </div>
        <div className="block flex flex-row gap-4 max-xl:hidden">
          <button className="flex flex-row cursor-pointer">
            <Image src={phonegreen} alt="phonegreen" className="mr-2" />
            <div>+91000000000</div>
          </button>
          <button className="flex flex-row cursor-pointer">
            <Image src={mailgreen} alt="mailgreen" className="mr-2" />
            <div>demo@gmail.com</div>
          </button>
        </div>
      </nav>

      <nav className="hidden px-8 py-3 max-sm:hidden max-lg:block">
        <div className="flex flex-row justify-between items-center">
          <div className="w-fit">
            <Image src={company} alt="company" className="w-[174px] h-[60px]" />
          </div>
          <div className="w-fit bg-[#ffffff] rounded-xl">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="rounded-xl shadow-none hover:shadow-2xl hover:bg-[#d3d3d3]">
                  <Button variant="ghost">More...</Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <div className="flex flex-col bg-[#ffffff]">
                  <Button>
                    <a href="#DevelopmentCycle" key="DevelopmentCycle">
                      Services
                    </a>
                  </Button>
                  <Button>
                    <a href="#IndustriesProjects" key="IndustriesProjects">
                      Media
                    </a>
                  </Button>
                  <Button>
                    <a href="#Projects" key="Projects">
                      Cases
                    </a>
                  </Button>
                  <Button>
                    <a href="#FAQ" key="FAQ">
                      FAQ
                    </a>
                  </Button>
                  <Button>
                    <a href="#Contact" key="Contact">
                      Contacts
                    </a>
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      <nav className="hidden flex flex-row justify-between items-center px-8 py-3 max-sm:block">
        <div className="flex flex-row justify-between items-center">
          <div className="w-fit">
            <Image src={company} alt="company" className="w-[174px] h-[60px]" />
          </div>
          <div className="w-fit">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="rounded-xl shadow-none hover:shadow-2xl hover:bg-[#d3d3d3]">
                  <Button variant="ghost">More...</Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <div className="flex flex-col bg-[#ffffff]">
                  <Button>
                    <a href="#DevelopmentCycle" key="DevelopmentCycle">
                      Services
                    </a>
                  </Button>
                  <Button>
                    <a href="#IndustriesProjects" key="IndustriesProjects">
                      Media
                    </a>
                  </Button>
                  <Button>
                    <a href="#Projects" key="Projects">
                      Cases
                    </a>
                  </Button>
                  <Button>
                    <a href="#FAQ" key="FAQ">
                      FAQ
                    </a>
                  </Button>
                  <Button>
                    <a href="#Contact" key="Contact">
                      Contacts
                    </a>
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
