// string da imagem
const arrumador = (imagem) => {
  return imagem.replace(/^<img +(\w*"[a-zA-Z].*)*src="|".*/g, "");
};

const fnExtraiImagem = (cImagem) => {
  return cImagem.match(/\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/)[1];
};

