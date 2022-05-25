import React, { useState, useRef } from 'react';

import { recStudent } from "./Api.js"


const AddStudent = () => {
    let [info, setinfo] = useState( "Ожидание" );
    let formRef = useRef(null);
    let usernameRef = useRef(null);
    let lastnameRef = useRef(null);
    let patronymicRef = useRef(null);
    let studygroupRef = useRef(null);
    let dateofbrithRef = useRef(null);

    const addStudent = (evt) => {
        evt.preventDefault();
        const userRequest = {
            username: usernameRef.current.value,
            lastname: lastnameRef.current.value,
            patronymic: patronymicRef.current.value,
            studygroup: studygroupRef.current.value,
            dateofbrith: dateofbrithRef.current.value,
        }
        recStudent(userRequest)
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
                    <label className="realization-form__label" htmlFor="users">Имя студента </label>
                    <input id="username" name="username" type="text" required ref={usernameRef} />
                </fieldset>
                <fieldset className="realization-form__element">
                    <label className="realization-form__label" htmlFor="users">Очество студента </label>
                    <input id="patronymic" name="patronymic" type="text" required ref={patronymicRef} />
                </fieldset>
                <fieldset className="realization-form__element">
                    <label className="realization-form__label" htmlFor="users">Фамилия студента </label>
                    <input id="lastname" name="lastname" type="text" required ref={lastnameRef} />
                </fieldset>
                <fieldset className="realization-form__element">
                    <label className="realization-form__label" htmlFor="users">Группа студента </label>
                    <input id="studygroup" name="studygroup" type="text" required ref={studygroupRef} />
                </fieldset>
                <fieldset className="realization-form__element">
                    <label className="realization-form__label" htmlFor="users">День рождения: </label>
                    <input id="dateofbrith" name="dateofbrith" type="text" required ref={dateofbrithRef} />
                    <span> В формате год-месяц-день(2021-09-09)</span>
                </fieldset>
                <fieldset className="realization-form__element realization-form__element--submit">
                    <button className="ad-form__submit" type="submit" onClick={addStudent}>Отправить</button>
                    или
                    <button className="ad-form__reset" type="reset" onClick={_handleReset}>Очистить форму</button>
                </fieldset>
            </form>
            <h1>{info}</h1>
        </div>
    )
}

export default AddStudent;