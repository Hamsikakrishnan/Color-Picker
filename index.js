const colorPicker = document.getElementById('color-picker')
const getColors = document.getElementById('get-colors')
const theme = document.getElementById('scheme')
getColors.addEventListener('click', function(){
    let hexcode = colorPicker.value
    hexcode = hexcode.replace("#", "")
    console.log(hexcode)
    let colors = []
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexcode}&mode=${theme.value}&count=6`)
    .then(res => res.json())
    .then(data =>{
        data.colors.forEach((color)=>{
            colors.push(color.hex.value)
        })
        render(colors)
        console.log(colors)
        console.log(data)
    })
})

function render(colors){
    let colorsDisplay = document.getElementById('colors-display')
    let html = ``
    colors.forEach(color =>{
        html += `
          <div style="background-color: ${color};">
             <div class="py-40 px-8" ></div>
             <div class="text-white text-sm flex justify-center pb-2">
                 <p>${color}</p>
             </div>
          </div>
        `
    })
    colorsDisplay.innerHTML = html
}