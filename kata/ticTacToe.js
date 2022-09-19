function ticTacToe(arr=[]){

    if (arr.length != 3) throw new Error ("wrong result's array");
    let arrRow = new Set ();
    let arrFirstCol = new Set ();
    let arrSecCol = new Set ();
    let arrThirdCol = new Set ();
    let arrRightDiagonal =new Set ();
    let arrLeftDiagonal = new Set ();
    for (let i = 0; i< arr.length; i++){

        const el = arr[i];
        if (el.length !=3) throw new Error ("Wrong result's arry");
        for (let x of el){
            arrRow.add(x);
        }
        
        arrFirstCol.add(el[0]);
        arrSecCol.add(el[1]);
        arrThirdCol.add(el[2]);
        arrRightDiagonal.add(el[i]);
        arrLeftDiagonal.add(el[2-i]);
        if (arrRow.size == 1 && arrRow.has('x')) return 'x';
        if (arrRow.size == 1 && arrRow.has('o')) return 'o';
    }

    //console.log(arrRightDiagonal)
    //console.log(arrLeftDiagonal)

    if (arrFirstCol.size == 1 && arrFirstCol.has('x')) return 'x';
    if (arrFirstCol.size == 1 && arrFirstCol.has('o')) return 'o';

    if (arrSecCol.size == 1 && arrSecCol.has('x')) return 'x';
    if (arrSecCol.size == 1 && arrSecCol.has('o')) return 'o';

    if (arrThirdCol.size == 1 && arrThirdCol.has('x')) return 'x';
    if (arrThirdCol.size == 1 && arrThirdCol.has('o')) return 'o';

    if (arrRightDiagonal.size == 1 && arrRightDiagonal.has('x')) return 'x';
    if (arrRightDiagonal.size == 1 && arrRightDiagonal.has('o')) return 'o';

    if (arrLeftDiagonal.size == 1 && arrLeftDiagonal.has('x')) return 'x';
    if (arrLeftDiagonal.size == 1 && arrLeftDiagonal.has('o')) return 'o';

    return 'Draw';

}

console.log(
    ticTacToe([
      ["x", "o", "x"],
      ["o", "x",  "o"],
      ["o", "x",  "x"]
    ])) ;//➞ "X"