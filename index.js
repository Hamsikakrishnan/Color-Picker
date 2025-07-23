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
          <div>
             <div class="py-8 px-4" style="background-color: ${color};"></div>
          </div>
        `
    })
    colorsDisplay.innerHTML = html
}