import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios';

function GetUserList () {

    const[userList,setUserList]=useState([]);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setUserList(response.data));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
       
    const deleteuser =(id)=>{
        axios.put(`https://jsonplaceholder.typicode.com/posts/1`,{
            method :'DELETE'
        }).then((res)=>{
            console.log(res)
        })
    }
  return (
    <div>
        <h3>GetUserList By Api</h3>

        {
            userList.map((item,index)=>{
               return <ul>
                    <li>{item.title}</li>
                    <li>{item.body}</li>
                    <li><button onClick={()=>deleteuser(item.id)}>Delete</button></li>
                </ul>
            })
        }
        </div>
  )
}

export default GetUserList