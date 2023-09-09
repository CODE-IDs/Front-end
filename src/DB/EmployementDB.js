/**
 * Base de datos de Empleo
 * import employmentDB from "../DB/EmployementDB.js";
 * 
 * Formato de item: 
 *  {
 *    id: number, 
 *    title: string, 
 *    company: string, 
 *    salary: number, 
 *    description: string, 
 *    requirements: string[], 
 *    location: string
 *  }
 */
export default function employmentDB() {
  /*  const apiURL = 'apiDeAliado.com/vacantes'; 
      se haria fetch a la api y se muestra info*/

  const OpenPositions = [
    {
      id: 1,
      title: "Representante de Ventas",
      company: "Comercio Avenida",
      salary: 2500000,
      description: "Estamos en búsqueda de un Representante de ventas motivado para unirse a nuestro equipo.",
      requirements: ["Experiencia en ventas", "Habilidad de comunicación", "Orientación al cliente"],
      location: "Belén, Medellín"
    },
    {
      id: 2,
      title: "Cajero",
      company: "Banco $XYZ",
      salary: 1800000,
      description: "Buscamos un cajero responsable y organizado para trabajar en nuestros puntos de servicio.",
      requirements: ["Experiencia en manejo de caja", "Atención al detalle", "Puntualidad"],
      location: "Laureles, Medellín"
    },
    {
      id: 3,
      title: "Representante de Hotel",
      company: "Hotel Elegancia",
      salary: 2000000,
      description: "Nuestro hotel necesita una gerente amable y proactiva para atender a nuestros accionistas.",
      requirements: ["Experiencia en gestion de hotel", "Buenas habilidades de comunicación", "Conociminto de idiomas"],
      "location": "Envigado, Medellín"
    },
    {
      id: 4,
      title: "Mesero",
      company: "Restaurante Sabor Latino",
      salary: 1900000,
      description: "Estamos contratando meseros entusiastas para unirse a nuestro equipo de restaurante.",
     requirements: ["Experiencia como mesero", "Buena presentación", "Atención al cliente"],
      location: "Robledo, Medellín"
    },
    {
      id: 5,
      title: "Mecánico Automotriz",
      company: "Taller Automotriz Rápido",
      salary: 2800000,
      description: "Se necesita un mecánico automotriz con experiencia para nuestro taller.",
      "requirements": ["Experiencia en reparación de vehículos", "Conocimientos técnicos", "Herramientas propia"],      "location": "Manrique, Medellín"   },
    {
      id: 6,
      title: "Enfermera/o",
      company: "Clínica Los Pinos",
      salary: 3200000,
      description: "Estamos en búsqueda de un/a enfermera/o comprometida para trabajar en nuestra clínica.",
      requirements: ["Licencia de enfermería", "Cuidado compasivo", "Conocimientos médicos"],
      location: "San Javier, Medellín"
    },
    {
      id: 7,
      title: "Conductor profesional",
      company: "Velo Rápido",
      salary: 2000000,
      description: "Buscamos choferes responsables y con buena disposición para trabajar en nuestra flota de servicios particulares.",
      requirements: ["Licencia de conducir", "Conocimiento de rutas locales", "Responsabilidad"],
      location: "Itagüí, Medellín"
    }
  ]
  return OpenPositions;
};

console.log(employmentDB());