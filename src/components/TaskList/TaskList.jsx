import styles from './TaskList.module.css';

function TaskList({ tasks, handleTask }) {
  return (
    <div className={styles.main_list}>
      {tasks.map((task) => (
        <div className={styles.task} key={task.title + task.date}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
            <h2
              style={{
                padding: "5px 10px",
                borderRadius: "10px",
                fontSize: "17px",
                backgroundColor:
                  task.priority === "High" ? "red" :
                  task.priority === "Medium" ? "orange" : "green",
                color: "white"
              }}
            >
              {task.priority || "High"}
            </h2>

            {task.newTask && (
              <span className={styles.status} style={{ padding: "5px 10px", borderRadius: "10px", backgroundColor: "blue" }}>
                New Task
              </span>
            )}
            <span>{task.date}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2>{task.title}</h2>
            <span>{task.category}</span>
            <span>{task.description}</span>
          </div>

          <div style={{ marginTop: "15px", display: "flex", gap: "5px", flexWrap: "wrap" }}>
            {!task.completed && !task.failed && (
              <>
                <button
                  className={styles.status}
                  onClick={() => handleTask(task, 'completed')}
                  style={{ padding: "5px 15px", borderRadius: "10px", backgroundColor: "purple" }}
                >
                  Mark As Completed
                </button>
                <button
                  className={styles.status}
                  onClick={() => handleTask(task, 'failed')}
                  style={{ padding: "5px 15px", borderRadius: "10px", backgroundColor: "brown" }}
                >
                  Mark As Failed
                </button>
              </>
            )}

            {task.completed && (
              <span className={styles.status} style={{ padding: "5px 15px", borderRadius: "10px", backgroundColor: "green" }}>
                Completed
              </span>
            )}

            {task.failed && (
              <span className={styles.status} style={{ padding: "5px 15px", borderRadius: "10px", backgroundColor: "red" }}>
                Failed
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
