
function removeDuplicate(string) {
    return string
        .split('')
        .filter(function(item, index, self){
            return self.indexOf(item) === index;
        })
        .join('');
}

console.log(removeDuplicate('nanny'))


console.log(removeDuplicate('helloworld'))
// helowrd

console.log(removeDuplicate('iwanttoclimbamountain'))