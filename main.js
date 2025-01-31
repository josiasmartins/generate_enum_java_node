const fs = require('fs');
const { interceptors } = require('undici-types');


function convertStringListInArray(valueList) {
    return valueList
        .split(",")
        .map(item => item.trim());
}

// Values user (INPUT)
const inputValues = "NOME, OUTROS";

const inputValuesConvertedInArray = convertStringListInArray(inputValues);

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

// Generate enum
const enumOutput = generateEnum(inputStrings);

// Save in file outputEnum.txt
const outputPath = './outputEnum.txt';
fs.writeFileSync(outputPath, enumOutput);

console.log("Enum gerado com sucesso em:", outputPath);
console.log(enumOutput);
