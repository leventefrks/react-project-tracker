import PropTypes from 'prop-types';
import { useState } from 'react';

const AddTask = ({ addTask, onAdd }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    if (!text) {
      return;
    }

    onAdd({ text, date, reminder });
    setText('');
    setDate('');
    setReminder(false);
  };

  return (
    <form className="flex flex-col space-y-4 px-8 mb-4" onSubmit={onSubmit}>
      <div>
        <label
          htmlFor="text"
          className="block mb-2 text-sm text-gray-700 font-bold capitalize"
        >
          add project
        </label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Add Task"
          required
          value={text}
          onChange={e => setText(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
        />
      </div>
      <div>
        <label
          htmlFor="date"
          className="block mb-2 text-sm text-gray-700 font-bold capitalize"
        >
          date
        </label>
        <input
          type="text"
          name="date"
          id="date"
          placeholder="Add Date"
          required
          value={date}
          onChange={e => setDate(e.target.value)}
          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
        />
      </div>
      <div className="flex items-center">
        <div className="bg-white border rounded-md border-gray-300 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2">
          <input
            type="checkbox"
            className="opacity-0 absolute"
            name="reminder"
            id="reminder"
            value={reminder}
            checked={reminder}
            onChange={e => setReminder(e.currentTarget.checked)}
          />
          <svg
            className="fill-current hidden w-4 h-4 text-green-500"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </div>
        <label
          className="select-none text-sm text-gray-700 font-bold"
          htmlFor="reminder"
        >
          Set Reminder
        </label>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 hover:bg-indigo-300 duration-100 ease-in font-bold text-white rounded-md"
      >
        Save Project
      </button>
    </form>
  );
};

AddTask.propTypes = {
  onAdd: PropTypes.func,
};

export default AddTask;
