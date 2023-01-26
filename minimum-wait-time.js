const queries = [3,2,1,2,6]

function minimumWaitingTime(queries) {
    if (queries.length === 1) {
      return 0
    }
    queries.sort((a,b) => a - b).pop();
    return queries
      .reduce((acc,toAdd, idx) => acc + toAdd * ( queries.length - idx), 0)
  }
  