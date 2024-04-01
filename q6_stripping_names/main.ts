// 6. Stripping Names : store a oerson's name, and inckude some whitespace characters 
// at the begnning and end of the name. Make sure you use each character combination,
//  "\t" and "\n", at least once.print the name once, so the whitespace around the 
//  name is displayed.then print the name after striping the white space.
let personName : string ="\t\nTaha Awan\t\n";
console.log("name with white space:", personName);
let stripping:string=personName.trim();
console.log("Name with stripping:",stripping);
