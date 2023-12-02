const firstButton = document.getElementById("Foo");
const secondButton = document.getElementById("Bar");
const thirdButton = document.getElementById("FooBar");
const main = document.querySelector("main");

firstButton.addEventListener('click', function() {
    const buttonHeader1 = document.createElement('h3');
    buttonHeader1.textContent = "Foo";
    main.appendChild(buttonHeader1);
})

secondButton.addEventListener('click', function() {
    const buttonHeader2 = document.createElement('h3');
    buttonHeader2.textContent = "Bar";
    main.appendChild(buttonHeader2);
})

thirdButton.addEventListener('click', function() {
    const buttonHeader3 = document.createElement('h2');
    buttonHeader3.textContent = "FooBar";
    main.appendChild(buttonHeader3);
})