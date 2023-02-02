let redShirtSpeeds = [5,5,3,9,2]
let blueShirtSpeeds = [3,6,7,2,1]
let fastest = true

const tandemBicycle = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
    blueShirtSpeeds.sort((a,b) => fastest ? a - b : b - a)
    redShirtSpeeds.sort((a,b) => b - a )
    let result = 0
    for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
      result += Math.max(redShirtSpeeds[idx], blueShirtSpeeds[idx])
    }
    return result;
  }
  