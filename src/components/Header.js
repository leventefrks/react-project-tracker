import PropTypes from 'prop-types';
import Button from './Button';
import { FaInbox } from 'react-icons/fa';

const Header = ({ title, onShowForm, isFormVisible }) => {
  const PROJECT_LABEL = 'project';

  return (
    <div className="w-full flex items-center justify-between py-6 px-8 bg-white rounded-md select-none">
      <h1 className="flex items-center font-medium text-xl md:text-2xl text-gray-700 space-x-3">
        <FaInbox className="text-indigo-400 fill-current" />
        <span>{title}</span>
      </h1>
      <Button
        text={isFormVisible ? `close ${PROJECT_LABEL}` : `new ${PROJECT_LABEL}`}
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
