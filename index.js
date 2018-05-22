const app = "I don't do much."
var kittenArray = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittenArray.push(name);
}

function destructivelyPrependKitten(name) {
  kittenArray.unshift(name);
}