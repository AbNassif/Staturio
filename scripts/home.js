const openMenuBtn = document.getElementById("openMenu");
const closeMenuBtn = document.getElementById("closeMenu");
const scrollToTopBtn = document.querySelector(".goTop");
const menu = document.getElementById("menu");

let menuIsOpen = false;
function toggleMenu() {
    menu.classList.toggle("showMenu");
    menuIsOpen = !menuIsOpen;
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

scrollToTopBtn.addEventListener("click", () => {
    if (menuIsOpen === true) {
        toggleMenu();
    }
})


/***************************************************************
                    Animation ON Scroll Costum
****************************************************************/


/***************************************************************
                        COUNT SECTION
****************************************************************/

const elementsWithCount = document.querySelectorAll(".box");
const test = document.querySelector(".box");


function addCount(textTag) {
    let maximumNumber = parseInt(textTag.getAttribute('data-number'));
    let currentNumber = parseInt(textTag.innerText) || 0;
    currentNumber+=Math.floor(maximumNumber / 100)
    textTag.innerText = currentNumber;
    return (currentNumber < maximumNumber) ? setTimeout(addCount.bind(this, textTag), 40) : textTag.innerText = maximumNumber + "+";
}

elementsWithCount.forEach(countBox => {
    document.addEventListener("aos:in:count", () => {
        addCount(countBox.lastElementChild)
    });
})

/***************************************************************
                            Form
****************************************************************/
