import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { uid } from 'react-uid';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const BASE_URL = 'http://localhost:3000/tasks/';

  const [tasks, setTasks] = useState([]);

  const [isFormVisible, onShowFormVisibility] = useState(false);

  const addTask = async task => {
    try {
      const { data } = await axios.post(BASE_URL, task);
      setTasks([...tasks, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async id => {
    await axios.delete(`${BASE_URL}${id}`);
    setTasks(tasks.filter(task => task.id !== id));
  };

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
    try {
      const { data } = await axios.get(BASE_URL);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-indigo-300">
      <div className="w-full max-w-2xl bg-gray-100 p-4 md:p-8 mx-2 md:mx-0 rounded-md shadow-xl">
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
