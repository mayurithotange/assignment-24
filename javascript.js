
const per = parseInt(prompt('Enter Percentage:'));

if (per >= 50 && per < 60) {
    document.write(' Grade:E')
}
else if (per >= 60 && per < 70) {
    document.write(' Grade:D')
}
else if (per >= 70 && per < 80) {
    document.write(' Grade:C')
}
else if (per >= 80 && per < 90) {
    document.write(' Grade:B')
}
else if (per >= 90 && per <= 100) {
   document.write(' Grade:A')
}
else {
    console.log('Fail')
}

