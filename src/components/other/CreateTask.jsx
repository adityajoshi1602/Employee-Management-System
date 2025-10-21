import { useState } from 'react';
import styles from './CreateTask.module.css'

function CreateTask() {
    const [taskTitle,setTitle]=useState('')
    const[taskDate,setDate]=useState('')
    const [asignto,setAssignto]=useState('')
    const [taskDiscription,setDisc]=useState('')
    const [category,setCategory]=useState('')

    const submitHandler = (e)=>{
        e.preventDefault();
        const task={'title':taskTitle,'date':taskDate,'category':category,'discription':taskDiscription,active:false,completed:false,failed:false,newTask:true}

        let data = JSON.parse(localStorage.getItem('employees'));
        console.log(JSON.parse(localStorage.getItem('employees')))
        data = data.map((e)=>{
            if(e.name === asignto){
                console.log(e.name)
                return {...e , tasks:[...e.tasks,task]}
            }
            return e;
        })
        localStorage.setItem('employees',JSON.stringify(data));
        console.log(JSON.parse(localStorage.getItem('employees')))
        console.log('submitted');
    }
    return (
        <>
            <form className={styles.form}
            onSubmit={(e)=>submitHandler(e)}>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "10px" }}>
                    <label htmlFor="title">Task Title</label>
                    <input value={taskTitle} onChange={(e)=>setTitle(e.target.value)} type="text" name="title" id="title" />

                    <label htmlFor="date">Date</label>
                    <input value={taskDate} onChange={(e)=>setDate(e.target.value)} type="date" name="date" id="date" />

                    <label htmlFor="assignto">Assign To</label>
                    <input value={asignto} onChange={(e)=>setAssignto(e.target.value)} type="text" id="assignto" name="assignto" />

                    <label htmlFor="catagory">Catagory</label>
                    <input value={category} onChange={(e)=>setCategory(e.target.value)} type="text" name="catagory" id="catagory" />
                </div>

                <div className={styles.discription}>
                    <label htmlFor="disc">Discription</label>
                    <textarea value={taskDiscription} onChange={(e)=>setDisc(e.target.value)} name="disc" id="disc"></textarea>
                    <button>Create Task</button>
                </div>

            </form>
        </>
    )
}
export default CreateTask;