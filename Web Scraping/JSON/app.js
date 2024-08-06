// app.js
import { readFile } from 'fs/promises';

async function main() {
  try {
    const superheroes = JSON.parse(
      await readFile(new URL('./superheroes.json', import.meta.url))
    );
    
    console.log(superheroes["members"] [1] ["powers"] [2]);
    // You can now use the superheroes data in your script
    // For example:
    // superheroes.forEach(hero => console.log(hero.name));
  } catch (error) {
    console.error('Error reading or parsing the JSON file:', error);
  }
}

main();
