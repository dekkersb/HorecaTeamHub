import React from 'react';
import { useForm } from 'react-hook-form';
import "./DashboardInputfield.css";
import SubmitButton from "../Buttons/SubmitButton";
import axios from "axios";


function DashboardInputfield(){

    const { handleSubmit, formState: { errors }, register } = useForm();

    async function sendInfo (data) {

        try {
            await axios.post('http://localhost:8080/dashboardcomment/new_comment', formData)
        } catch (e) {
            console.log("HELAAAAAS")
        }
    }

    const formData = new FormData();

    const onSubmit = (data) => {

   console.log("dit is de datum:", data.date)
        formData.append("date", data.date)
        formData.append("comment", data.comment)
        formData.append("gebruiker", data.gebruiker)

        sendInfo(formData)
    }

    return (
        <div className={"dashboard"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="labelDate">Datum:
                    <input
                        className="inputFieldRegister"
                        type="text"
                        placeholder="Dag + datum"
                        {...register("date")}
                    />
                </label>
                <label className="labelRegister">Ingevuld door:
                    <input  className="inputFieldRegister"
                            type="text"
                            name="gebruiker"
                            placeholder="Gebruiker"
                            {...register("gebruiker")}
                    />
                </label>
                <textarea className="dashboardfield"
                        placeholder="Type hier je bericht:"
                        {...register("comment")}
                />

                    <SubmitButton type={"Versturen"}/>

            </form>

        </div>
    );
}

export default DashboardInputfield;