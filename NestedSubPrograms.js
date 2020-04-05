var x = 5;
var y = 6;
var z = x + y;
var a = firstFunction(x, y);

console.log("The value of z is: " + z);
console.log("The value of a is: " + a);

outer();


function firstFunction(p1, p2) {
    return p1 * p2;
}


function outer() {
    var v1 = "a number 9";

    console.log("outer()");
    console.log(v1);

    inner1();

    function inner1() {
        var v2 = "9 Large";
        var v3 = "6 with extra dip";    
        
        console.log("inner1()");
        console.log(v1 + ", " + v2 + ", " + v3);

        inner2();

        function inner2() {
            var v4 = "2 number 45s";

            console.log("inner2()");
            console.log(v1 + ", " + v2 + ", " + v3 + ", " + v4);

            inner3();

            function inner3() {
                var v5 = "a large soda";
                
                console.log("inner3()");
                console.log(v1 + ", " + v2 + ", " + v3 + ", " + v4 + ", " + v5);

            }
        }

    }

}