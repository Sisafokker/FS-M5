const prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
        extension = extension * 0.01;
    } 
    result = Math.floor(grossPrice) + extension;
    console.log(result)
    return result
  }

  prettyPrice(3.50, 0.95) // 3.95
  prettyPrice(3.50, 99)   // 3.99