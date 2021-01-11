const filtrarTragos = (array, filtro) => {
  return array.filter((filtro) => {
    filtro.toString().toUpperCase().indexOf(filtro.toUpperCase()) > -1;
  });
};

export default filtrarTragos;
