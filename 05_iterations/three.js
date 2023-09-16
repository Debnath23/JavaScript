const coding = ["js", "py", "java", "c++"]

coding.forEach( function (val){
    console.log(val);
})

coding.forEach( (item) => {
    console.log(item);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        language: "javascript",
        languageFileName: "js"
    },
    {
        language: "java",
        languageFileName: "java"
    },
    {
        language: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.language);
})