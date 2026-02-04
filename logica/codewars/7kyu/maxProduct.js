const maxProduct = arr => {
  let max1 = 0
  let max2 = 0

  for (let n of arr) {
    if (n > max1) {
      max2 = max1
      max1 = n
    } else if (n > max2) {
      max2 = n
    }
  }
  return max1 * max2
}

console.log(maxProduct([56, 335, 195, 443, 6, 494, 252]))
console.log(maxProduct([154, 428, 455, 346]))
console.log(maxProduct([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411]))
console.log(maxProduct([136, 376, 10, 146, 105, 63, 234]))
console.log(maxProduct([354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89]))
console.log(maxProduct([346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14]))
console.log(maxProduct([134, 320, 266, 299]))
console.log(maxProduct([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252]))
console.log(maxProduct([375, 56, 337, 466, 203]))
