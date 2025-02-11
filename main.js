const fs = require('fs');

function convertStringListInArray(valueList) {
    return valueList
        .split(",")
        .map(item => item.trim());
}

// Values user (INPUT)
const inputValues = "NOME, OUTROS,TESTéee";

const inputValuesConvertedInArray = convertStringListInArray(inputValues);

/**
 * Converte uma lista de strings em um formato de enum no estilo Java.
 * @param {string[]} stringList Lista de strings a serem convertidas.
 * @returns {string} Enum formatado.
 */
function generateEnum(stringList) {
  return stringList
    .map(str => `${removeAllAccents(str.toUpperCase())}("${str.toUpperCase()}")`)
    .join(',\n') + ';';
}

function removeAllAccents(item) {
  // Normaliza a string para a forma NFD (Decomposição de Normalização)
  // Isso separa caracteres acentuados em caractere base + marca de acento
  return item
    .normalize("NFD")
    // Remove os códigos de acentos combinados (que variam de U+0300 a U+036F)
    .replace(/[\u0300-\u036f]/g, ''); // Substitui por uma string vazia
}

// Generate enum
const enumOutput = generateEnum(inputValuesConvertedInArray);

// Save in file outputEnum.txt
const outputPath = './outputEnum.txt';
fs.writeFileSync(outputPath, enumOutput);

console.log("Enum gerado com sucesso em:", outputPath);
console.log(enumOutput);
