import employmentDB from "../DB/EmployementDB.js";
import React, { useState, useEffect } from 'react';

const Empleabilidad = () => {
    const [trabajos, setTrabajos] = useState([
        'Desarrollador Frontend',
        'Diseñador UX',
        'Analista de datos'
    ]);
    const [employment, setEmployment] = useState();

    useEffect(()=>{
        setEmployment(employmentDB());
    },[])
    return (
        <div className="p-6 bg-secondary-100 rounded-md">
            <h2 className="text-xl text-gray-800 border-b-2 border-gray-600 mb-4">Oportunidades de Empleo</h2>
            <ul className="list-decimal pl-5">
                    { employment &&
                {employment?.map((trabajo) => (
                    
                ))}}
            </ul>
      </div>
    
    );
}

export default Empleabilidad;
