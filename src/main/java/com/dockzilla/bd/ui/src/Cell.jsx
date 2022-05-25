

function Cell(props) {
    const {cell } = props;
    const {  username,lastname,patronymic,studygroup,dateofbrith } = cell;
    return (
        <li className="cell">
            <div className="cell_name">{username} </div>
            <div className="cell_name">{lastname} </div>
            <div className="cell_name">{patronymic} </div>
            <div className="cell_name">{studygroup} </div>
            <div className="cell_name">{dateofbrith} </div>
        </li>
    )
};


export default Cell;