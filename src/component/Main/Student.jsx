import React from "react";


const Student = (props) => {
    return (
            <div className="Student">
 <div className="student__name">{props.name} → </div>
 
 <div className="student__nik">{props.nik}</div>    
    </div>
    );
}

export default Student;
