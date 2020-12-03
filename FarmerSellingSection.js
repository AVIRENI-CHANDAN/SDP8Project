const cropPrices = {
    0: 255.5,
    1: 59.7,
    2: 50.45,
    3: 250
}
function calculateThePrice() {
    // const cropType = document.getElementById("crops");
    var x = document.getElementById("crops").selectedIndex;
    var indvalCropSelected = document.getElementsByTagName("option")[ x ].value;
    // console.log(indvalCropSelected);
    // console.log(document.getElementsByTagName("option")[x].text);
    // const cropSelected = document.getElementById("theCropSelected");
    // cropSelected.innerHTML = document.getElementsByTagName("option")[x].text;
    // The below is the equiuvlanet of the above two statements
    (document.getElementById("theCropSelected")).innerHTML = (document.getElementsByTagName("option")[ x ].text);
    var valueOfTheUnitCrop = (document.getElementById("theCropUnitPrice"));
    valueOfTheUnitCrop.innerHTML = (cropPrices[indvalCropSelected] + " ₹").toString();
    // console.log(valueOfTheUnitCrop.innerHTML);
    var inputWeight = document.getElementById("yieldWeight").value;
    // console.log(inputWeight);
    // console.log(typeof inputWeight);
    inputWeight = parseFloat(inputWeight);
    // console.log(typeof inputWeight);
    // console.log(inputWeight);
    var priceOfYield = cropPrices[ indvalCropSelected ] * inputWeight;
    var amountinwords = inWords(Math.floor(priceOfYield));
    // console.log(amountinwords);
    (document.getElementById("theCalculatedCropPrice")).innerHTML = numberWithCommas(priceOfYield.toFixed(2));
    (document.getElementById("theCalculatedCropPriceInWords")).innerHTML = amountinwords;
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// To convert to words

var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}