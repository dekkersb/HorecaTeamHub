import React, { useState } from 'react';
import './Register.css'
import { useForm } from 'react-hook-form';
import { NavLink } from "react-router-dom";
/*import axios from 'axios';*/
import SubmitButton from "../Buttons/SubmitButton";
import logo from "../../assets/logo.png";

function Register (){

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [password, setPassword] = useState("");

/*    async function sendInfo (e) {

        console.log(e)

        try {
            await axios.post('http://localhost:8080/', e)

            console.log(e);
        } catch (error) {
            console.log("helaas")
        }

    }*/

    const validatePassword = (value)=> {
        if (password !== value) return false;
    }

    return (


        <div className="registerBox">
            <div className="login-header">
                <img className={"logo"} src={logo} alt="logo"/>
            </div>
            <form onSubmit={handleSubmit({/*sendInfo*/})}>
                <div className="logInAndRegister">
                    <label htmlFor="">Heb je al een account? log dan <NavLink id="loginPageId" className="logInRegister" exact to="/login">hier</NavLink> in..</label>
                </div>
                <label className="labelRegister" htmlFor="e-mail">E-mail:
                    <input  className="inputFieldRegister"
                            type="text"
                            placeholder="➡ type hier uw e-mail adres:"
                            {...register("emailRegistration", {
                                required: true,
                                validate: (value) => value.includes('@'),
                            })}
                    />{errors.emailRegistration && <p className="errorMessage">Het e-mail adres is verplicht en moet een "@" bevatten.</p>}
                </label>
                <label className="labelRegister" htmlFor="name">Voornaam + 1e letter achternaam:
                    <input  className="inputFieldRegister"
                            type="text"
                            placeholder="➡ Jan J.:"
                            {...register("username", {
                                required: true,
                                minLength: 4,
                            })}
                    />{errors.username && <p className="errorMessage">Je naam moet minimaal 4 letters bevatten.</p>}
                </label>
                <label className="labelRegister" htmlFor="password">Wachtwoord:
                    <input  className="inputFieldRegister"
                            type="password"
                            placeholder="➡ type hier uw wachtwoord:"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                    />
                </label>
                <label className="labelRegister" htmlFor="password">Bevestig wachtwoord:
                    <input  className="inputFieldRegister"
                            type="password"
                            placeholder="➡ bevestig hier uw wachtwoord:"
                            {...register("confirmPassword", {
                                required: true,
                                validate: (value => validatePassword(value))
                            })}
                    />{errors.confirmPassword && <p className="errorMessage">De wachtwoorden komen niet overeen 🙁 </p>}
                </label>

                <div className="buttonRegisterPage">
                    <SubmitButton type={"Registreren"}/>
                </div>
            </form>
        </div>

    )

}

export default Register;