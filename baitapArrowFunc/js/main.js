const colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar']

const renderCacOMau = () => {
    html = '';
    for (const value of colorList) {
        if (value === 'pallet') {
            html += `
        <button class="color-button ${value} active"></button>
        `
        } else {
            html += `
        <button class="color-button ${value}"></button>
        `
        }
    }
    document.querySelector('#colorContainer').innerHTML = html;
}

renderCacOMau()

const mangButton = document.getElementsByTagName('button')

for(let i = 0; i < 10; i++) {
    mangButton[i].onclick = () => {
        doiMauNgoiNha(colorList[i])
        xoaIcon(colorList[i])
    }
}


const doiMauNgoiNha = (color) => {
    for (const value of colorList) {
        if (value === color) {
            document.querySelector(`.${value}`).className = `color-button ${value} active`
            document.querySelector('#house').className = `house ${value}`;
        }
    }
}

const xoaIcon = (color) => {
    for (const index in colorList) {
        if (colorList[index] !== color) {
            document.querySelector(`.${colorList[index]}`).className = `color-button ${colorList[index]}`
        }
    }
}