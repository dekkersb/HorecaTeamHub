import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./Login.css";
import { NavLink, Link } from 'react-router-dom';
import SubmitButton from "../Buttons/SubmitButton";
import logo from "../../assets/logo.png";


function LogIn (){

    const { handleSubmit, formState: { errors }, register } = useForm();

/*    function sendInfo (e) {
        console.log(e);
    }*/


    return (
        <div className="completeRegister">
            <div className="login-header">
                <img className={"logo"} src={logo} alt="logo"/>
            </div>
            <form onSubmit={handleSubmit({/*sendInfo*/})}>
                <div className="logInAndRegister">
                    <NavLink exact to="/" id="loginPageIdOne" className="logInRegister">Login</NavLink>
                    <NavLink to="/register" id="registerPageIdOne" className="logInRegister">Registreer</NavLink>
                </div>
                <label className="labelRegister" htmlFor="e-mail">E-mail:
                    <input
                        className="inputFieldRegister"
                        type="text"
                        placeholder="➡ type hier uw e-mail adres:"
                        {...register("emailInput", {
                            required: true,
                            validate: (value) => value.includes('@'),
                        })}
                    /> {errors.emailInput && <p className="errorMessage">Het e-mail adres is verplicht en moet een "@" bevatten.</p>}
                </label>
                <label className="labelRegister" htmlFor="wachtwoord">Wachtwoord:
                    <input  className="inputFieldRegister"
                            type="password"
                            placeholder="➡ type hier uw wachtwoord:"
                            {...register("passwordInput", {
                                required: true,
                                minLength: 4
                            })}
                    /> {errors.passwordInput && <p className="errorMessage">Je wachtwoord moet minimaal 4 letters bevatten.</p>}
                </label>
                <div className="buttonRegisterPage">
                    <SubmitButton/>
                </div>
            </form>
        </div>
    )
}

export default LogIn;