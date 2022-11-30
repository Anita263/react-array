import React from "react";


const Student = (props) => {
    return (
            <div className="Student">
 <div className="student__name">Имя{props.name}</div>
 <div className="student__nik">Ник{props.nik}</div>    
    </div>
    );
}

export default Student;
