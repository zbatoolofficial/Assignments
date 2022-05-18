
// 
  let Table = prompt("Enter Table Number");
  Table = parseInt(Table);

  for (let a = 1; 11 > a; a++) {
      document.write(Table +"x"+ a+"="+Table * a+ "<br>");
  }
//   
var totalrows =20;
var output ="";
for( var i = 1; i <= totalrows; i++){
    for (var j = 1; j <= i; j++){
        output += j + " ";
    }
    document.write(output);
    output ="<br>";
}
// 
let value = ['HTML', 'CSS', 'Bootstrap', 'JAVASCRIPT', 'PHP'];
// document.write(value[2]);
// document.write(value.length);
value.forEach(element => {
    document.write("<br>",element);
    console.log("<br>",element);
});
// 
value.forEach(function (x) {
    document.write(x + "<br>");
});