import React from "react";
import styles from './Admin.module.css';
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

function AdminDashBoard({data}) {
  const employeedata = JSON.parse(localStorage.getItem('employees'));
  return (
    <div className={styles.main_admin}>
      <Header name={data.name}/>
      <CreateTask />
      <AllTask  employeeData = {employeedata}/>
    </div>
  );
}

export default AdminDashBoard;
