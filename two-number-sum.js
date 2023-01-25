let array = [3,5,-4,8,11,1,-1,6]
let targetSum = 10

function twoNumberSum(array, targetSum) {
         for (let i in array) {
          for (let j in array) {
            var num = array[i] + array[j] 
          if (array[i] === array[j]) {
            continue
          }
          if (num === targetSum) {
            return [array[i], array[j]]
        }
      }
    }
        return []
  }
  
  console.log(twoNumberSum(array, targetSum))

