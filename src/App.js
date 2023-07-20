import{ BrowserRouter , Route , Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
         <ToastContainer/>
      <BrowserRouter>
       <Routes>
     
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/add' element = {<AddContact/>}/>
          <Route path = '/edit/:id' element = {<EditContact/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
