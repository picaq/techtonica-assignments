let movieNight = function(arr) {
    // let going = [];
    let set = new Set(arr);
    if ( set.has('D') ) {
        return ['D', 'A', 'B'];
    } else {
        return ['P', 'M', 'B'];
    }
    // return going;
}
                // input -> output           // expected output
console.log(movieNight(['P', 'D', 'A']), "\n" ,['D', 'A', 'B'], "\n\n");
console.log(movieNight(['P', 'D', 'M']), "\n" ,['D', 'A', 'B'], "\n\n");
console.log(movieNight(['P', 'B', 'A']), "\n" ,['P', 'M', 'B'], "\n\n");
console.log(movieNight(['P', 'B', 'M']), "\n" ,['P', 'M', 'B'], "\n\n");
console.log(movieNight(['B', 'A', 'M']), "\n" ,['P', 'M', 'B'], "\n\n");
console.log(movieNight(['D', 'B', 'A']), "\n" ,['D', 'A', 'B'], "\n\n");
console.log(movieNight(['D', 'A', 'M']), "\n" ,['D', 'A', 'B'], "\n\n");
console.log(movieNight(['A', 'M', 'P']), "\n" ,['P', 'M', 'B'], "\n\n");
console.log(movieNight(['D', 'B', 'M']), "\n" ,['D', 'A', 'B'], "\n\n");
console.log(movieNight(['P', 'D', 'B']), "\n" ,['D', 'A', 'B'], "\n\n");