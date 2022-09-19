import './App.ccs';

const guitar = {
    model: 'jesus',
    manufacturer: 'god',
    released: '0',
    construction: 'body head arms legs'
}

function App() {
    return (
     <div className="app">
        <h1>{guitar.manufacturer} - {guitar.model}</h1>
        <h2>Released {guitar.released}</h2>
        <section>
            <h4>Materials</h4>
            <p>Neck: {guitar.construction }</p>
        </section>
     </div>
    );
}

export default App;