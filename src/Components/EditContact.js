import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Edit } from "../redux/action";
import 'react-toastify/dist/ReactToastify.css'

const EditContact = () => {
   const { id } = useParams();
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [number, setNumber] = useState("");

   const select = useSelector((state) => state);

   console.log("select", select)

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const currentContact = select.find(
      (contact) => contact.id === parseInt(id)
   );

   useEffect(() => {
      if (currentContact) {
         setName(currentContact.name);
         setEmail(currentContact.email);
         setNumber(currentContact.number);
      }
   }, [currentContact]);

   const handleSubmit = (e) => {
      e.preventDefault();

      const checkEmail = select.find(
         (contact) => contact.id !== parseInt(id) && contact.email === email
      )
      const checkNumber = select.find(
         (contact) => contact.id !== parseInt(id) && contact.number === parseInt(number)
      )

      if (!email || !number || !name) {
         return toast.warning("please fill in all field !");
      }


      if (checkEmail) {
         return toast.error("This email is already existing")
      }

      if (checkNumber) {
         return toast.error("This Number is already existing")
      }


      const data = {
         id: parseInt(id),
         name,
         email,
         number
      }

      dispatch(Edit(data));
      toast.success("Student updated succesfully !!");
      navigate("/");
   }

   return (
      <div className="container">
         {currentContact ? (
            <>
               <h1 className="text-center">Edit Student {id}</h1>
               <div className="row">
                  <div className="d-flex justify-content-center mt-3  w-auto m-auto">

                     <form className='shadow colour m-2 p-5 ' onSubmit={handleSubmit}>

                        <div className="col-lg-12 col-sm-12 m-2 p-2 m-auto">
                           <input
                              type="text"
                              placeholder='Name'
                              className="form-control"
                              value={name}
                              onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className="col-lg-12 col-sm-12 m-2 p-2 m-auto">
                           <input
                              type="text"
                              placeholder='Email'
                              className="form-control"
                              value={email}
                              onChange={(e) => { setEmail(e.target.value) }} />
                        </div >
                        <div className="col-lg-12 col-sm-12 m-2 p-2 m-auto">
                           <input
                              type="text"
                              placeholder='Phone Number'
                              className="form-control"
                              value={number}
                              onChange={(e) => { setNumber(e.target.value) }} />
                        </div>
                        <div className="form-group mt-4">
                           <input
                              type="submit"
                              value="Update"
                              className="btn btn-dark"
                           />
                           <Link to="/" className="btn btn-danger ms-3">
                              Cancel
                           </Link>
                        </div>
                     </form>
                  </div>
               </div>
            </>
         ) : (
            <h1 className="display-3 my-5 text-center">
               Studentcontact with id {id} not exists
            </h1>
         )}
      </div>
   );
};

export default EditContact;