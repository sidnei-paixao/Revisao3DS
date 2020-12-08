// string da imagem
const arrumador = (imagem) => {
  return imagem.replace(/^<img +(\w*"[a-zA-Z].*)*src="|".*/g, "");
};
