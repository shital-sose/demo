//getElementById
let heading = document.getElementById("head")
console.log(heading);




// getElementByClassName
let headings =document.getElementsByClassName("head");
console.log(headings);
console.dir(headings);



//getElementByTagName
let tags=document.getElementsByTagName("p");
console.log(tags);
console.dir(tags);

// querySelector("tagname,classname,idname")
let names=document.querySelector("p");//queryselector to tagname
    console.log(names);
    console.dir(names.tagName);
    
let name=document.querySelector("#para");//queryselector to id
console.log(name);
console.dir(name);

let classname= document.querySelector(".head");//queryselector to class
console.log(classname);
console.dir(classname.tagName);

//