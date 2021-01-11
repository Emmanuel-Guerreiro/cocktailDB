//TODO: ver si implementar a traves de un hook por una cuestion de claridad

//TODO: ver como formatear los ingredientes y sus cantidades en alguna estructura de datos
//que los represente mejor
//TODO: ver que hacer ante error en el fetch de la data

const buscaTragos = async (cadenaBuscar) => {
  try {
    const busqueda = cadenaBuscar === "" ? "a" : cadenaBuscar;
    const tragos = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${busqueda.charAt(
        0
      )}`
    );
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
