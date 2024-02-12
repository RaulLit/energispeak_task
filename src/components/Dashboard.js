import { useRef, useState } from "react";

export const Dashboard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 13v-2a1 1 0 0 0-1-1h-.8l-.7-1.7.6-.5a1 1 0 0 0 0-1.5L17.7 5a1 1 0 0 0-1.5 0l-.5.6-1.7-.7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.8l-1.7.7-.5-.6a1 1 0 0 0-1.5 0L5 6.3a1 1 0 0 0 0 1.5l.6.5-.7 1.7H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.8l.7 1.7-.6.5a1 1 0 0 0 0 1.5L6.3 19a1 1 0 0 0 1.5 0l.5-.6 1.7.7v.8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.8l1.7-.7.5.6a1 1 0 0 0 1.5 0l1.4-1.4a1 1 0 0 0 0-1.5l-.6-.5.7-1.7h.8a1 1 0 0 0 1-1Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          />
        </svg>
      ),
      value: "0.30 kW",
      description: "Power",
      lastAct: "a month ago",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.5 4h-13m13 16h-13M8 20v-3.3c0-.5.1-.9.4-1.2l1.6-2.9a1 1 0 0 0 0-1.2L8.4 8.5A2 2 0 0 1 8 7.3V4h8v3.3c0 .5-.1.9-.4 1.2L14 11.4a1 1 0 0 0 0 1.2l1.6 2.9c.3.3.4.7.4 1.2V20H8Z"
          />
        </svg>
      ),
      value: "0.40 hours",
      description: "Runtime during shift",
      lastAct: "a month ago",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5V3m0 18v-2M7 7 5.7 5.7m12.8 12.8L17 17M5 12H3m18 0h-2M7 17l-1.4 1.4M18.4 5.6 17 7.1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
          />
        </svg>
      ),
      value: "2.40 g",
      description: "Vibration",
      lastAct: "a month ago",
    },
  ]);
  const [editMode, setEditMode] = useState(false);

  const dragTask = useRef(0);
  const draggedOverTask = useRef(0);

  function handleSort() {
    const tasksClone = [...tasks];
    const temp = tasksClone[dragTask.current];
    tasksClone.splice(dragTask.current, 1);
    tasksClone.splice(draggedOverTask.current, 0, temp);
    setTasks(tasksClone);
    setEditMode(false);
  }

  return (
    <div className="page p-2">
      <h2 className="text-3xl m-5">This is a Dashboard</h2>
      <div className="w-2/3 h-96 mt-3 border-2 border-gray-300 rounded flex p-2 relative">
        {/* <button
          className="absolute top-1 right-1 m-1 p-2 pl-4 pr-4 border border-gray-300 hover:shadow-md rounded-full text-xs"
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? "Save" : "Edit Order"}
        </button> */}
        {tasks &&
          tasks.map((task, index) => (
            <div
              key={task.id}
              className={`box ${editMode ? "cursor-grab" : "cursor-default"}`}
              draggable={editMode}
              onDragStart={() => (dragTask.current = index)}
              onDragEnter={() => (draggedOverTask.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="card-bg p-2 text-white">
                <div className="flex justify-between">
                  {task.icon}
                  <button>
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m10.8 17.8-6.4 2.1 2.1-6.4m4.3 4.3L19 9a3 3 0 0 0-4-4l-8.4 8.6m4.3 4.3-4.3-4.3m2.1 2.1L15 9.1m-2.1-2 4.2 4.2"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <h3 className="text-2xl">{task.value}</h3>
                  <p className="text-sm">{task.description}</p>
                </div>
              </div>
              <div className="p-2">
                <p className="text-sm">Last Activity</p>
                <h5 className="text-xl">{task.lastAct}</h5>
                <div
                  onMouseDown={() => setEditMode(true)}
                  className="flex justify-center hover:bg-gray-200 cursor-grab"
                >
                  <svg
                    class="w-6 h-6 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M6 12h0m6 0h0m6 0h0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
