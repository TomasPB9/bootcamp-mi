//creacion de COMPONENTE
//los parametros en un componente se le llaman PROPS
//recibe las props que se le asignen cuando se utilize el componente Mensaje
const Mensaje = (props) => {
  console.log(props);
  //evaluamos las props con el nombre que se le declaro cuando se utilizo el componente Mensaje
  //con react en style se tiene que pasar un objeto
  return <h1 style={{color:props.color}}>
    {props.message}
  </h1>
}

export default Mensaje