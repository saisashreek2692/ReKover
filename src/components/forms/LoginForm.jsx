import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginFields } from "../../constants/formFields";

import InputLog from "./InputLog";

import FormAction from "./FormAction";

import FormExtra from "./FormExtra";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function LoginForm() {
  const [loginState, setLoginState] = useState(fieldsState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    authenticateUser();    
  }

  //Handle Login API Integration here
  const authenticateUser = () =>{
    navigate('/dashboard/');
  }

  return (
    <form className="mt-8 space-y-6">
      <div className="-space-y-px">
        {fields.map((field) => (
          <InputLog
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      
      <FormExtra/>
      <FormAction handleSubmit={handleSubmit} text="Login"/>

    </form>
  );
}
