 import employmentBD from "../DB/EmployementDB.js";
import React, { useState } from 'react';

const Empleabilidad = () => {
    const [trabajos, setTrabajos] = useState([
        'Desarrollador Frontend',
        'Diseñador UX',
        'Analista de datos'
    ]);

    return (
        <div className="p-6 bg-graysecondary-xl text-gray-800 border-b-2 border-gray-600 mb-4">Oportunidades de Empleo</h2>
            <ul className="list-decimal pl-5">
                {trabajos.map((trabajo, index) => (
                    <li key={index} className="py-2 text-gray-700">
                        {trabajo}
                    </li>
                ))}
            </ul>
      </div>
    
    );
}

export default Empleabilidad;
