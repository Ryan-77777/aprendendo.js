function calcular_salario_liquido(salariobruto) {
const descontoINSS = salariobruto * 0.075;
const DescontoIR = salariobruto * 0.08;
const salarioliquido = salariobruto - descontoINSS - DescontoIR;
console.log(`salario bruto: R$ ${salariobruto.toFixed(2)}`)
console.log(`Desconto INSS (7.5%): R$ ${descontoINSS.toFixed(2)}`);
console.log(`desconto IR (8%): R$ ${descontoINSS.toFixed(2)}`);
console.log(`salario liquido: R$ ${salarioliquido.toFixed(2)}`)
}
calcular_salario_liquido(3000);
