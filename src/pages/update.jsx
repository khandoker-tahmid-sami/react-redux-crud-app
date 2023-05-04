import React, {useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { updateUserData } from '../features/userFeatures/userSlice'
const Update = () => {
    const {id} = useParams();
    const users = useSelector(state => state.users)
    const existingUser = users.filter(user => user.id == id);
    console.log(existingUser)
    const {name, email} = existingUser[0];
    const [updateUser, setUpdateUser] = useState({updateName:name, updateEmail: email})
    const {updateName, updateEmail} = updateUser
    console.log(updateUser)
    const dispatch = useDispatch()
    // console.log(updateUser)
    const navigate = useNavigate();
    const handleChange = ({target:input}) =>{
        setUpdateUser({...updateUser, [input.name]: input.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateUserData({
            id: id,
            name: updateName,
            email: updateEmail
        }))

        navigate("/")
    }
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
    <div className='w-50 rounded bg-success text-white p-5'>
        <h2 className='text-center'>Update User</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                type="text" 
                name='updateName' 
                className='form-control mb-2' 
                placeholder='name...'
                value={updateName}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                name='updateEmail'
                className='form-control mb-3' 
                placeholder='email...' 
                value={updateEmail} 
                onChange={handleChange}/>

            </div>
            <button className='btn btn-light'>Update</button>
        </form>
    </div>
</div>

  )
}

export default Update