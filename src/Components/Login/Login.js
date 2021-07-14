import React from 'react';
import { useForm } from 'react-hook-form';
import "./Login.css";
import { NavLink } from 'react-router-dom';
import SubmitButton from "../Buttons/SubmitButton";
import logo from "../../assets/logo.png";



function LogIn (){

    const { handleSubmit, formState: { errors }, register } = useForm();

/*    function sendInfo (e) {
        console.log(e);
    }*/


    return (
        <div className="loginBox">
            <div className="login-header">
                <img className={"logo"} src={logo} alt="logo"/>
            </div>
            <form onSubmit={handleSubmit({/*sendInfo*/})}>

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
                <div className="logInAndRegister">
                    <label htmlFor="">Nog geen account? Klik dan op <NavLink to="/register" id="registerPageIdOne" className="logInRegister">registreren</NavLink></label>

                </div>
                <div className="buttonRegisterPage">
                    <NavLink exact to="/dashboard">
                    <SubmitButton type={"Inloggen"}/>
                </NavLink>
                </div>
            </form>
        </div>
    )
}

export default LogIn;