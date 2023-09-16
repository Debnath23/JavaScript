const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

/* For in loop */

for (const key in myObject) {
    console.log(`${key} shortcut for: ${myObject[key]}`);
}

const programming = ["js", "py", "java", "c++"]

for (const key in programming) {
    console.log(`Index ${key} -> ${programming[key]}`);
}

/* Map can't be iterated using For in loop */