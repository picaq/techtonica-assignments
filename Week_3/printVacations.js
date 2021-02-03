let array = [ ['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London'] ];

let printVacations = function(arr) {
    for ( let i = 0 ; i < arr.length ; i++ ) {
        console.log(`${arr[i][0]} really wants to go to ${arr[i][1]}.`)
    }
}

printVacations(array);

let array2 = [ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ];

// let loop = function(arr) {
//     let destinations = " or " + arr[arr.length-1];
//     for ( let i = arr.length ; i < arr.length-1 ; i++ )
//     destinations = 
// }

let printVacations2 = function(arr) {
    for ( let i = 0 ; i < arr.length ; i++ ) {
        // let destinations = arr[i][1][arr[1][i].length];
        let extras = "";
        for ( let j = arr[i][1].length-3 ; j >= 0 ; j-- ) {
            extras = arr[i][1][j] + ", " + extras;
        }
        console.log(`${arr[i][0]} is willling to go to ${extras}${arr[i][1][arr[i][1].length-2]} or ${arr[i][1][arr[i][1].length-1]}.`)
    }
}

printVacations2(array2);


let table = function(num) {
    if ( num == 1 ) { return [num] };
    if ( num == 2 ) { return [[1,2][2,4]] };
    let 

}

// 1 2
// 2 4
