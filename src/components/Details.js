import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const Details = props => {
  return (
    <div className="flex items-center flex-col space-x-2 capitalize">
      <h1 className="text-xl text-gray-700 font-bold">
        technologies & third parties
      </h1>
      <ul className="text-indigo-500 text-center">
        <li>react</li>
        <li>react router</li>
        <li>react icons</li>
        <li>tailwindCSS</li>
        <li>axios</li>
        <li>json server</li>
      </ul>
      <Link
        to="/"
        className="flex self-start items-center text-indigo-500 hover:text-indigo-400 text-sm capitalize font-bold"
      >
        <FaChevronLeft className="fill-current" aria-hidden="true" />
        <span>go back</span>
      </Link>
    </div>
  );
};

export default Details;
