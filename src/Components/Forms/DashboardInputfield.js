import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./DashboardInputfield.css";
import SubmitButton from "../Buttons/SubmitButton";
import axios from "axios";


function DashboardInputfield(){

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [date, setDate] = useState("");
    const [comment, setComment] = useState("");
    const [gebruiker, setGebruiker] = useState("");

    async function sendInfo (data) {

        try {
            await axios.post('http://localhost:8080/dashboardcomment/new_comment', formData)
        } catch (e) {
            console.log("HELAAAAAS")
        }
    }

    const formData = new FormData();

    const onSubmit = (data) => {

        formData.append("date", data.date);
        formData.append("comment", data.comment);
        formData.append("gebruiker", data.gebruiker);

        sendInfo(formData)
        setDate("");
        setComment("");
        setGebruiker("");
        // window.location.reload(true);
    }



    return (
        <div className={"dashboard"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="labelDate">Datum:
                    <input
                        className="inputFieldRegister"
                        type="text"
                        placeholder="Dag + datum (Maandag 1 Juli)"
                        {...register("date")}
                        value={date}
                        onChange={(e)=> setDate(e.target.value)}
                    />
                </label>
                <label className="labelRegister">Ingevuld door:
                    <input  className="inputFieldRegister"
                            type="text"
                            name="gebruiker"
                            placeholder="Gebruiker"
                            {...register("gebruiker")}
                            value={gebruiker}
                            onChange={(e)=> setGebruiker(e.target.value)}
                    />
                </label>
                <textarea className="dashboardfield"
                        placeholder="Type hier je bericht:"
                        {...register("comment")}
                          value={comment}
                          onChange={(e)=> setComment(e.target.value)}
                />

                    <SubmitButton
                        type={"Versturen"}
                    />
            </form>

        </div>
    );
}

export default DashboardInputfield;