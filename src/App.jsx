import './App.module.css';
import Login from './components/Auth/Login';
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard';
import AdminDashBoard from './components/Dashboard/AdminDashBoard';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthProvider';

function App() {
  const [user, setUser] = useState('');
  const [loggedinData, setLoggedinData] = useState({});
  const Authdata = useContext(AuthContext);

  useEffect(() => {
    if (Authdata) {
      const loggedinuser = JSON.parse(localStorage.getItem('loggedin'));
      if (loggedinuser) {
        setUser(loggedinuser.role);
        if (loggedinuser.role === 'user' && loggedinuser.employee) {
          setLoggedinData(loggedinuser.employee);
        }
        if (loggedinuser.role === 'admin' && loggedinuser.admin) {
          setLoggedinData(loggedinuser.admin);
        }
      }
    }
  }, [Authdata]);

const loginHandle = (email, password) => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const admins = JSON.parse(localStorage.getItem('admin')) || [];

  const adminUser = admins.find(a => a.email === email && a.password === password);
  if (adminUser) {
    setLoggedinData(adminUser);
    setUser('admin');
    localStorage.setItem('loggedin', JSON.stringify({ role: 'admin', admin: adminUser }));
    return;
  }

  // Check employee
  const employee = employees.find(e => e.email === email && e.password === password);
  if (employee) {
    setLoggedinData(employee);
    setUser('user');
    localStorage.setItem('loggedin', JSON.stringify({ role: 'user', employee }));
    return;
  }

  alert('Invalid credentials');
};



  return (
    <>
      {!user && <Login loginHandle={loginHandle} />}
      {user === 'admin' && <AdminDashBoard data={loggedinData} />}
      {user === 'user' && <EmployeeDashBoard data={loggedinData} />}
    </>
  );
}

export default App;
