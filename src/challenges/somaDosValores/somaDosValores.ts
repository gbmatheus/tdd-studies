interface Values {
  total: number,
  even: number,
  odd: number,
}

const sumValues = {total: 0, even: 0, odd: 0};

function loop (initial: number, finale: number, sum: number) : number {
  if(initial <= finale) {
    sum += initial;
  }
  return sum;
}

export function sumAllNumber(initial: number, finale: number): Values {
  if(initial <= finale) {
    sumValues.total += initial;
    sumAllNumber(initial + 1, finale);
  }
   
  return sumValues;
}

export function sumAllEvenNumber(initial: number, finale: number) : Values {  
  if(initial <= finale) {
    if(initial % 2 === 0) {
      sumValues.even += initial;
    }
    sumAllEvenNumber(initial + 1, finale);
  }

  return sumValues;
}

export function sumAllOddNumber(initial: number, finale: number) : Values {
  if(initial <= finale) {
    if(initial % 2 !== 0) {
      sumValues.odd += initial;
    }
    sumAllOddNumber(initial + 1, finale);
  }
  return sumValues;
}
