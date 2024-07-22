import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function ContactForm() {
  return (
    <div className="w-full h-full border border-2 p-8 bg-[#ffffff] rounded-xl shadow-2xl">
      <div className="flex flex-row justify-end items-end max-sm:flex-col max-sm:items-center">
        <div className="flex flex-col gap-4 mr-10 max-sm:mr-0">
          <div className="text-[24px] text-[#101828] font-bold mb-4">
            Leave your contacts and we will call you back within 30 minutes
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <span className="text-[13px] text-[#667085] font-medium">
                Full Name
              </span>
              <Input
                type="name"
                placeholder="My Name"
                className="border-0 border-b-2 border-[#000000] focus:border-[#4BB543] rounded-none"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] text-[#667085] font-medium">
                Phone Number
              </span>
              <Input
                type="number"
                placeholder="0000000000"
                className="border-0 border-b-2 border-[#000000] focus:border-[#4BB543] rounded-none"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 max-sm:mb-10">
            <div className="flex flex-col">
              <span className="text-[13px] text-[#667085] font-medium">
                Business name
              </span>
              <Input
                type="name"
                placeholder="ABC Technologies PVT LTD"
                className="border-0 border-b-2 border-[#000000] focus:border-[#4BB543] rounded-none"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] text-[#667085] font-medium">
                Business mail
              </span>
              <Input
                type="email"
                placeholder="demoaccount@gmail.com"
                className="border-0 border-b-2 border-[#000000] focus:border-[#4BB543] rounded-none"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-2 rounded-xl bg-[#80A948] text-[#ffffff] cursor-pointer hover:text-[#000000]">
          <Button>
            Get <br />
            consultation
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
