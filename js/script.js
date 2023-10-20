// DATI

const userNameElem = document.getElementById("name");
console.log(userNameElem)
const userKmm = document.getElementById("km");
console.log(userKmm)
const userAgeElem = document.getElementById("age");



const sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", function ()
{
    const userName = userNameElem.value
    console.log(userName)
    const userKm = parseInt(km.value)
    console.log(userKm, typeof userKm)
    const userAge = parseInt(userAgeElem.value)
    console.log(userAge)

    const price = userKm * 0.21
    console.log(price, typeof price)

    let discount = ""
    
    if (userAge <18)
    {
        discount = (price * 0.20 % 100)
       
    }
    else if (userAge >65)
    {
        discount = (price * 0.40 % 100)
    }
    else {discount = 0}


    console.log(discount)

    let totalPrice = ""

    if (userAge <18 || userAge >65)
    {
        totalPrice = (price - discount)
    }
    else 
    {
        totalPrice = (price)
    }
    console.log(totalPrice)

    const ticket = totalPrice. toFixed(2)
    console.log(ticket, typeof ticket)

    let finalAge=""
    if (userAge <18)
    {
        finalAge = ("minorenne")
    }
    else if (userAge >65)
    {
        finalAge = ("over 65")
    }
    else{finalAge = ("maggiorene")}

    console.log(finalAge)

    const message = 
    `
    <table>
  <tr>
    <th>Nome</th>
    <th>costo</th>
    <th>Età</th>
  </tr>
  <tr>
    <td>${userName}</td>
    <td>${ticket}</td>
    <td>${finalAge}</td>
  </tr>
  
</table>

    `

document.getElementById("stamp") .innerHTML = message


})


