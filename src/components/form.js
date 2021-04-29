import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input className="form__input" type="text" name="city" placeholder="Город"/>
        <input className="form__input" type="text" name="country" placeholder="Страна"/>
        <button>Найти погоду</button>
    </form>
)
export default Form;