//TODO: ver como formatear los ingredientes y sus cantidades en alguna estructura de datos
//que los represente mejor

//TODO: ver que hacer ante error en el fetch de la data
//TODO: como logro mas especificidad en la busqueda y no busque siempre desde a

const buscaTragos = async () => {
  try {
    const tragos = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    const tragosJSON = await tragos.json();
    const tragoFormateado = await formatearTragos(tragosJSON.drinks);
    return tragoFormateado;
  } catch (error) {
    console.log("No encontro nada");
  }
};

const formatearTragos = (arrayTragos) => {
  const arrayTragosFormato = arrayTragos.map((trago) => {
    return {
      id: trago.idDrink,
      nombre: trago.strDrink,
      tipo: trago.strAlcoholic,
      imagen: trago.strDrinkThumb,
      instrucciones: trago.strInstructions,
    };
  });

  return arrayTragosFormato;
};

export default buscaTragos;
