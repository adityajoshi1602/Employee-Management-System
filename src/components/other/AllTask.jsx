import styles from './allTask.module.css';

function AllTask({ employeeData }) {
    return (
        <>
            <div style={{
                backgroundColor: "brown",
                fontSize: "20px",
                display: "flex",
                justifyContent: 'space-between',
                padding: "10px 25px",
                borderRadius: "10px"
            }}>
                <span>Employee Name</span>
                <span>New Task</span>
                <span>Active Task</span>
                <span>Completed</span>
                <span>Failed</span>
            </div>
            <div>
                {employeeData.map((element) => (
                    <div key={element.id} style={{ display: "flex", margin: "5px 0px", justifyContent: 'space-between', padding: "10px 25px", fontSize: "20px", border: "1px solid green    ", borderRadius: "10px" }}>
                        <span>{element.name}</span>
                        <span>{element.tasks.filter(t => t.newTask).length}</span>
                        <span>{element.tasks.filter(t => t.active).length}</span>
                        <span>{element.tasks.filter(t => t.completed).length}</span>
                        <span>{element.tasks.filter(t => t.failed).length}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AllTask;
