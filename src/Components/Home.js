import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {  Delete } from '../redux/action';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import image from './Images/pencil.png';
import image1 from './Images/trash.png'


const Home = () => {

    const selector = useSelector((state) => state);
    const dispatch = useDispatch();

    const deleteContact = (id)=>{
        console.log(id)
        dispatch(Delete(id));
        toast.success("contact deleted sucessfully !");
      };

    console.log(selector, "selector")
    return (
        <div className='w-auto colorr'>
            <div>
                <Link to="/add" className="btn btn-block btn-dark mt-5 mb-5">Add Contact</Link>
            </div>
            <table className="table shadow color">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Number</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selector.map((contact, id) => {
                            return (
                                <tr key={id}>
                                    <td>{contact.id + 1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.number}</td>
                                    <td>
                                        <Link to={`/edit/${contact.id}`} className='me-5'>
                                        <img src={image} style={{ height: 20, width: 20 }}/>
                                        </Link>
                                        <button onClick={() => deleteContact(contact.id)} className="border-0 bg-transparent" type='button'>
                                        <img src={image1} style={{ height: 20, width: 20 }}/>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home