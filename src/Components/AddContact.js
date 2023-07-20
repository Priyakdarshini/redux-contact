import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Create } from '../redux/action';
import { toast }from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
  
  const AddContact = () => {
    
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [number , setNumber] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const select = useSelector((state) => state);

    const handleSubmit = (e) =>{
       e.preventDefault();

       const checkEmail= select.find(
        (contact)=>contact.email === email && contact
       )
       const checkNumber= select.find(
        (contact)=>contact.number === parseInt(number)
       )
    
       if( !email|| !number || !name){
        return  toast.warning("please fill in all field !");
       }
    
    
       if(checkEmail){
        return toast.error("This email is already existing")
       }
       
       if(checkNumber){
        return toast.error("This Number is already existing")
       }
    
      const data = {
        id:(select.length)? select[select.length-1].id+1: 0,
        name,
        email,
        number,
      }
    dispatch(Create(data));
    navigate("/");

    }

    return (
      <div className='text-center '>
      <div  className='d-flex justify-content-center mt-3  w-auto m-auto '>
        <form  className='shadow colour m-2 p-5 ' onSubmit={handleSubmit} >
         
            <div className="col-lg-12 col-sm-12 m-2 p-2 m-auto">
                <input
                type="text"
                placeholder='Name'
                className="form-control"
                value={name}
                onChange = {(e) => {setName(e.target.value)}}/>
            </div>
            <div className="col-lg-12 col-sm-12 m-2 p-2 m-auto">
                <input
                type="text"
                placeholder='Email'
                className="form-control"
                value={email}
                onChange = {(e) => {setEmail(e.target.value)}}/>
            </div >
            <div className="col-lg-12 col-sm-12 m-2 p-2 m-auto">
                <input
                type="text"
                placeholder='Phone Number'
                className="form-control"
                value={number}
                onChange = {(e) => {setNumber(e.target.value)}}/>
            </div>
            <div className="form-group mt-4 m-auto">
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block btn-dark"
              />
            </div>
        </form>
      </div>
      </div>
    )
  }
  
  export default AddContact