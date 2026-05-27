import "/src/sass/style.scss";

let text = "Hello world";
const pi = 3.14;
const isOpen = false;

text = "Ayy lmao";

console.log(text);
console.log(pi);

const object = {
    name: "Ivan",
    age: 32,
};

const titles = [
    "Make your dream come true or decorate your home",
    "Create or buy",
    "Our store",
    "Our workshop",
    "Get in touch",
];

function calc(a, b) {
    console.log(a + b);
}

calc(81, 19);

if (isOpen) {
    console.log("Shop is open");
} else {
    console.log("Shop is closed");
}

const vase = document.querySelector(".touch__vase");

vase.addEventListener("click", () => {
    console.log(vase);
});
