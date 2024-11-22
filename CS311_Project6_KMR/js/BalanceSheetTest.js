
function addCurrentAssets(){
    var cash$ = parseInt(document.getElementById("cash").value);
    var inventory$ = parseInt(document.getElementById("inventory").value);
    var supplies$ = parseInt(document.getElementById("supplies").value);
    var temporaryInvestments$ = parseInt(document.getElementById("temporaryInvestments").value);
    var currentAssets$ = cash$+inventory$+supplies$+temporaryInvestments$; 
        document.getElementById("currentAssets").innerHTML = currentAssets$;
        
}


function addCurrentLiabilities() {
var accountsPayable$ = parseInt(document.getElementById("accountsPayable").value);
var notesPayable$ = parseInt(document.getElementById("notesPayable").value);
var interestPayable$ = parseInt(document.getElementById("interestPayable").value);
var wagesPayable$ = parseInt(document.getElementById("wagesPayable").value);
var accruedExpenses$ = parseInt(document.getElementById("accruedExpenses").value);
var currentLiabilities$ = accountsPayable$+notesPayable$+interestPayable$+wagesPayable$+accruedExpenses$;
    document.getElementById("currentLiabilities").innerHTML = currentLiabilities$;
}


function addInvestmentProp() {
var land$ = parseInt(document.getElementById("land").value);
var buildingImprovements$ = parseInt(document.getElementById("buildingImprovements").value);
var equipment$ = parseInt(document.getElementById("equipment").value);
var tempInvestments$ = parseInt(document.getElementById("tempInvestments").value);
var investmentProp$ = land$+buildingImprovements$+equipment$+tempInvestments$;
    document.getElementById("investmentProp").innerHTML = investmentProp$;
}

function addLTL() {
var notesLTL$ = parseInt(document.getElementById("notesLTL").value);
var bondsLTL$ = parseInt(document.getElementById("bondsLTL").value);
var ltl$ = notesLTL$+bondsLTL$;
    document.getElementById("ltl").innerHTML = ltl$;
 }

function addIntangibles() {
var tradeNames$ = parseInt(document.getElementById("tradeNames").value);
var goodwill$ = parseInt(document.getElementById("goodwill").value);
var intangibles$ = tradeNames$+goodwill$;
    document.getElementById("intangibles").innerHTML = intangibles$;
    
}
 
function calculatePosition() {
    var totalAssets = currentAssets$ + investmentProp$ + intangibles$;
        document.getElementById("totalAssets").innerHTML = totalAssets;
    var totalLiabilities = currentLiabilities$ + ltl$;
        document.getElementById("totalLiabilities").innerHTML = totalLiabilities;
    var totalPosition = totalAssets - totalLiabilities;
        document.getElementById("totalPosition").innerHTML = totalPosition;
   
}

$('.currency-usd').each(function() {
    var monetary_value = $(this).text();
    var i = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(monetary_value);
    $(this).text(i);
});
    