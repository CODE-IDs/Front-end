/**
 * Base de datos de Educacion
 * import educationDB from "./EducationDB.js";
 * 
 * Formato de item: 
 *  {
 *    id: number, 
 *    name: string, 
 *    categories: string[], 
 *    content: number, 
 *    author: string,  
 *    location: string
 *  }
 */
export default function educationDB() {
  /*  const apiURL = 'apiDeAliado.com/cursos'; 
      se haria fetch a la api y se muestra info*/
  const Courses = [
    {
      id: 1,
      name: 'Curso de Finanzas Personales',
      categories: ['Finanzas', 'Ahorro'],
      content: 'Aprende a administrar tus finanzas personales de manera efectiva.',
      author: 'Juan Pérez',
      location: 'Laureles'
    },
    {
      id: 2,
      name: 'Introducción a la Economía',
      categories: ['Economía'],
      content: 'Descubre los conceptos fundamentales de la economía.',
      author: 'María Gómez',
      location: 'El Poblado'
    },
    {
      id: 3,
      name: 'Taller de Emprendimiento',
      categories: ['Emprendimiento', 'Inversion'],
      content: 'Aprende a emprender y a tomar decisiones de inversión.',
      author: 'Carlos Rodríguez',
      location: 'Envigado'
    },
    {
      id: 4,
      name: 'Gestión del Empleo y Carrera Profesional',
      categories: ['Empleo'],
      content: 'Mejora tus habilidades para conseguir y mantener empleo.',
      author: 'Ana Martínez',
      location: 'Belén'
    },
    {
      id: 5,
      name: 'Planificación Financiera Avanzada',
      categories: ['Finanzas', 'Ahorro', 'Inversion'],
      content: 'Domina estrategias avanzadas de planificación financiera.',
      author: 'Pedro López',
      location: 'Robledo'
    }
  ];
  return Courses;
};

console.log(educationDB());