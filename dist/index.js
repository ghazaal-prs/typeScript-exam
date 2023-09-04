"use strict";
const numberInput = [];
const input = document.querySelector("#input");
const randomNumberButton = document.querySelector("#randomNumber");
const firstPreparationButton = document.querySelector("#firstPreparation");
const DeleteButton = document.querySelector("#Delete");
randomNumberButton === null || randomNumberButton === void 0 ? void 0 : randomNumberButton.addEventListener("click", () => {
    const randomNumber = (Math.floor(Math.random() * 100000));
    input.value = randomNumber.toString();
    return input;
});
firstPreparationButton === null || firstPreparationButton === void 0 ? void 0 : firstPreparationButton.addEventListener("click", () => {
    var _a;
    const firstPreparation = {
        inputNumber: (_a = input === null || input === void 0 ? void 0 : input.value) !== null && _a !== void 0 ? _a : " ",
    };
    numberInput.push(firstPreparation);
});
console.log(numberInput);
DeleteButton === null || DeleteButton === void 0 ? void 0 : DeleteButton.addEventListener("click", () => {
    console.clear(),
        input.value = " ";
});
if (input) {
    alert(true);
}
else {
    alert(Error);
}
//# sourceMappingURL=index.js.map