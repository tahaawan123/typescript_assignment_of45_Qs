// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in
// lowercase, uppercase, and titlecase.
let personName: string = "Taha awan"

// lowercase
console.log("lowercase:", personName.toLowerCase());

// UPPERCASE
console.log("UPPERCASE:" ,personName.toLocaleUpperCase());

// TitleCase
console.log("TitleCase:", personName.replace(/\b\w/g,c  => c.toUpperCase()));



