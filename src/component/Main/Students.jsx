import React from "react";
import Student from "./Student";


const students = [
    {
       name: "Анна",
       nik: "@anna",
    },
    {
       name: "Елена Янечек",
       nik: "@elena",
    },
    {
       name: "Людмила",
       nik: "@apan",
    },
    {
       name: "Азат",
       nik: "@eture",
    },
    {
       name: "Елена Григорьева",
       nik: "@eCornega",
    },
    ]
   
const Students = () => {
    return (
        <div className="Students">
            <ul>Одногруппники</ul>
             { students.map(item => {
             return <li>{item.name}: {item.nik}.</li>
            }) }
              </div>
    );
}
export default Students;