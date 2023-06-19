function noParesDeContarImparesHasta(X) {
    let count = 0;
  
    for (let i = 0; i <= X; i++) {
      if (i % 2 !== 0) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(noParesDeContarImparesHasta(4));