module.exports = function solveEquation(equation) {
    let a,b,c;
    let Arr=[];
    a= Number(equation.slice(0, equation.indexOf(" * x^2")).replace(" ",""));
    b= Number(equation.slice(equation.indexOf(" * x^2 ")+7, equation.indexOf(" * x ")).replace(" ",""));
    c= Number(equation.slice(equation.indexOf(" * x ")+5, equation.length).replace(" ",""));
    
    if(a!==0&&b^2>4*a*c){
        Arr[0]=Math.round((-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a));
        Arr[1]=Math.round((-b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a));
        return Arr.sort((left,right)=> left-right);
    }
    else{
        return undefined;
    }
}