import { AppRoute } from "./CONST.js"
import { Link } from "react-router-dom";

function Toolbar() {

    return (

        <div className="toolbar">

            <Link className="toolbar-link" to={AppRoute.ADD}>
                <h2>- Добавить студента </h2>
            </Link>
            <Link className="toolbar-link" to={AppRoute.DELETE}>
                <h2>- Удалить студента </h2>
            </Link>  
             <Link className="toolbar-link" to={AppRoute.LIST}>
                <h2>- Список студентов </h2>
            </Link>
            <Link className="toolbar-link" to={AppRoute.TECHTASK}>
                <h2>- Тех. задание </h2>
            </Link>


        </div>


    );
}

export default Toolbar;