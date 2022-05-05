
// 1. Rewrite the setInterval example (the one with function delayMsg2 that prints out ‘Rudy!’) to use the module
// pattern. Call the module ‘rudyTimer’. I.e., varrudyTimer’= (… )() and then use the module as the event handler
// on the button. I.e., <button onclick=" rudyTimer’ ()">Click me!</button>

let timer = null;
var rudyTimer = (function () {
    return () => {
        // stores ID of interval timer
        // function delayMsg2() {
        if (timer === null) {
            timer = setInterval(rudy, 200);
        } else {
            clearInterval(timer);
            timer = null;
        }
        // }
    }
})();


function rudy() { // called each time the timer goes
    // off
    document.getElementById("output").innerHTML += "Rudy!";
}

// 2.
//  You should have a button event handler that uses the module to create an account.
//  The module should have a public method for creating the account. That method will retrieve the account
// name and deposit entries from the web page and then set those values into private variables in the
// account module for the account name and balance.

//  You should have an accountInfoList variable outside the module. The event handler will store information
// about each new account in this list and display the updated list each time a new account is created.

// IMPORTANT REQUIREMENT: The accountInfoList must hold account objects, not Strings.
//  You should fill the text area by retrieving information from the accounts in the list.
//  Create a simple html page with inputs and button similar to the example below.

(()=>{
    let accountInfoList = [];

let DOM = (function IIFE(){
   return {
        name: document.getElementById("name"),
        deposit: document.getElementById("deposit"),
        submit: document.getElementById("submit"),
        textArea: document.getElementById("textArea")
    };
})();

let createAcount = (name, deposit) => {
    return {
        name: name,
        deposit: deposit
    }
};

let btnHandler = () =>{
        if(DOM.name.value != "" && DOM.deposit.value != ""){
            accountInfoList.push(createAcount(DOM.name.value, DOM.deposit.value));
            DOM.textArea.innerHTML = "";
            accountInfoList.forEach(element => {
        
                DOM.textArea.innerHTML += "Account Name: " + element.name + " Balance : " + element.deposit + "\n";
                DOM.name.value = "";
                DOM.deposit.value = "";
            });
        }
       
    };

DOM.submit.addEventListener("click", btnHandler);
})();