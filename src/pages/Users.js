import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
const Users = ()=>{
    // const foo = useContext(DataContext)
    const data = useContext(DataContext)
    return (
        <div>
            <h1>Users Page</h1>
            {JSON.stringify(data)}
            <hr />
            <button onClick={()=>data.setDemoState('changed in USERS')}>change text</button>
            <p>{data.demoState}</p>

            <button onClick={()=>data.addUser({id:Math.random(), name:'yo'})}>add user</button>
            <button onClick={()=>data.updateUser({id:1, name:'yo'})}>update user 1</button>
            <button onClick={()=>data.deleteUser(1)}>update user 1</button>
            <button onClick={ data.getUsers}>get Users</button>
            {data.error && <p>{data.error}</p>}
        </div>
    )
}

export default Users