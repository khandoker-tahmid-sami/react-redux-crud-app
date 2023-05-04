import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';
import { deleteUser } from '../features/userFeatures/userSlice';

const Home = () => {
    const users = useSelector(state => state.users)
    // console.log(users);
    const dispatch = useDispatch()
    const handleDelete = (id) =>{
        console.log(id)
        dispatch(deleteUser({id:id}))
    }

  return (
    <div className='container-fluid'>
        <h2 className='m-3 text-capitalize text-center text-primary'>Crud Operation using react and redux</h2>
        <Link to="/create" className='btn btn-warning my-3 '>Create +</Link>
        <h3 className='text-center my-3'>List of Users</h3>
        <table className='table text-center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user=>{
                    return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/update/${user.id}`} className='btn btn-primary m-1'>Edit</Link>
                            <button onClick={() => handleDelete(user.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Home