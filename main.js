function name(a){
    if (a=="")alert("You forget enter the name!");
    for(let i=0;i<a.length; i++){
    if((a[i]=='0')||(a[i]=='1')||(a[i]=='2')||(a[i]=='3')||(a[i]=='4')||(a[i]=='5')||(a[i]=='6')||(a[i]=='7')||(a[i]=='8')||(a[i]=='9'))
    {alert("Your name shouldn`t have numbers!"); return;}
    }
}
function number(a){
    if (a==""){alert("You forget enter your phone number!");return;}
    if((a.length!=10)&&(a.length!=13)){alert("Wrong length !");return;}
    if((a.length==13)&&(a[0]!='+')){alert("First symbol should be '+'!");return;}
    let i;
    if(a.length==13){i=1}
    else{i=0}
    for(i;i<a.length; i++){
        if((a[i]=='0')||(a[i]=='1')||(a[i]=='2')||(a[i]=='3')||(a[i]=='4')||(a[i]=='5')||(a[i]=='6')||(a[i]=='7')||(a[i]=='8')||(a[i]=='9'))
        {}else {alert("Your number should have only digits!"); return;}
        }
}
function age(a){
    if(a==0){alert("You forget enter age!");return;}
    if((a<=0) || a>100){alert("Wrong age!");}
}
function yes_no(){
    var rad=document.getElementsByName('yn');
        if ((!rad[0].checked)&&(!rad[1].checked)) {alert("Choose 'Yes or No'!");return;}
}
function check(){
    var ch1=document.getElementById("junior");
    var ch2=document.getElementById("middle");
    var ch3=document.getElementById("senior");
    if(!ch1.checked&&!ch2.checked&&!ch3.checked){alert("Choose your programming level!")};
    if(ch1.checked&&(ch2.checked || ch3.checked)){alert("Choose only one answer!");return;};
    if(ch2.checked&&(ch1.checked || ch3.checked)){alert("Choose only one answer!");return;};
    if(ch3.checked&&(ch2.checked || ch1.checked)){alert("Choose only one answer!");return;};
}
function funct(){
    var formElements=document.getElementById("survey-form").elements;  
     //валідація імені
    var a=formElements[0].value;
    name(a);
    //valid age
    a=formElements[2].value;
    age(a);
     //valid number
    a=formElements[3].value;
     number(a);
     //valid radiobuttons
    yes_no();
    //valid checkbox
    check();
}
        