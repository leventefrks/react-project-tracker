import { Link } from 'react-router-dom';

const Footer = props => {
  return (
    <div className="flex flex-col mt-2 text-xs text-gray-500 capitalize">
      <Link to="/details" className="self-end underline">
        app details
      </Link>
    </div>
  );
};

export default Footer;
