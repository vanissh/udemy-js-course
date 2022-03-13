//FALSY/TRUTHY VALUES
//0, '', undefined, null, NaN
// остальные будут сконвертированы в true
 
Boolean(0) // false 
Boolean('') // false
Boolean(undefined) // false

Boolean(32) // true
Boolean('Hello') // true
Boolean([]) // true
Boolean({}) // true

