import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { uid } from 'react-uid';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      date: 'Feb 5th at 2:30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Meeting at School',
      date: 'Feb 6th at 1:30pm',
      reminder: false,
    },
  ]);

  const [isFormVisible, onShowFormVisibility] = useState(false);

  const addTask = task => {
    console.log(task);

    const newTask = {
      id: uid(task),
      ...task,
    };

    setTasks([...tasks, newTask]);
  };

  const onShow = () => console.log('onShow');

  const deleteTask = id => setTasks(tasks.filter(task => task.id !== id));

  const toggleTask = id =>
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-indigo-300">
      <div className="w-full max-w-2xl bg-gray-100 p-4 md:p-8 rounded-md shadow-xl">
        <div className="w-full flex flex-col bg-white rounded-md shadow-sm">
          <Header
            title="Inbox"
            onShowForm={() => onShowFormVisibility(!isFormVisible)}
            isFormVisible={isFormVisible}
          />
          {isFormVisible && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
          ) : (
            <p className="px-8 pb-4 text-gray-400">No projects to show...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
