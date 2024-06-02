

import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaLinkedin,
  FaYoutube,
  FaSnapchatGhost,
  FaPinterest,
  FaReddit,
  FaTiktok,
} from "react-icons/fa";


const sections = [
  {
    title: "Shop",
    items: ["Phones", "Laptops", "Games", "Laptops", "Sale"],
  },
  {
    title: "Support",
    items: ["Pricing", "Documentation", "Guides", "API Status"],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];


const socialMediaLinks = [
  { icon: FaFacebook, url: "https://www.facebook.com" },
  { icon: FaGithub, url: "https://www.github.com" },
  { icon: FaInstagram, url: "https://www.instagram.com" },
  { icon: FaTwitter, url: "https://www.twitter.com" },
  { icon: FaTwitch, url: "https://www.twitch.tv" },
  { icon: FaLinkedin, url: "https://www.linkedin.com" },
  { icon: FaYoutube, url: "https://www.youtube.com" },
  { icon: FaSnapchatGhost, url: "https://www.snapchat.com" },
  { icon: FaPinterest, url: "https://www.pinterest.com" },
  { icon: FaReddit, url: "https://www.reddit.com" },
  { icon: FaTiktok, url: "https://www.tiktok.com" },
];

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-700 text-gray-300 py-y px-2 bottom-0 left-0">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold text-blue-200 uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-500 hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold text-blue-200 uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button  onClick={() => {
                  alert("Subscribed!");
                }}className="p-2 bg-blue-400 rounded hover:bg-blue-600 text-white font-bold mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4 text-white">© 2024 TechTop. All rights reserved.</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {socialMediaLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
