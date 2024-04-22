// card items
const cardNumber = document.querySelector("[data-card-number]"),
name = document.querySelector("[data-name]"),
mm = document.querySelector("[data-mm]"),
yy = document.querySelector("[data-yy]"),
cvc = document.querySelector("[data-cvc]"),

// father items
formOne = document.querySelector("[data-form-one]"),
completedStateStart = document.querySelector("[data-Completed-state-start]"),

// inputs
inputName = document.querySelector("[data-input-name]"),
inputNumber = document.querySelector("[data-input-Number]"),
inputMm = document.querySelector("[data-input-MM]"),
inputYy = document.querySelector("[data-input-YY]"),
inputCvc = document.querySelector("[data-input-cvc]"),

// errors
errorName = document.querySelector("[data-error-name]"),
errorNumber = document.querySelector("[data-error-nuber]"),
errorMmYy = document.querySelector("[data-error-MM-YY]"),
errorCvc = document.querySelector("[data-error-cvc]"),

// btns
btn1 = document.querySelector("[data-btn-1]"),
btn2 = document.querySelector("[data-btn-2]");

// function inputs onkeyup
inputName.addEventListener("keyup", () => {
    if (inputName.value.toLowerCase() != "") {
        name.innerHTML = inputName.value;
    } else {
        name.innerHTML = `Jane Appleseed`;
    };
});

inputNumber.addEventListener("keyup", () => {
    if (inputNumber.value.toLowerCase() != "") {
        cardNumber.innerHTML = inputNumber.value;
    } else {
        cardNumber.innerHTML = `0000 0000 0000 0000`;
    };
});

inputMm.addEventListener("keyup", () => {
    if (inputMm.value.toLowerCase() != "") {
        mm.innerHTML = inputMm.value;
    } else {
        mm.innerHTML = `00`;
    };
});

inputYy.addEventListener("keyup", () => {
    if (inputYy.value.toLowerCase() != "") {
        yy.innerHTML = inputYy.value;
    } else {
        yy.innerHTML = `00`;
    };
});

inputCvc.addEventListener("keyup", () => {
    if (inputCvc.value.toLowerCase() != "") {
        cvc.innerHTML = inputCvc.value;
    } else {
        cvc.innerHTML = `000`;
    };
});

// formOne
btn1.addEventListener("click", () => {
    if (inputName.value.toLowerCase() == "" 
    || inputNumber.value.toLowerCase() == "" || inputNumber.value.length !== 19 
    || inputMm.value.toLowerCase() == "" || inputMm.value.length !== 2
    || inputYy.value.toLowerCase() == "" || inputYy.value.length !== 2
    || inputCvc.value.toLowerCase() == "" || inputCvc.value.length !== 3) 
    {
        // father items
        formOne.classList.remove("active");
        completedStateStart.classList.remove("active");
    } else {
        // father items
        formOne.classList.add("active");
        completedStateStart.classList.add("active");
    };

    if (inputName.value.toLowerCase() == "") {
        // input add active
        inputName.classList.add("active");

        // errors add actve
        errorName.classList.add("active");
    } else {
        // input add active
        inputName.classList.remove("active");

        // errors add
        errorName.classList.remove("active");
    };

    if (inputNumber.value.toLowerCase() == "" || inputNumber.value.length !== 19) {
        // input add active
        inputNumber.classList.add("active");

        // errors add actve
        errorNumber.classList.add("active");
    } else {
        // input add active
        inputNumber.classList.remove("active");

        // errors add
        errorNumber.classList.remove("active");
    };

    if (inputMm.value.toLowerCase() == "" || inputMm.value.length !== 2) {
        // input add active
        inputMm.classList.add("active");

        // errors add actve
        errorMmYy.classList.add("active");
    } else {
        // input add active
        inputMm.classList.remove("active");

        // errors add
        errorMmYy.classList.remove("active");
    };

    if (inputYy.value.toLowerCase() == "" || inputYy.value.length !== 2) {
        // input add active
        inputYy.classList.add("active");

        // errors add actve
        errorMmYy.classList.add("active");
    } else {
        // input add active
        inputYy.classList.remove("active");

        // errors add
        errorMmYy.classList.remove("active");
    };

    if (inputCvc.value.toLowerCase() == "" || inputCvc.value.length !== 3) {
        // input add active
        inputCvc.classList.add("active");

        // errors add actve
        errorCvc.classList.add("active");
    } else {
        // input add active
        inputCvc.classList.remove("active");

        // errors add
        errorCvc.classList.remove("active");
    };
});

// completedStateStart remove
btn2.addEventListener("click", () => {
    // father items
    formOne.classList.remove("active");
    completedStateStart.classList.remove("active");

    // inputs values ""
    inputName.value = "";
    inputNumber.value = "";
    inputMm.value = "";
    inputYy.value = "";
    inputCvc.value = "";

    // input remove active
    inputName.classList.remove("active");
    inputNumber.classList.remove("active");
    inputMm.classList.remove("active");
    inputYy.classList.remove("active");
    inputCvc.classList.remove("active");

    // errors
    errorName.classList.remove("active");
    errorNumber.classList.remove("active");
    errorMmYy.classList.remove("active");
    errorCvc.classList.remove("active");

    // items innerHTML
    name.innerHTML = `Jane Appleseed`;
    cardNumber.innerHTML = `0000 0000 0000 0000`;
    mm.innerHTML = `00`;
    yy.innerHTML = `00`;
    cvc.innerHTML = `000`;
});

// inputNumber space