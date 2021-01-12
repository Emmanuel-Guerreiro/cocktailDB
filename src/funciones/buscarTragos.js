//TODO: ver si implementar a traves de un hook por una cuestion de claridad

//TODO: ver como formatear los ingredientes y sus cantidades en alguna estructura de datos
//que los represente mejor
//TODO: ver que hacer ante error en el fetch de la data

const buscaTragos = async (tipo, cadenaBuscar) => {
  /* La funcion se encarga de realizar la busqueda de los datos en la api y formatearlos en un objeto
  a traves de la funcion formatear tragos

  **Parametros de la funcion: 
  * Tipo: sirve para saber si vamos a realizar una busqueda por nombre o por ID (los dos valores a esperar)
  * CadenaBuscar: es el valor, ya sea id o nombre con el que se realiza el fetch */
  try {
    let tragos; //esto esta desprolijo, pero no se como hacerlo si no
    if (tipo.toLowerCase() === "nombre") {
      const busqueda = cadenaBuscar === "" ? "a" : cadenaBuscar;
      tragos = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${busqueda.charAt(
          0
        )}`
      );
    } else if (tipo.toLowerCase() === "id") {
      tragos = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cadenaBuscar}`
      );
    } else {
      console.log(
        "Te equivocaste en el nombre del parametro tipo - Valores validos: Nombre | ID"
      );
    }
    const tragosJSON = await tragos.json();
    const tragoFormateado = formatearTragos(tragosJSON.drinks);
    return tragoFormateado;
  } catch (error) {
    console.log("No encontro nada");
  }
};

const formatearTragos = (arrayTragos) => {
  const arrayTragosFormato = arrayTragos.map((trago) => {
    return {
      id: trago.idDrink,
      nombre: trago.strDrink.toUpperCase(),
      tipo: trago.strAlcoholic,
      imagen: trago.strDrinkThumb,
      instrucciones: trago.strInstructions,
    };
  });
  return arrayTragosFormato;
};

export default buscaTragos;
