import logo from './logo.svg';
import './App.css';
import Main from "./Main.jsx"
import { AppRoute } from "./CONST.js"
import AddStudent from "./AddStudent.jsx"
import DeleteStudent from "./DeleteStudent.jsx"
import ListStudents from "./ListStudents.jsx"
 import TechTask from "./TechTask.jsx"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
 import React, { useReducer } from 'react';

import { DataContext, initialState, dataReducer } from "./DataReducer"

function App() {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ dispatch, state }}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="/"
        >
          <h1>
           Фронт 
          </h1>
        </a>
        <a
          className="App-link"
          href="https://github.com/Egor18032019/testDockZilla2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Репозиторий
        </a>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoute.ROOT} element={<Main />} />
            <Route path={AppRoute.ADD} element={<AddStudent />} />
            <Route path={AppRoute.DELETE} element={<DeleteStudent />} />
            <Route path={AppRoute.LIST} element={<ListStudents />} />
             <Route path={AppRoute.TechTask} element={<TechTask />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div >
    </DataContext.Provider>
  );
}

export default App;
