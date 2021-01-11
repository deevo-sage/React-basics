import React,{useState} from "react"

const Form=()=>{
 const [email, setemail] = useState("");
 const [password, setpassword] = useState("");
 const [visibility, setvisibility] = useState(true);
 
 return (
   <>
     <button
       onClick={() => {
         setvisibility(!visibility);
       }}
     >
       {visibility ? "show the detail form" : "hide the detail form"}
       
     </button>
   { !visibility && <div>
       <input
         placeholder="email"
         value={email}
         onChange={(e) => {
           setemail(e.target.value);
         }}
       ></input>
       {console.log({ email, password })}
       <input
         placeholder="password"
         value={password}
         onChange={(e) => {
           setpassword(e.target.value);
         }}
       ></input>
     </div>}
   </>
 );
}
export default Form;