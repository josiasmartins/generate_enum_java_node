# Generatte ENUM JAVA

## Requisitos
- node

## Passos para rodar o projeto
Alterar o valor da constante "inputValues" na linha 10 do arquivo main.js e inserir os valores desejado. Depois execute:

```bash
node ./main.js
```

### Exemplo:
```js
// Values user (INPUT)
const inputValues = "NOME, OUTROS";
```

Saída disponível no terminal e salvado no arquivo outputEnum.txt

```txt
NOME("NOME"),
OUTROS("OUTROS");
```