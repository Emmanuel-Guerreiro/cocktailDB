const filtrarTragos = (array, filtro) => {
  const filtroNormalizado = filtro.toUpperCase();
  return array.filter((item) => item.nombre.includes(filtroNormalizado));
};

export default filtrarTragos;
