const accountId = 145323 // Not Changeable once its declared

// Declaring Variable In 2 ways
let accountEmail = "google@xyz.com" //Changeable after its declared (Only Use let )
var accountPassword = "hello123" //Changeable after its declared (Dont use var not recommended at all)

accountCountry = "United State" // Js is save langauge and it can be declared like this also but not recommended

let accountCountry; // undefined

//Trying to change its values
accountEmail = "microsoft@xyz.com"
accountPassword = "tello123"
accountCountry = "Palestine"

// How To Do Comment
// Single Line Comments Double Escape Sequence Means Comment(//)

/*

Multiple Line Comment

*/



console.table([accountId , accountEmail , accountPassword , accountCountry])