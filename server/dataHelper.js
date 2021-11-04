function getRandomItemsFromArr(array, amount) {
  let returnArray = []
  for (let i = 0; i < amount; i++) {
    let index = Math.floor(Math.random() * array.length)
    returnArray.push(array[index])
  }
  return returnArray
}

function generateVisualizationData(visualizations) {
  const returnArray = []
  visualizations.forEach((val, index) => {
    const data = generateRandomData(val.min, val.max, val.period)
    const currentVisualization = {
      period: val.period,
      title: val.title,
      suffix: val.suffix,
      prefix: val.prefix,
      data: data,
      displayValue: data[0].y,
      changePercentage: getVisualizationDelta(data)
    }
    returnArray.push(currentVisualization)
  })
  return returnArray
}

function getVisualizationDelta(data) {
  const oldVal = data[data.length - 1].y
  const newVal = data[0].y
  const difference = oldVal - newVal
  const sum = oldVal + newVal
  if (sum / 2 === 0)
    return difference * 100
  else
    return (difference / (sum / 2)) * 100
}

function generateRandomData(min, max, length) {
  const data = []
  for (let i = 0; i < length; i++) {
    let currData = {}
    let currDay = new Date()
    currDay.setDate(currDay.getDate() - i)
    currData.x = currDay
    currData.y = generateRandomValue(min, max)
    data.unshift(currData)
  }
  return data
}

function generateRandomValue(min, max) {
  return (Math.floor(Math.random() * (max - min)) + min)
}

module.exports = {
  getRandomItemsFromArr,
  generateVisualizationData
}