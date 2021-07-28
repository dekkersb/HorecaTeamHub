import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import SubmitButton from "../Buttons/SubmitButton";

function RecipeInputfield() {

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [steps, setSteps] = useState("");
    const [gluten, setGluten] = useState(false);
    const [lactose, setLactose] = useState(false);
    const [noten, setNoten] = useState(false);

    async function sendInfo (data) {

        try {
            await axios.post('http://localhost:8080/recepten/new_recipe', formData)
        } catch (e) {
            console.log("Er is iets misgegaan, recept kan niet worden toegevoegd probeer opnieuw.")
        }
    }

    const formData = new FormData();

    const onSubmit = (data) => {

        formData.append("name", data.name);
        formData.append("type", data.type);
        formData.append("quantity", data.quantity);
        formData.append("steps", data.steps);
        formData.append("gluten", data.gluten);
        formData.append("lactose", data.lactose);
        formData.append("noten", data.noten);

        sendInfo(formData)

        setName("");
        setType("");
        setQuantity("");
        setSteps("");
        setGluten(false);
        setLactose(false);
        setNoten(false);


        console.log(data)
    }

    return (
        <div className={"dashboard"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="labelDate">Receptnaam:
                    <input
                        className="inputFieldRegister"
                        type="text"
                        {...register("name")}
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    />
                </label>
                <label className="labelRegister">Type:
                    <select  className="inputFieldRegister" value={type} {...register("type")} onChange={(e)=> setType(e.target.value)}>
                    <option value="dressings" > Dressings </option>
                        <option value="Soepen" > Soepen </option>
                        <option  value="Sauzen"  > Sauzen </option>
                        <option  value="Desserts" > Desserts </option>
                        <option value="Componenten" > Componenten </option>
                        <option value="Garnituren" > Garnituren </option>
                        <option value="Crèmes" > Crèmes </option>
                        <option value="Curry's" > Curry's </option>
                    </select>

                </label>
                <label className="labelRegister"> Hoeveelheid:
                <input className="inputFieldRegister"
                          {...register("quantity")}
                          value={quantity}
                          onChange={(e)=> setQuantity(e.target.value)}
                />
                </label>
                <label className="labelRegister"> Stappen:
                    <textarea className="dashboardfield"
                           {...register("steps")}
                           value={steps}
                           onChange={(e)=> setSteps(e.target.value)}
                    />
                </label>
          <ul>
               <li> Gluten:
                   <input className="checkboxAllergieen"
                           type="checkbox"
                              {...register("gluten")}
                              value={gluten}
                              onChange={(e)=> setGluten(e.target.value)}
                    />
               </li>
              <li> Lactose:
                  <input className="checkboxAllergieen"
                         type="checkbox"
                         {...register("lactose")}
                         value={lactose}
                         onChange={(e)=> setLactose(e.target.value)}
                  />
              </li>
              <li> Noten:
                  <input className="checkboxAllergieen"
                         type="checkbox"
                         {...register("noten")}
                         value={noten}
                         onChange={(e)=> setNoten(e.target.value)}
                  />
              </li>
          </ul>

                <SubmitButton
                    type={"Versturen"}
                />
            </form>

        </div>
    );
}
export default RecipeInputfield;