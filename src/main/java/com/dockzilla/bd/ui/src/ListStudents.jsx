import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from "./DataReducer"

import { getAllCells } from "./Api.js"
import Cell from "./Cell.jsx"
import './Cell.css';
import { ReducerActionRouter } from "./CONST.js"



const ListStudents = () => {
    const { state, dispatch } = useContext(DataContext);

    let [cells, setcells] = useState([]);

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




    return (
        <div className='wrapper'>
            <h2>Список всех студентов</h2>
            <div className="list-students">
                <ul className="cell_list">
                    {cells.map(
                        (iterator) => {
                            return (
                                <Cell
                                    cell={iterator}
                                    key={iterator.username + Math.random()}
                                />
                            );
                        })}
                </ul>
            </div>
        </div >

    )


}

export default ListStudents;