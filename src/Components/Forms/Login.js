import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./Login.css";
import { NavLink, Link } from 'react-router-dom';
import SubmitButton from "../Buttons/SubmitButton";


function LogIn (){

    const { handleSubmit, formState: { errors }, register } = useForm();

    function sendInfo (e) {
        console.log(e);
    }


    return (
        <div className="completeRegister">
            <form onSubmit={handleSubmit(sendInfo)}>
{/*                <div className="logInAndRegister">
                    <NavLink exact to="/" id="loginPageIdOne" className="logInRegister">Login</NavLink>
                    <NavLink to="/register" id="registerPageIdOne" className="logInRegister">Registreer</NavLink>
                </div>*/}
                <label className="labelRegister" htmlFor="e-mail">e-mail:
                    <input
                        className="inputFieldRegister"
                        type="text"
                        placeholder="➡ type hier uw e-mail adres:"
                        {...register("e-mailInput")}
                    />
                </label>
                <label className="labelRegister" htmlFor="wachtwoord">wachtwoord:
                    <input  className="inputFieldRegister"
                            type="password"
                            placeholder="➡ type hier uw wachtwoord:"
                            {...register("passwordInput")}
                    />
                </label>
                <div className="buttonRegisterPage">
                    <SubmitButton/>
                </div>
            </form>
        </div>
    )
}

export default LogIn;