// JSON string representing an array of superhero objects
const jsonString = `

[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]


`

// Parse the JSON string into a Javascript object (array)
const obj = JSON.parse(jsonString)

console.log(obj[0]["powers"][0])
