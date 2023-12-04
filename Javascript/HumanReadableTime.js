function humanReadable (seconds) {
const hours = Math.floor(seconds / 3600);
const minutes = Math.floor((seconds - (hours * 3600)) / 60)
const seconds_human = seconds - (hours * 3600) - (minutes * 60)

function addZero (input) {
    return (input < 10) ? "0" + input : input; 
}

let hours_human = addZero(hours)
let minutes_human = addZero(minutes)
let seconds_human2 = addZero(seconds_human)

    return `${hours_human}:${minutes_human}:${seconds_human2}`;
  }

console.log(humanReadable(5469))