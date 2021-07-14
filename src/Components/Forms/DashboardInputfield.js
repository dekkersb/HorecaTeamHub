import React from 'react';
import { useForm } from 'react-hook-form';
import "./DashboardInputfield.css";
import SubmitButton from "../Buttons/SubmitButton";


function DashboardInputfield(){

    const { handleSubmit, formState: { errors }, register } = useForm();

    function sendInfo (e) {
        console.log(e);
    }

    return (
        <div className={"dashboard"}>
            <form onSubmit={handleSubmit(sendInfo)}>
                <label className="labelDate" htmlFor="e-mail">Datum:
                    <input
                        className="inputFieldRegister"
                        type="date"
                        placeholder="Datum"
                        {...register("date")}
                    />
                </label>
                <label className="labelRegister" htmlFor="wachtwoord">Ingevuld door:
                    <input  className="inputFieldRegister"
                            type="user"
                            placeholder="Gebruiker"
                            {...register("username")}
                    />
                </label>
                <textarea className="dashboardfield"
                        type="area"
                        placeholder="Type hier je bericht:"
                        {...register("dashboardmessage")}
                />

                    <SubmitButton type={"Versturen"}/>

            </form>

        </div>
    );
}

export default DashboardInputfield;