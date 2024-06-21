const per = parseInt(prompt(`Enter your percentage`));


if (per >= 90)
     {
    document.write("Grade: A");
} 
else if (per>= 80)
     {
    document.write("Grade: B");
}
 else if (per>= 70) 
    {
    document.write("Grade: C");
}
 else if (per >= 60)
     {
    document.write("Grade: D");
} 
else {
    document.write("Grade: F");
}