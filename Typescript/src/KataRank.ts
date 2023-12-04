// This is to show how many kata's you need to complete to level up in codewars.com

interface ObjectInterface { //define interface
    kyu8: number;
    kyu7: number;
    kyu6: number;
    kyu5: number;
    kyu4: number;
    kyu3: number;
    kyu2: number;
    kyu1: number;
    dan1: number;
    dan2: number;
  }
  
  // Object with the defined interface
  const scoresAwarded: ObjectInterface = {
    kyu8: 2,
    kyu7: 3,
    kyu6: 8,
    kyu5: 21,
    kyu4: 55,
    kyu3: 149,
    kyu2: 404,
    kyu1: 1097,
    dan1: 1097,
    dan2: 1097,
  };


const rankUpScore: ObjectInterface = {
    kyu8: 0,
    kyu7: 20,
    kyu6: 76,
    kyu5: 229,
    kyu4: 643,
    kyu3: 1768,
    kyu2: 4829,
    kyu1: 13147,
    dan1: 35759,
    dan2: 97225,
} 

// want to find the number of exercises you have to do at ech level to level up

const finalObject: ObjectInterface = {
    kyu8: 0,
    kyu7: 0,
    kyu6: 0,
    kyu5: 0,
    kyu4: 0,
    kyu3: 0,
    kyu2: 0,
    kyu1: 0,
    dan1: 0,
    dan2: 0,
  };

function numberOfExercises(): ObjectInterface {
    const rankUpScoreArray: [string, number][] = Object.entries(rankUpScore);
    const scoresAwardedArray: [string, number][] = Object.entries(scoresAwarded);
    const exercisesNumberArray: number[] = [0]
    for (let i = 0; i < rankUpScoreArray.length -1; i++) {
        exercisesNumberArray.push((rankUpScoreArray[i + 1][1]) / (scoresAwardedArray[i][1]))
        console.log(exercisesNumberArray)
    }

    for (let i = 0; i < exercisesNumberArray.length; i++) {
        const key = `kyu${8 - i}` as keyof ObjectInterface;
        finalObject[key] = exercisesNumberArray[i];
      }
    
    return finalObject;
  }

console.log(numberOfExercises())