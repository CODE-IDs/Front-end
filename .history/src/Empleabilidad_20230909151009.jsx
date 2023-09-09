
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
    <div className="App">
        <header className="App-header">
            <h1>Bolsa de empleo</h1>
            <Empleabilidad />
        </header>
   </div>

  )
}

export default Empleabilidad;