const input = document.getElementById("input")
const result = document.getElementById("result")
const inputSelect = document.getElementById("inputSelect")
const resultSelect = document.getElementById("resultSelect")

input.addEventListener("keyup", resultV)
inputSelect.addEventListener("change", resultV)
resultSelect.addEventListener("change", resultV)

let inputValue = inputSelect.value
let resultValue = resultSelect.value

function resultV() {
    inputValue = inputSelect.value
    resultValue = resultSelect.value

    if (inputValue === "kilometer") {
        if (resultValue === "kilometer") {
            result.value = input.value
        }
        if (resultValue === "meter") {
            let r = Number(this.value)
            if (!Number.isInteger(r)) {
                let newResult = r * 1000
                r = newResult.toFixed(2)
                result.value = r
            }
            else {
                result.value = r * 1000
            }
        }
        if (resultValue === "centimeter") {
            let r = Number(this.value)
            if (!Number.isInteger(r)) {
                let newResult = r * 100000
                r = newResult.toFixed(2)
                result.value = r
            }
            else {
                result.value = r * 100000
            }
        }
    }



    if (inputValue === "meter") {
        if (resultValue === "kilometer") {
            let r = Number(this.value)
            if (!Number.isInteger(r)) {
                let newResult = r / 1000
                r = newResult.toFixed(2)
                result.value = r
            }
            else {
                result.value = r / 1000
            }

        }
        if (resultValue === "meter") {
            result.value = input.value
        }
        if (resultValue === "centimeter") {
            let r = Number(this.value)
            if (!Number.isInteger(r)) {
                let newResult = r * 100
                r = newResult.toFixed(2)
                result.value = r
            }
            else {
                result.value = r * 100
            }

        }

    }

    if (inputValue === "centimeter") {
        if (resultValue === "kilometer") {
            let r = Number(this.value)
            if (!Number.isInteger(r)) {
                let newResult = r / 100000
                r = newResult.toFixed(2)
                result.value = r
            }
            else {
                result.value = r / 100000
            }
        }
        if (resultValue === "meter") {
            let r = Number(this.value)
            if (!Number.isInteger(r)) {
                let newResult = r / 100
                r = newResult.toFixed(2)
                result.value = r
            }
            else {
                result.value = r / 100
            }
        }
        if (resultValue === "centimeter") {
            result.value = input.value
        }
    }
}