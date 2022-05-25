import React, { useState, useEffect, useRef, useContext } from 'react';
import { DataContext } from "./DataReducer"

import { getAllCells, recUser, deleteAllInBD } from "./Api.js"
import Cell from "./Cell.jsx"

import { ReducerActionRouter } from "./CONST.js"

const Realization = () => {
    const { state, dispatch } = useContext(DataContext);

    let [cells, setcells] = useState([]);
    let [info, setinfo] = useState("Realization");
    let formRef = useRef(null);
    let nameRef = useRef(null);
    let cellsRef = useRef(null);
    const priorityRef = useRef("NORMAL");
    const signRef = useRef("+");
    useEffect(() => {
        getAllCells()
            .then(data => {
                console.log(data)
                dispatch({
                    type: ReducerActionRouter.GETALLCELLS,
                    payload: data
                })

            })
    }, []);

    useEffect(() => {
        setcells(state.result)
    }, [state.result]);

    useEffect(() => {
        setinfo(state.status.info)
    }, [state.status]);

    const updateAll = (evt) => {
        if (evt) {
            evt.preventDefault();
        }
        getAllCells()
            .then(data => {
                console.log(data)
                dispatch({
                    type: ReducerActionRouter.GETALLCELLS,
                    payload: data
                })

            })
    }

    const sendCells = (evt) => {
        evt.preventDefault();
        console.log("SendCells ")
        const requestList = Array.from(cellsRef.current.value.split(","));

        const userRequest = {
            sign: signRef.current.value,
            name: nameRef.current.value,
            requestList: requestList,
            priority: priorityRef.current.value
        }

        recUser(userRequest).then(
            (data) => {
                if (data.info) {
                    dispatch({
                        type: ReducerActionRouter.ERROR,
                        payload: data
                    })
                }
                else {
                    updateAll()
                }
            }
        )
    }

    const _handleReset = () => {
        formRef = null
    }

    const clearH2Bd = () => {
        deleteAllInBD().then(data => {
            dispatch({
                type: ReducerActionRouter.GETALLCELLS,
                payload: data
            })

        })
    }
    return (
        <div className="realization">
            <form className="realization-form" ref={formRef}>
                <fieldset className="ad-form__element">
                    <label className="ad-form__label" htmlFor="sign">Знак</label>
                    <select id="sign" name="sign" ref={signRef}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                </fieldset>
                <fieldset className="realization-form__element">
                    <label className="realization-form__label" htmlFor="users">Имя</label>
                    <input id="users" name="users" type="text" required ref={nameRef} />
                </fieldset>
                <fieldset className="realization-form__element">
                    <label className="realization-form__label" htmlFor="cells">Места через запятую</label>
                    <input id="cells" name="cells" type="text" required ref={cellsRef} />
                </fieldset>
                <fieldset className="ad-form__element">
                    <label className="ad-form__label" htmlFor="priority">Приоритет</label>
                    <select id="priority" name="priority" ref={priorityRef}>
                        <option value="NORMAL">NORMAL</option>
                        <option value="LOWPRIO">LOWPRIO</option>
                    </select>
                </fieldset>

                <fieldset className="realization-form__element realization-form__element--submit">
                    <button className="ad-form__submit" type="submit" onClick={sendCells}>Отправить</button>
                    или <button className="ad-form__reset" type="reset" onClick={_handleReset}>Очистить форму</button>
                </fieldset>
            </form>

            <h1>{info}</h1>
            <button className="update_button" onClick={updateAll}> Обновить  </button>
            <ul className="cell_list">
                {cells.map(
                    (iterator) => {
                        return (
                            <Cell
                                cell={iterator}
                                key={Date.now() + iterator.name + Math.random()}
                            />
                        );
                    })}
            </ul>

            <button className="ad-form__clear" type="submit" onClick={clearH2Bd}>Удалить значения из H2 БД</button>

        </div>

    )
}


export default Realization;