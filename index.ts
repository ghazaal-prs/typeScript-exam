type inputType = {
  inputNumber: number | string;
};
type numberInputType = inputType[];

const numberInput: numberInputType = [];

const input = document.querySelector<HTMLInputElement>("#input");
const randomNumberButton =
  document.querySelector<HTMLButtonElement>("#randomNumber");
const firstPreparationButton =
  document.querySelector<HTMLButtonElement>("#firstPreparation");
const DeleteButton = document.querySelector<HTMLButtonElement>("#Delete");

randomNumberButton?.addEventListener("click" , () => {
    const randomNumber = (Math.floor(Math.random() *100000))
    input!.value = randomNumber.toString()
    return input
});

firstPreparationButton?.addEventListener("click" , () => {
    const firstPreparation : inputType = {
        inputNumber: input?.value?? " ",
    }
    numberInput.push(firstPreparation)
})
console.log(numberInput);

DeleteButton?.addEventListener("click" , () => {
console.clear() , 
input!.value = " "
})

if(input){
  alert(true)
}else {
  alert(Error)
}
