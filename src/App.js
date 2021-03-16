//importa los estilos
import './App.css';
//importa modulo Mensaje para usar ese componente
import Mensaje from './Mensaje.js'

//es un componente, se declaran como funciones pero la primera letra es en MAYUSCULAS
function App() {
  //Se pueden crear variables dentro de los componentes
  const mensaje='Hola Mundo '
  return (
    //solo puede devolver un elemento que involucre a los demas (en este caso solo devuelve className="App")
    //<>  ... </> envuelve lo que quiero renderizar en react sin necesidad de crear un elemento en el html
    <div className="App">
      {/* las llaves evaluan  el contenido que hay entre llaves*/}
      {/* No se pueden renderizar objetos directamente (o poner + antes para que si) */}
      {/* {+new Date()} */}
      {mensaje + 'evaluación en JSX'}
      {/* utilizamos el componente mensaje */}
      {/* le agregamos una propo al componente Mensaje */}
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='En un curso'/>
      <Mensaje color='yellow' message='De React'/>
      <Description />
      </div>
  )
}

//NO CREAR COMPONENTES DENTRO DE OTROS COMPONENTES

//creacion de COMPONENTE
const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

export default App;
