let array = [141, 1, 17, -7, -17, -27, 18,541,8,7,7]


//WITH SORTING
function findThreeLargestNumbers(array) {
    array.sort((a,b) => {
      return ((a < b) ? -1 : (a > b) ? 1 : 0)
    })
    return array.slice(array.length - 3)
  }


  
  findThreeLargestNumbers(array)