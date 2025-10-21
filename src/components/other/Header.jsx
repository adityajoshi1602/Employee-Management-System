import styles from './Header.module.css'

function Header({name}) {

    const logoutHandler=()=>{
        localStorage.removeItem('loggedin');
        window.location.reload();
    }
    return(
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"end"}}>
            <h1 style={{fontWeight:"400"}}>Hello <br /> <span style={{fontWeight:"1000",color:"white"}}>{name}</span></h1>
            <button className={styles.button} onClick={logoutHandler}>Log Out</button>
        </div>
    )
}
export default Header;