


function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate')
    let money = document.querySelector('#money')
    let years = document.querySelector('#years')
    
    inflationRate = parseFloat(inflationRate.value)
    money = parseFloat(money.value)
    years = parseFloat(years.value)
    
    //formula za izracunavanje
    let worth = money+(money*(inflationRate/100))

  

    for(let i = 1;i<years; i++){
        worth+=worth*(inflationRate/100)
    }
    worth=worth.toFixed(2)

    let message = document.createElement('div')
    
    message.innerText = `Dansanjih ${money}€ ce za ${years} godina vredeti ${worth}€`  

    document.querySelector('.container').appendChild(message)
}