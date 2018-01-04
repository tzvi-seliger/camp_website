console.log("structure.js is connected");
//collections in the program//

let program = {
    functions: {},
    styles: {},
    events: {},
    elements: {}
}

//function to add function to the function Collection//
program.functions.addFunction = function(name, func){
    program.functions[name] = func
}