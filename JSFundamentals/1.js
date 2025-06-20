"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 0
!true // false
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 //$45
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // __-9__5
"  -9  " - 5 // -13
null + 1 // NaN
undefined + 1 // NaN
undefined == null // true
undefined === null // false (typeof undefined = undefined; typeof null = object)
" \t \n" - 2 // NaN ** (\t = horiznotal tabulator, \n = new line)

console.log(" \t \n" - 2);
