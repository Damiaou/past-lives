export async function getRandomAnimal() {
  let animal = "";
  await fetch(
    "https://gist.githubusercontent.com/borlaym/585e2e09dd6abd9b0d0a/raw/6e46db8f5c27cb18fd1dfa50c7c921a0fbacbad0/animals.json"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return [];
    })
    .then((data) => {
      const randomAnimal = data[Math.floor(Math.random() * data.length)];

      animal = randomAnimal.toLowerCase();
    });
  return animal;
}

export async function getRandomAdjective(animal) {
  let adjective = "";
  await fetch(`https://api.datamuse.com/words?rel_jjb=${animal}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return [];
    })
    .then((data) => {
      const randomAdjective = data[Math.floor(Math.random() * data.length - 1)];

      if (randomAdjective !== undefined && Array.isArray(data) && data.length) {
        adjective = randomAdjective.word;
      }
    });
  return adjective;
}
