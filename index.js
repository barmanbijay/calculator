     function divide()
        {
            document.calculator.output.value += "/";
        }
        function add()
        {
            document.calculator.output.value += "+";
        }
        function num9()
        {
            document.calculator.output.value += "9";
        }
        function num8()
        {
            document.calculator.output.value += "8";
        }
        function num7()
        {
            document.calculator.output.value += "7";

        }
        function multiply()
        {
            document.calculator.output.value += "*";
        }
        function percent()
        {
            document.calculator.output.value += "%";
        }
        function num6()
        {
            document.calculator.output.value += "6";
        }
        function num5()
        {
            document.calculator.output.value += "5";
        }

        function num4()
        {
            document.calculator.output.value += "4";
        }


        function subtr()
        {
            document.calculator.output.value += "-";
        }

        function num3()
        {
            document.calculator.output.value += "3";
        }

        function num2()
        {
            document.calculator.output.value += "2";
        }

        function num1()
        {
            document.calculator.output.value += "1";
        }

        function numZero()
        {
            document.calculator.output.value += "0";
        }

function buildFormula()
{
var evalu= alert(eval(document.calculator.output.value)) + document.clear();
document.calculator.output.value= evalu;
}

