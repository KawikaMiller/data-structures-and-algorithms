const { repeatedWord } = require('../repeatedWord/repeatedWord')

describe('Testing repeatedWord function...', () => {

  let string1 = "Once upon a time, there was a brave princess who...";
  let string2 = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
  let string3 = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";

  test("Once upon a time, there was a brave princess who...", () => {
    let results = repeatedWord(string1);
    expect(results.mostUsedWord).toStrictEqual({a: 2})
    console.log(results.allWordCount);
    expect(results.allWordCount).toStrictEqual(    [
      { Once: 1 },
      { upon: 1 },
      { there: 1 },
      { who: 1 },
      { a: 2 },
      { time: 1 },
      { princess: 1 },
      { was: 1 },
      { brave: 1 }
    ])
  })

  test("It was the best of times...", () => {
    let results = repeatedWord(string2);
    expect(results.mostUsedWord).toStrictEqual({the: 14})
  })

  test("It was a queer, sultry summer", () => {
    let results = repeatedWord(string3);
    expect(results.mostUsedWord).toStrictEqual({I: 2});
    expect(results.allWordCount).toStrictEqual([
      { sultry: 1 }, 
      { Rosenbergs: 1 },
      { New: 1 },
      { electrocuted: 1 },
      { queer: 1 },  
      { didnt: 1 }, 
      { a: 1 },      
      { what: 1 },  
      { York: 1 },   
      { It: 1 },    
      { I: 2 },      
      { know: 1 },  
      { they: 1 },   
      { was: 2 },   
      { the: 2 },    
      { in: 1 },    
      { summer: 2 }, 
      { doing: 1 }, 
      { and: 1 }
    ])
  })

})