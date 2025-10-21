import { useState } from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import styles from './Employee.module.css';

function EmployeeDashBoard({ data }) {
  const [tasks, setTasks] = useState(data.tasks);

const taskHandler = (task, status) => {
  const updatedTasks = tasks.map(t => {
    if (t === task) {
      return {
        ...t,
        completed: status === 'completed',
        failed: status === 'failed',
        active: !(status === 'completed' || status === 'failed')
      };
    }
    return t;
  });

  setTasks(updatedTasks);

  let employees = JSON.parse(localStorage.getItem('employees')) || [];
  employees = employees.map(emp =>
    emp.name === data.name ? { ...emp, tasks: updatedTasks } : emp
  );
  localStorage.setItem('employees', JSON.stringify(employees));

  const loggedin = JSON.parse(localStorage.getItem('loggedin')) || {};
  if (loggedin.role === 'user' && loggedin.employee?.name === data.name) {
    loggedin.employee = { ...loggedin.employee, tasks: updatedTasks };
    localStorage.setItem('loggedin', JSON.stringify(loggedin));
  }
};


  return (
    <div className={styles.main_employeedash}>
      <Header name={data.name} />
      <TaskListNumber tasks={tasks} />
      <TaskList tasks={tasks} handleTask={taskHandler} />
    </div>
  );
}

export default EmployeeDashBoard;
