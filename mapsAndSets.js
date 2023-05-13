new Set([1,1,2,2,3,4]) // {1,2,3,4}

[...new Set("referee")].join("") // "ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/


const hasDuplicate = arr => new Set(arr).size !== arr.length


vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(letter){
  return "aeiou".includes(letter);
}

function vowelCount(str){
  const map = new Map();
  for(let i of str){
    let lowerCased = i.toLowerCase()
    if(isVowel(lowerCased)){
      if(map.has(lowerCased)){
        map.set(lowerCased, map.get(lowerCased) + 1);
      } else {
        map.set(lowerCased, 1);
      }
    }
  }
  return map;
}