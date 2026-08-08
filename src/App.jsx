import './App.css';

function TarjetaPerfil({ nombre, rol, activo }) {

  const inicial = nombre.charAt(0).toUpperCase();

  const estiloEstado = {
    color: activo ? "green" : "red",
    fontWeight: 'bold'
  };

  return (
    <div className="tarjeta">
      <h2>{`${inicial} -- ${nombre}`}</h2>
      <p>Rol: {rol}</p>
      <p style={estiloEstado}>
        Estado: {activo ? "Activo" : "Inactivo"}
      </p>
      <button onClick={() => alert('Hola, ' + nombre)}>Saludar</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Equipo de Desarrollo</h1>

      <TarjetaPerfil nombre="Ana Gómez" rol="Frontend" activo={true} />
      <TarjetaPerfil nombre="Luis Pérez" rol="Backend" activo={false} />
    </div>
  );
}

export default App;
