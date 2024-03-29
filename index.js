const colorPicker = document.getElementById("color-picker") ;
const modeSelector = document.getElementById("mode-selector");

document.getElementById("get-color").addEventListener("click",()=>{
    let colorHex = colorPicker.value;
    let hexValue = colorHex.slice(1,7).toUpperCase()
    let colorMode = modeSelector.value.toLowerCase();
    console.log(hexValue + " " + colorMode);

    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${colorMode}`, {method: "GET"})
        .then(res=>res.json())
        .then(data=>{   
            let scheme = data.colors;
            // console.log(data)
            for(let i=0; i<scheme.length; i++){
                // console.log(scheme[i].hex.value)
                let hexValue = scheme[i].hex.value;
                document.getElementById(`hex-color-${i+1}`).textContent = hexValue;
                document.getElementById(`color-${i+1}`).style.backgroundColor = `${hexValue}`;
            }
    });
})