import employmentBD from "../DB/EmployementDB.js";
import React, { useState } from 'react';

const Empleabilidad = () => {
    const [trabajos, setTrabajos] = useState([
        'Desarrollador Frontend',
        'Diseñador UX',
        'Analista de datos'
    ]);

    return (
        <div>
            <h2>Oportunidades de Empleo</h2>
            <ul>
                {trabajos.map((trabajo, index) => <li key={index}>{trabajo}</li>)}
            </ul>
        </div>
    );
}

export default Empleabilidad;
