//1
let u=sum(8,9)//funcation invokation/funcation call
function sum (a,b){// fucnation declartion
    let c = a+b;
    console.log(c)
}
//2HTMLCollection length Property
function myFunction1() {
    var l = document.getElementsByTagName("J").length;
    alert(l);
  }
//3HTMLCollection namedItem() Method
function myFunction2() {
    var x = document.getElementsByTagName("P").namedItem("myElement");
    alert(x.innerHTML);
  }

  //4The Storage Event
  window.addEventListener("storage", myFunction);

function myFunction(event) {
  document.getElementById("demo").innerHTML = "A change was made in the storage area";
}

function changeValue() {
  var x = window.open("", "myWindow", "width=200,height=100");
  x.localStorage.setItem("mytime", Date.now());
  x.close();
}
//5 array of number find in accending order by using double arrow
let numbers =[10,2,20,30,50,1]
numbers.sort((a,b) =>b-a);
console.log(numbers)
