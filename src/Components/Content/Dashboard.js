import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, Link } from 'react-router-dom';
import "./Dashboard.css";


function Dashboard(){

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
                        type="text"
                        placeholder="Datum"
                        {...register("date")}
                    />
                </label>
                <label className="labelRegister" htmlFor="wachtwoord">Ingevuld door:
                    <input  className="inputFieldRegister"
                            type="text"
                            placeholder="User"
                            {...register("username")}
                    />
                </label>
                <textarea className="dashboardfield"
                        type="area"
                        placeholder="Type hier je bericht:"
                        {...register("dashboardmessage")}
                />

                    <button className="registerButton">Verzenden</button>

            </form>

        </div>
    );
}

export default Dashboard;