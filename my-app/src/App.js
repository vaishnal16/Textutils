import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import {createBrowserRouter,RouterProvider,} from 'react-router-dom';
import Main from './Components/Main';
import React,{useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert =(message,type)=>{
    let newAlert={
      message:message,
      type:type
    }
    setAlert(newAlert);
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
   const toggleMode=()=>{
     if(mode ==='light'){
      let a='dark'
       setMode(a);
       document.body.style.backgroundColor='grey';
       showAlert("Dark Mode Has been Enabled","Sucess");
     }
     else{
      let a='light'
       setMode(a);
       document.body.style.backgroundColor='white';
       showAlert("Light Mode Has been Enabled","Sucess");
     }
   }

   const router=createBrowserRouter([
    {
      path: '/*',
      element: <Main mode={mode} toggleMode={toggleMode} alert={alert} showAlert={showAlert}/>,
    },
  ])

  return (
    <>
    {/* <RouterProvider router={router} /> */}
    <RouterProvider router={router}>
    <Navbar title="Textutils" About="About Textutils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
    <TextForm  showAlert={showAlert} title="Enter Text to Analyze" mode={mode}/> 
    <About mode={mode}/> 
    </div>
    </RouterProvider>  
  
    </>
  );
}

export default App;
