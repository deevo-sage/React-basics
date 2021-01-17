import React, { useState } from "react";

const Form = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [vis, setvis] = useState(true);
  return (
    <>
      <button onClick={()=>{
          setvis(!vis)
      }}>{vis ? "hide" : "show"}</button>
      {vis && (
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
      )}
    </>
  );
};
export default Form;
