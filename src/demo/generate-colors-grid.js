// Node script to generate all the colors in HEX and save it to a json

const Color = require('color')
const fs = require('fs')
const path = require('path')

const generateAllColorsInHex = (offset) => {
  let colorList = []

  for (let h = 0; h < 360; h += offset) {
    for (let s = 0; s < 100; s += offset) {
      for (let l = offset; l < 100; l += offset) {
        colorList.push({h, s, l})
      }
    }
  }

  return colorList
}

const matrix = generateAllColorsInHex(20)

fs.writeFile(
  path.join(__dirname, 'color-grid.json'),
  JSON.stringify(matrix),
  'UTF-8',
  (err) => {
    if (err) {
      throw err
    }

    console.log(`Done! ${matrix.length} `)
  }
)