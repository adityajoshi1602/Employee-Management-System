import { useEffect, useState } from 'react'
import styles from './TaskListNumber.module.css'

function TaskListNumber({ tasks }) {
    let newTaskCount = 0;
    let completedCount = 0;
    let activeCount = 0;
    let failedCount = 0;

    if (tasks) {
        tasks.forEach((task) => {
            if (task.newTask) newTaskCount++;
            if (task.completed) completedCount++;
            if (task.active) activeCount++;
            if (task.failed) failedCount++;
        });
    }

    return (
        <div className={styles.main_list}>
            <div className={styles.task} style={{ backgroundColor: 'goldenrod' }}>
                <span style={{ fontSize: "30px", fontWeight: "800" }}>{newTaskCount}</span>
                <span style={{ fontSize: "25px" }}>New Tasks</span>
            </div>
            <div className={styles.task} style={{ backgroundColor: "green" }}>
                <span style={{ fontSize: "30px", fontWeight: "800" }}>{completedCount}</span>
                <span style={{ fontSize: "25px" }}>Completed Tasks</span>
            </div>
            <div className={styles.task} style={{ backgroundColor: "brown" }}>
                <span style={{fontSize:"30px",fontWeight:"800"}}>{failedCount}</span>
                <span style={{fontSize:"25px"}}>Failed Tasks</span>
            </div>
            <div className={styles.task} style={{ backgroundColor: "blue" }}>
                <span style={{fontSize:"30px",fontWeight:"800"}}>{activeCount}</span>
                <span style={{fontSize:"25px"}}>Accepted Tasks</span>
            </div>
        </div>
    )
}

export default TaskListNumber;