import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-2 hover:bg-indigo-50 select-none ${
        task.reminder
          ? 'border-l-4 border-green-500 rounded-tl rounded-bl-sm'
          : ''
      } `}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="flex flex-col">
        <span className="text-md font-bold text-gray-700">{task.text}</span>
        <span className="text-xs text-gray-400">{task.date}</span>
      </div>
      <div className="p-1 bg-white shadow-md rounded-full">
        <FaTimes
          className="text-red-400 fill-current cursor-pointer hover:text-red-300"
          aria-label="delete task"
          onClick={() => onDelete(task.id)}
        />
      </div>
    </div>
  );
};

Task.propTypes = {
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};

export default Task;
