const fs = require('fs');

/**
 * Converte uma lista de strings em um formato de enum no estilo Java.
 * @param {string[]} stringList Lista de strings a serem convertidas.
 * @returns {string} Enum formatado.
 */
function generateEnum(stringList) {
  return stringList
    .map(str => `${str.toUpperCase()}("${str.toUpperCase()}")`)
    .join(',\n') + ';';
}

// Exemplo de entrada
const inputStrings = ["NOME", "OUTROS"];

// Gerando a enum
const enumOutput = generateEnum(inputStrings);

// Salvando em um arquivo outputEnum.java
const outputPath = './outputEnum.java';
fs.writeFileSync(outputPath, enumOutput);

console.log("Enum gerado com sucesso em:", outputPath);
console.log(enumOutput);
