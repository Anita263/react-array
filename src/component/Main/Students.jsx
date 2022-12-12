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
            <h1>Одногруппники</h1>
             {students.map(item => {
             return <Student name= {item.name} nik = {item.nik}/> })}
              </div>
    )
}
export default Students;