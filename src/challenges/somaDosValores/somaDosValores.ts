interface Values {
  total: number,
  even: number,
  odd: number,
}

const values = {total: 0, even: 0, odd: 0};

function loop (initial: number, finale: number) : boolean {
  const inLoop = initial <= finale;
  return inLoop;
}

export function sumAllNumber(initial: number, finale: number): Values {
  if(loop(initial, finale)) {
    values.total += initial
    sumAllNumber(initial + 1, finale);
  }
   
  return values;
}

export function sumAllEvenNumber(initial: number, finale: number) : Values {  
  if(loop(initial, finale)) {
    if(initial % 2 === 0) {
      values.even += initial;
    }
    sumAllEvenNumber(initial + 1, finale);
  }

  return values;
}

export function sumAllOddNumber(initial: number, finale: number) : Values {
  if(loop(initial, finale)) {
    if(initial % 2 !== 0) {
      values.odd += initial;
    }
    sumAllOddNumber(initial + 1, finale);
  }
  return values;
}
