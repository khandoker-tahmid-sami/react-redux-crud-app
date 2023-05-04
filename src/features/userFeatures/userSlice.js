import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../data";

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) =>{
            state.push(action.payload)
        },
        updateUserData: (state, action) =>{
            const {id, name, email } = action.payload
            const updatingUser = state.find(user => user.id == id)
            if(updatingUser){
                updatingUser.name = name
                updatingUser.email = email
            }
        },
        deleteUser: (state, action) =>{
            const {id} = action.payload
            const updatingUser = state.find(user => user.id == id)
            console.log(updatingUser)
            if(updatingUser){
                return state.filter(user => user.id !== id)
            }
        }
    }
})

export const {addUser, updateUserData, deleteUser} = userSlice.actions
export default userSlice.reducer