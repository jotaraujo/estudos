const timeConversion = hour => {
  const timeArray = hour.split(':')
  const modifier = timeArray[2].slice(-2)
  let hours = parseInt(timeArray[0], 10)

  if (modifier === 'AM' && hours === 12) {
    hours = '00'
  } else if (modifier === 'PM' && hours !== 12) {
    hours += 12
  } else {
    hours = hours < 10 ? `0${hours}` : `${hours}`
  }
  return `${hours}:${timeArray[1]}:${timeArray[2].slice(0, 2)}`
}

console.log(timeConversion('07:05:45PM'))
console.log(timeConversion('12:35:08AM'))
console.log(timeConversion('12:47:33PM'))
console.log(timeConversion('01:47:46PM'))
