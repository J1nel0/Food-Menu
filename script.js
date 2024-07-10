

let codigo = parseInt(prompt("qual o codigo do produto"))

switch (codigo) {
    case 1:
     let hd = parseInt(prompt("Quantos cachorros quentes você quer?"))
     let price1 = hd * 4.00
     document.write(`O cachorro quente é R$${price1}`)
        break;

    case 2: 
    let xl = parseInt(prompt("Quantos X-Saladas você quer?"))
    let price2 = xl * 4.50
    document.write(`O X-Salada é R$${price2}`)
        break;

    case 3:
        let xb = parseInt(prompt("Quantos X-Bacon você quer?"))
        let price3 = xb * 5.00
        document.write(`O X-Bacon é R$${price3}`)
        break;
        
    case 4: 
    let ts = parseInt(prompt("Quantas Torradas Simples você quer?"))
    let price4 = ts * 2.00
    document.write(`O X-Bacon é R$${price4}`)
    break;
    case 5:
        let rg = parseInt(prompt("Quantos Refrigerantes você quer?"))
        let price5 = rg * 1.50
        document.write(`O Refrigerante é R$${price5}`)
        break;
    default:
        document.write("Desculpe não encontramos o produto :(")
        break;
}