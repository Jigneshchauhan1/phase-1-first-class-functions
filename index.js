function receivesAFunction(callback){
    return callback();
}
receivesAFunction(function(){'jignesh' + 'Chauhan'});

function returnsANamedFunction(){
    return function named(){}

}
function returnsAnAnonymousFunction(){
    return function(){}
}