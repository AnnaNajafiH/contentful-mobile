// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div>
//       <ul className="flex space-x-4 mb-4 text-black-500 bg-gray-800 font-bold  p-4">
//         <li>
//           <Link to="https://www.facebook.com/?locale=de_DE">
//             <img
//               src="https://img.icons8.com/?size=100&id=lRtQAp17Ei7V&format=png&color=000000"
//               alt=""
//               className="size-7"
//             />
//           </Link>
//         </li>
//         <li>
//           <Link to="https://www.facebook.com/?locale=de_DE">
//             <img
//               src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
//               alt=""
//               className="size-7"
//             />
//           </Link>
//         </li>
//         <li>
//           <Link to="https://x.com/?lang=de">
//             <img
//               src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"
//               alt=""
//               className="size-7"
//             />
//           </Link>
//         </li>
//         <li>
//           <Link to="https://www.skype.com/">
//             <img
//               src="https://img.icons8.com/?size=100&id=63204&format=png&color=000000"
//               alt=""
//               className="size-7"
//             />
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Footer;



// import React from "react";
// import {
//   FaFacebook,
//   FaGithub,
//   FaInstagram,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";

// const sections = [
//   {
//     title: "Shop",
//     items: ["Phones", "Computers", "Games", "Laptops", "Sale"],
//   },
//   {
//     title: "Support",
//     items: ["Pricing", "Documentation", "Guides", "API Status"],
//   },
//   {
//     title: "Company",
//     items: ["About", "Blog", "Jobs", "Press", "Partners"],
//   },
//   {
//     title: "Legal",
//     items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
//   },
// ];

// const items = [
//   { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
//   { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
//   { name: "Twitter", icon: FaTwitter, link: "https://x.com/" },
//   { name: "Youtube", icon: FaYoutube, link: "https://www.youtube.com/" },
//   { name: "Github", icon: FaGithub, link: "https://github.com/" },
// ];

// const Footer = () => {
//   return (
//     <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
//       <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
//         {sections.map((section, index) => (
//           <div key={index}>
//             <h6 className="font-bold uppercase pt-2">{section.title}</h6>
//             <ul>
//               {section.items.map((item, i) => (
//                 <li key={i} className="py-1 text-gray-500 hover:text-white">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//         <div className="col-span-2 pt-8 md:pt-2">
//           <p className="font-bold uppercase">Subscribe to our newsletter</p>
//           <p className="py-4">
//             The latest news, articles, and resources, sent to your inbox weekly.
//           </p>
//           <form className="flex flex-col sm:flex-row">
//             <input
//               className="w-full p-2 mr-4 rounded-md mb-4"
//               type="email"
//               placeholder="Enter email.."
//             />
//             <button className="p-2 mb-4">Subscribe</button>
//           </form>
//         </div>
//       </div>

//       <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
//         <p className="py-4">2022 Workflow, LLC. All rights reserved</p>
//         <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
//           {items.map((x, index) => {
//             return <x.icon key={index} className="hover:text-white" />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Footer; 

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
    items: ["Phones", "Computers", "Games", "Laptops", "Sale"],
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
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
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
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 Workflow, LLC. All rights reserved</p>
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
