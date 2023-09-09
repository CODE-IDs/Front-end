import employmentBD from "../DB/EmploymentDB.js";
const Empleabilidad = () => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const result = await response.json();
    
            setData(result);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <header className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl">
            <h1 className="font-sans hover:font-serif bg-fourty text-3xl font-bold mb-4">Bolsa de empleo</h1>
            <Empleabilidad />
        </header>
    </div>

  )
}

export default Empleabilidad;