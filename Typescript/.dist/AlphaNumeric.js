"use strict";
function alphanumeric(string) {
    const regex = new RegExp('[a-zA-Z0-9]');
    const regex2 = new RegExp('^[^\\\/#._,$]*$');
    return ((regex.test(string)) && (string.includes(' ') === false) && (regex2.test(string)));
}
console.log(alphanumeric("hello world"));
