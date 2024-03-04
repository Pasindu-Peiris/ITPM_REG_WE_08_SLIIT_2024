import React, { useState } from 'react';
import axios from "axios";

const FormSend = () => {

    const [name, getname] = useState(" ");
    const [age, getAge] = useState(" ");

    const getDataForm = (e) => {
        alert(name + " " + age);
        e.preventDefault();
        
        axios.post("http://localhost:8090/test/add", {name, age}).then(() => {
            alert("OK");
        }).catch((err) => {
            alert("Not")
        })
       
    }


    return (
        <div className='d-block'>

            <h1>Form test</h1>

            <form onSubmit={getDataForm}  >
                <input type="text" onChange={
                    (e) => {
                        getname(e.target.value);

                    }
                } /> <br></br>
                <input type="number" onChange={
                    (e) => {
                        getAge(e.target.value);
                    }
                } /> <br></br>

                <input type="submit" />
            </form>

        </div>
    )
}

export default FormSend;