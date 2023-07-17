var output_text = document.getElementById("calculator_id");
var temp_text = "";
var elements = [];
var element_number = 0;
var math_symbol = [];
var equal = true;

function number_func(number){
    if(equal){
        c_func();
    }
    output_text.innerText += number;
    temp_text += number;
    console.log(output_text.textContent);
}

function shisoku_func(symbol){
    if(equal){
        output_text.innerText = "Ans"
        equal = false;
    }

    if(temp_text != ""){
        output_text.innerText += symbol;
        elements[element_number] = parseInt(temp_text);
        math_symbol[element_number] = symbol;
        temp_text = "";
        element_number += 1;
        console.log(output_text.textContent);

        console.log(elements);
        console.log(math_symbol);
    }

}

function equal_func(){
    if(equal || 
       temp_text == "" || 
       math_symbol.length == 0){

    }
    else {
        equal = true;

        if (temp_text != ""){
            elements[element_number] = parseInt(temp_text);
        }
        else{
            math_symbol.pop()
        }

        var solution = elements[0];

        for (var i = 0; i < elements.length; i++){
            if(math_symbol[i] == "+"){
                solution = solution + elements[i+1];
            }
            else if (math_symbol[i] == "-"){
                solution = solution - elements[i+1];
            }
            else if (math_symbol[i] == "×"){
                solution = solution * elements[i+1];
            }
            else if (math_symbol[i] == "÷"){
                solution = solution / elements[i+1];
            }
        }


        if (solution != "Infinity"){
            output_text.innerText += "=\n";
            output_text.innerText += solution;
        }
        else{
            output_text.innerText += "\n※間違った計算です"
        }
        console.log(elements);
        console.log(math_symbol);
        console.log(solution);
    }
}

function c_func(){
    equal = false;
    temp_text = "";
    elements = [];
    element_number = 0;
    math_symbol = [];
    output_text.innerText = "";
}
