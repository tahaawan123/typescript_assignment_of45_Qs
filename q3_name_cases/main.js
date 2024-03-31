// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in
// lowercase, uppercase, and titlecase.
var personName = "Taha awan";
// lowercase
console.log("lowercase:", personName.toLowerCase());
// UPPERCASE
console.log("UPPERCASE:", personName.toLocaleUpperCase());
// TitleCase
console.log("TitleCase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
