// lexical scope
const username = 'Anurag';
let userAge = 25;
var a = 50;

function subtract() {
    debugger;
    const x = 15;
    const y = 18;
    const z = 20;

    console.log(x - y);

    // ❌ WRONG → userName
    // ✔ RIGHT → username
    console.log(username);

    function child() {
        const childName = 'Golu';
        console.log(childName); // ✔ childName (local to child)
        console.log(z);         // ✔ child can access z (parent scope)

        function grandChild() {
            const grandChild = 'Molu';
            console.log(grandChild); // ✔ local to grandChild
        }

        grandChild();
    }

    child();
}

subtract();

console.log('Program Ended');


// block scope
{
    const num1 = 78;
    console.log(num1); // ✔ works
}

{
    var num2 = 87;  // var ignores block scope
}

console.log(num2);   // ✔ works (var is global/function scoped)

{
    let num3 = 89;
    console.log(num3); // ✔ works inside block
}

// console.log(num3); // ❌ ERROR: num3 is block-scoped
