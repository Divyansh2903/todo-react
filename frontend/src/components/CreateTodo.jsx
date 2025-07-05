import { useState } from "react"

export function CreateTodo(){
    //THis is one way of doing it but it cause lots of re renders
    const  [title,setTitle]=useState("")
    const  [description,setDescription]=useState("")
    return (
        <div>
            <input style ={{
                padding:10,
                margin:10
            }} type="text"  placeholder="Title" onChange={(e)=>{
                setTitle(e.target.value) //e.target is the input dom element and .value is the value which is same as dom.getElement....

            }}></input> <br/>
            <input style ={{
                padding:10,
                margin:10
            }} type="text"  placeholder="Description" onChange={(e)=>{
                setDescription(e.target.value)
            }}></input><br/>
            <button style ={{
                padding:10,
                margin:10
            }} onClick={()=>{
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body:JSON.stringify({ //THis can be easily written using axios
                        title:title,
                        description:description,
                    }),
                    headers:{
                        "Content-type":"application/json"
                    }
                })
            }} >Add a Todo</button>
        </div>
    )
}