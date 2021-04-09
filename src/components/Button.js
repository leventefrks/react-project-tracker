import PropTypes from 'prop-types';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Button = ({ text, onClick, isFormVisible }) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center justify-center space-x-2 text-indigo-500 hover:text-indigo-400 font-medium text-sm focus:border-transparent focus:outline-none select-none"
    >
      <div className="rounded-full text-white w-8 h-8 bg-indigo-500 group-hover:bg-indigo-400 text-xl flex items-center justify-center">
        {!isFormVisible ? (
          <FaPlus className="color-white fill-current text-xs" />
        ) : (
          <FaMinus className="color-white fill-current text-xs" />
        )}
      </div>
      <span className="capitalize font-bold">{text}</span>
    </button>
  );
};

Button.defaultProps = {
  text: 'Text Placeholder',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isFormVisible: PropTypes.bool,
};

export default Button;
