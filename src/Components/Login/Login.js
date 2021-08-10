import React from 'react';
import { useForm } from 'react-hook-form';
import "./Login.css";
import {NavLink, useHistory} from 'react-router-dom';
import SubmitButton from "../Buttons/SubmitButton";
import logo from "../../assets/logo.png";
import {useAuthContext} from "../../context/AuthContextProvider";
import axios from "axios";

function LogIn (){

    const { handleSubmit, register } = useForm();
    const {login} = useAuthContext();
    const history = useHistory();

    async function sendInfo (data) {
        try {
            const result = await axios.post(`http://localhost:8080/api/v1/authenticate`, data);
            login(result.data.jwt, result)
        } catch (e) {
            console.log("Het inloggen gaat niet echt goed...", e);
        }
    }

    return (
        <div className="loginBox">
            <div className="login-header">
                <img className={"logo"} src={logo} alt="logo"/>
            </div>
            <form onSubmit={handleSubmit(sendInfo)}>

                <label className="labelRegister" htmlFor="e-mail">E-mail:
                    <input
                        className="inputFieldRegister"
                        type="text"
                        placeholder="➡ type hier uw e-mail adres:"
                        {...register("username", {
                            required: true,
                            validate: (value) => value.includes('@'),
                        })}
                    />
                </label>
                <label className="labelRegister" htmlFor="wachtwoord">Wachtwoord:
                    <input  className="inputFieldRegister"
                            type="password"
                            placeholder="➡ type hier uw wachtwoord:"
                            {...register("password", {
                                required: true,
                            })}
                    />
                </label>
                <div className="logInAndRegister">
                    <label htmlFor="">Nog geen account? Klik dan op <NavLink to="/register" id="registerPageIdOne" className="logInRegister">registreren</NavLink></label>

                </div>
                <div className="buttonRegisterPage">
                    <SubmitButton type={"Inloggen"}/>
                </div>
            </form>
        </div>
    )
}

export default LogIn;