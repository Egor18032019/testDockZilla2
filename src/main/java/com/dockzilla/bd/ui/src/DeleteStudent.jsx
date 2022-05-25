import React, { useState, useRef } from 'react';

import { deleteStudents } from "./Api.js"


const DeleteStudent = () => {
    let [info, setinfo] = useState(["Ожидание"]);
    let formRef = useRef(null);
    let nameRef = useRef(null);

    const deleteStudent = (evt) => {
        evt.preventDefault();
 
        const userRequest = {
            id: nameRef.current.value,
        }
        console.log(userRequest)
        deleteStudents(userRequest)
            .then(data => {
                 setinfo(data.answer)
            })

    }

    const _handleReset = () => {
        formRef = null
    }

    return (
        <div className="realization">
            <form className="realization-form" ref={formRef}>
                <fieldset className="realization-form__element">
                    <label className="realization-form__label" htmlFor="users">ID студента: </label>
                    <input id="users" name="users" type="text" required ref={nameRef} />
                </fieldset>
                <fieldset className="realization-form__element realization-form__element--submit">
                    <button className="ad-form__submit" type="submit" onClick={deleteStudent}>Отправить</button>
                    или
                    <button className="ad-form__reset" type="reset" onClick={_handleReset}>Очистить форму</button>
                </fieldset>
            </form>
            <h1>{info}</h1>
        </div>
    )
}

export default DeleteStudent;