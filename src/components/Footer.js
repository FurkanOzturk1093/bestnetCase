import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className=" pt-20 tablet:text-xs">
      <div className="  bg-[#212529] text-white py-10">
        <div className="flex justify-between  max-w-7xl mx-auto gap-4 ">
          <div>
            <h3 className="tablet:text-sm text-lg font-bold">
              Contact the Publisher
            </h3>
            <p className="py-2 text-[#E5E5E5]">alita99@gmail.com</p>
            <p className="py-2 text-[#E5E5E5]">+90552 820 93 13</p>
          </div>
          <div>
            <h3 className=" tablet:text-sm text-lg font-bold ">Explorate</h3>
            <div className=" text-[#E5E5E5] ">
              <p className="py-2">About</p>
              <p className="py-2">Partners</p>
              <p className="py-2">Job Opportunities</p>
              <p className="py-2">Advertise</p>
              <p className="py-2">Membership</p>
            </div>
          </div>
          <div>
            <h3 className=" tablet:text-sm text-lg font-bold">Headquarter</h3>
            <p className="py-2 text-[#E5E5E5]">
              Macun Mah.
              <br /> 243.Sokak, <br /> Yenimahalle
              <br /> Ankara
            </p>
          </div>
          <div className=" mr-16">
            <h3 className=" tablet:text-sm text-lg font-bold pb-4">
              Connections
            </h3>
            <div className=" tablet:flex-col flex gap-6 tablet:items-center">
              <FacebookIcon fontSize="small" />
              <YouTubeIcon fontSize="small" />
              <TwitterIcon fontSize="small" />
              <LinkedInIcon fontSize="small" />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#343A40]">
        <div className=" pb-8 pt-2 flex justify-between max-w-7xl mx-auto text-white">
          <p className="font-bold text-sm">2023 | Furkan ÖZTÜRK</p>
          <p className="text-sm">Copyright @ 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
