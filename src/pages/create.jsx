import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../features/userFeatures/userSlice';
import { useDispatch, useSelector } from 'react-redux';
const Create = () => {
    const [user, setUser] = useState({name:"", email:""})
    const {name, email} = user
    //get the data from redux store
    const users = useSelector(state => state.users)
    //navigating the user
    const navigate = useNavigate();
    //dispatcing an action
    const dispatch = useDispatch()

    const handleChange = ({target:input}) =>{
        setUser({...user, [input.name]: input.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addUser({id: users.length +1, name: name, email: email}))
        // console.log("form submitted", user)
        setUser({name:"", email:""})
        navigate("/")
    }
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
        <div className='w-50 rounded bg-success text-white p-5'>
        <h2 className='text-center'>Create User</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                type="text" 
                name='name' 
                className='form-control mb-2' 
                placeholder='name...' 
                value={name}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                name='email'
                 className='form-control mb-3' 
                 placeholder='email...' 
                 value={email}
                 onChange={handleChange} />

            </div>
            <button className='btn btn-light'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Create