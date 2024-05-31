import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <ul className="flex space-x-4 mb-4 text-black-500 bg-gray-800 font-bold  p-4">
        <li>
          <Link to="https://www.facebook.com/?locale=de_DE">
            <img
              src="https://img.icons8.com/?size=100&id=lRtQAp17Ei7V&format=png&color=000000"
              alt=""
              className="size-7"
            />
          </Link>
        </li>
        <li>
          <Link to="https://www.facebook.com/?locale=de_DE">
            <img
              src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
              alt=""
              className="size-7"
            />
          </Link>
        </li>
        <li>
          <Link to="https://x.com/?lang=de">
            <img
              src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"
              alt=""
              className="size-7"
            />
          </Link>
        </li>
        <li>
          <Link to="https://www.skype.com/">
            <img
              src="https://img.icons8.com/?size=100&id=63204&format=png&color=000000"
              alt=""
              className="size-7"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
