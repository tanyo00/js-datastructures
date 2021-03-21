// HashTable (map in JavaScript) is a collection with keyed value paires.
// Keys and Values can be of any type

const map = new Map()

// set a value
map.set('firstName', 'Tanyo')
map.set('lastName', 'Nikolov')
map.set('age', 21)

// returns the value by passing a key
map.get('firstName') // Tanyo

// deletes a value by passing a key
map.delete('age')

// forEach loop
map.forEach(value => {
  console.log(value)
})

// checks for a value
map.has('firstName') // true

// .values() - loops through the map and returns all values
map.values()

// .keys() - loops through the map and returns all keys
map.keys()

// clear the map
map.clear()
