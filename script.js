const cashDenom = document.getElementById("cashDenom")
const curr = [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000]

const billAmt = parseInt(Math.random() * 1000) 
document.getElementById("billAmt").innerText = billAmt


cashDenom.addEventListener("submit", (e) => {
    e.preventDefault()
    clearChange()
    let cash = note2k.value * 2000
        + note500.value * 500
        + note200.value * 200
        + note100.value * 100
        + note50.value * 50
        + note20.value * 20
        + note10.value * 10
        + note5.value * 5
        + note2.value * 2
        + note1.value * 1
    
        console.log(cash)

    if(isNaN(cash)){
        alert("Please enter numeric value")
        
    }
    else{
        document.getElementById("paid").value = cash
        console.log(typeof(cash) + (typeof(billAmt)))
        console.log(billAmt)
        console.log(cash)
        var bal = (cash-billAmt)
        console.log(bal)
        if(cash < billAmt){
            alert("Cash paid is less. Please pay rupees "+(billAmt - cash) +" more")
            
        }
        else{
            document.getElementById("balAmt").innerHTML = bal
            var currList = [], k = 0

            for(i = 9; i >= 0; i--){
                while(bal >= curr[i]){
                    bal -= curr[i]
                    currList[k++] = curr[i]

                }
            }
            console.log(currList)
            

            for(i = 0; i < k; i++){
                document.getElementById("change").innerHTML += '<p>'+currList[i]+'</p><br>'
            }
        }
        
    }
    
})

function clearChange(){
    document.getElementById("change").innerHTML = " "
}
