import PropTypes from 'prop-types';
import Button from './Button';
import { FaInbox } from 'react-icons/fa';

const Header = ({ title, onShowForm, isFormVisible }) => {
  const PROJECT_TEXT = 'project';

  const buttonText = `${isFormVisible ? 'close' : 'new'} ${PROJECT_TEXT}`;

  return (
    <div className="w-full flex items-center justify-between py-6 px-8 bg-white rounded-md select-none">
      <h1 className="flex items-center font-medium text-3xl md:text-5xl text-gray-700 space-x-3">
        <FaInbox className="w-8 h-8 text-indigo-400 fill-current self-end" />
        <span>{title}</span>
      </h1>
      <Button
        text={buttonText}
        onClick={onShowForm}
        isFormVisible={isFormVisible}
      />
    </div>
  );
};

Header.defaultProps = {
  title: 'Title Placeholder',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onShowForm: PropTypes.func,
};

export default Header;
