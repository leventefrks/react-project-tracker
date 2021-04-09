import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { uid } from 'react-uid';
import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const [isFormVisible, onShowFormVisibility] = useState(false);

  const addTask = task => setTasks([...tasks, { id: uid(task), ...task }]);

  const deleteTask = id => setTasks(tasks.filter(task => task.id !== id));

  const toggleTask = id =>
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setTasks(data);
    };
    getProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch('http://localhost:3000/tasks');
    const data = await res.json();
    return data;
  };

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
