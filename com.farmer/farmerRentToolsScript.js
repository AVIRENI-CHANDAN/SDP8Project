//

// Note: On adding to the cart section there is an addition of "unitprice" property 
//      that holds the original value of the tool which is generally overwritten in 
//      other function so as to ensure the safety of unitprice for any further calculations


// 
// The below appends all the machinery in the machinery folder to the machineContainer.
// But the no.of loops to be changed upon adding the machinery.
var machinesRent = [
    22000, 25000, 26000, 25800, 45000, 56000, 45000, 23000, 52000, 63000,
    22000, 25000, 26000, 25800, 45000, 56000, 45000, 23000, 52000, 63000,
    22000, 25000, 26000, 25800, 45000, 56000, 45000, 23000, 52000, 63000, 69000
];
var toolsRent = [
    2200, 2500, 2600, 2500, 4500, 5000, 4000, 3000, 5000, 6000,
    2200, 2500, 2600, 2500, 4500, 5000, 4000, 2000, 2000, 6000,
    2200, 2500, 2600, 2500, 4500, 5000, 4000, 3000, 2000, 6000, 9000
];

var machineContainer = document.getElementById('machineContainer');
for (let i = 0; i < 31; i++) {
    machineContainer.innerHTML += `
                    <button class="machinewrapper" id="machineOrderClick" style="margin-bottom:15px" onclick="addToCart(this)">
                        <div class="machinepicwrapper" style="width: 50%;overflow:hidden;">
                            <img src="./Machinery/`+ (i + 1) + `.jpg" alt="img err" style="
                                                display: block;
                                                margin-left: auto;
                                                margin-right: auto;
                                                max-height: 100px;
                                                height:auto;
                                                max-width:100%;
                                                overflow: hidden;
                                            ">
                        </div>
                        <div class="machinedetailswrapper">
                            <table class="machineryData" style="text-align:justify;">
                                <tr>
                                    <td style="width: 50%;">Title</td>
                                    <td style="width: 50%;">Tech mahindra</td>
                                </tr>
                                <tr>
                                    <td style="width: 50%;">Description</td>
                                    <td style="width: 50%;">
                                        A powerful machine to invest and plow to make farmer rich
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 50%;">Category</td>
                                    <td style="width: 50%;">Farming machine</td>
                                </tr>
                                <tr>
                                    <td style="width: 50%;">Rent per month</td>
                                    <td style="width: 50%;"><span id="costContainer" class="costContainer" style="color:green;font-weight:bold;">`+ machinesRent[ i ] + `</span>
                                        ₹</td>
                                </tr>
                            </table>
                        </div>
                    </button>
    `;
}

// The below will add all the tools in the tools folder.
// But the number of tools viewed is limited by the number in the loop but not recognised by the contents of the folder.
var toolContainer = document.getElementById('toolContainer');
for (let i = 0; i < 31; i++) {
    toolContainer.innerHTML += `
                    <button class="machinewrapper" id="toolsOrderClick" style="margin-bottom:15px" onclick="addToCart(this)">
                        <div class="machinepicwrapper" style="width: 50%;overflow:hidden;">
                            <img src="./Tools/`+ (i + 1) + `.jpg" alt="img err" style="
                                                                display: block;
                                                                margin-left: auto;
                                                                margin-right: auto;
                                                                height: 100px auto;
                                                                max-height:100px;
                                                                max-width: 100%;
                                                                overflow: hidden;
                                                            ">
                        </div>
                        <div class="machinedetailswrapper">
                            <table class="machineryData" style="text-align:justify;">
                                <tr>
                                    <td style="width: 50%;">Title</td>
                                    <td style="width: 50%;">Tech mahindra</td>
                                </tr>
                                <tr>
                                    <td style="width: 50%;">Description</td>
                                    <td style="width: 50%;">
                                        A powerful machine to invest and plow to make farmer rich
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 50%;">Category</td>
                                    <td style="width: 50%;">Farming machine</td>
                                </tr>
                                <tr>
                                    <td style="width: 50%;">Rent per day</td>
                                    <td style="width: 50%;"><span id="costContainer" class="costContainer" style="color:green;font-weight:bold;">`+ toolsRent[ i ] + `</span> ₹
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </button>
    `;
}

function addToCart(ele) {
    // console.log(ele);
    let cart = document.getElementById('orderWrapper');
    let eleclone = ele.cloneNode(true);
    let divtag = document.createElement("div");
    let totalAmountValue = document.getElementById('totalAmountValue');
    divtag.className = "cartWrapper";
    divtag.append(eleclone);
    eleclone.setAttribute('onclick', 'removeFromCart(this)');

    Object.defineProperty(divtag, 'unitprice', {
        value: parseInt(divtag.childNodes[ 0 ].childNodes[ 3 ].childNodes[ 1 ].childNodes[ 1 ].childNodes[ 6 ].childNodes[ 3 ].childNodes[ 0 ].innerHTML),
        writable: false
    });

    let divtagchild = document.createElement("div");
    let divtagchildsections = document.createElement("div");
    divtagchildsections.className = "timeWrapperTimeSections";
    divtagchildsections.style = "display:flex";

    let divtagchildleftsection = document.createElement("section");
    divtagchildleftsection.className = "timeWrapperSection1";
    let divtagchildrightsection = document.createElement("section");
    divtagchildrightsection.className = "timeWrapperSection2";

    divtagchildleftsection.style = "width:50%;";
    divtagchildrightsection.style = "width:50%;";

    let timeWrapperDaysInput = document.createElement("input");
    timeWrapperDaysInput.className = "timeWrapperDaysInput";
    timeWrapperDaysInput.type = "text";
    timeWrapperDaysInput.style = "width:100%;border:1px 0px;";
    timeWrapperDaysInput.placeholder = "No of days/months";
    timeWrapperDaysInput.value = 1;
    timeWrapperDaysInput.setAttribute('oninput', 'calcTheRent(this)');
    divtagchildleftsection.appendChild(timeWrapperDaysInput);

    divtagchildrightsection.innerHTML = "Decimals aren't allowed";
    divtagchildrightsection.style = "font-size:10px;color:red;font-weight:bold;margin-top:10px;transform:translateX(50%) translateY(-50%);";


    divtagchild.className = "timeWrapper";
    divtagchild.style = "display=block;";
    divtagchildsections.appendChild(divtagchildleftsection);
    divtagchildsections.appendChild(divtagchildrightsection);
    divtagchild.appendChild(divtagchildsections);
    divtag.appendChild(divtagchild);

    cart.append(divtag);
    // console.log("The divtag used is", divtag);
    var rentToBePaid = parseInt(totalAmountValue.innerHTML) + parseInt(ele.getElementsByClassName('costContainer')[ 0 ].innerHTML);
    // console.log(rentToBePaid);
    totalAmountValue.innerHTML = rentToBePaid.toString();
    // console.log("addToCartFunction", cart);
    // console.log(totalAmountValue);
}
function removeFromCart(elechild) {
    // console.log("In remove function");
    // console.log(ele.className);
    let ele = elechild.parentNode;
    // console.log("Parent node:", ele);
    // let cart = document.getElementById('orderWrapper');
    let rentToBePaid = parseInt(totalAmountValue.innerHTML) - parseInt(ele.getElementsByClassName('costContainer')[ 0 ].innerHTML);
    // let toRemove = document.getElementById('removed');
    totalAmountValue.innerHTML = rentToBePaid.toString();
    ele.setAttribute('onclick', '');
    ele.className = 'removed';
    ele.id = 'removed';
    // console.log(cart);
    // console.log("removeFromCartFunction", cart, cart.childElementCount);
    // console.log(toRemove);
}
function calcTheRent(elechild) {
    let ele = elechild.parentNode.parentNode.parentNode.parentNode;
    let userinput = parseInt(elechild.value);
    let totalAmountValuewrapper = document.getElementById('totalAmountValue');
    let unitvalue = ele.unitprice;
    let rentOnScrn = parseInt(ele.childNodes[ 0 ].childNodes[ 3 ].childNodes[ 1 ].childNodes[ 1 ].childNodes[ 6 ].childNodes[ 3 ].childNodes[ 0 ].innerHTML);
    totalAmountValuewrapper.innerHTML = (parseInt(totalAmountValuewrapper.innerHTML) - parseInt(rentOnScrn)).toString();
    // console.log(totalAmountValuewrapper);
    // console.log("The amount as per the .innerHTML", totalAmountValuewrapper.innerHTML);

    // console.log("The amount is", ele.childNodes[ 0 ].childNodes[ 3 ].childNodes[ 1 ].childNodes[ 1 ].childNodes[ 6 ].childNodes[ 3 ].childNodes[ 0 ].innerHTML);

    // console.log("The element is", ele);
    // console.log("The element using", ele.childNodes[ 0 ].childNodes[ 3 ].childNodes[ 1 ].childNodes[ 1 ].childNodes[ 6 ].childNodes[ 3 ].childNodes[ 0 ].innerHTML);
    // console.log("The test property is", ele.unitvalue);
    // console.log("After adding the unitvalue", ele, "the value is", ele.unitprice);
    // console.log(elechild);

    if (isNaN(userinput)) {
        userinput = 0;
    }
    if (userinput < 0) {
        userinput = 0;
    }
    elechild.value = userinput;

    let finalammount = unitvalue * userinput;

    // console.log(ele.childNodes[ 0 ].childNodes[ 3 ].childNodes[ 1 ].childNodes[ 1 ].childNodes[ 6 ].childNodes[ 3 ].childNodes[ 0 ].innerHTML);
    // console.log(typeof (ele.childNodes[ 0 ].childNodes[ 3 ].childNodes[ 1 ].childNodes[ 1 ].childNodes[ 6 ].childNodes[ 3 ].childNodes[ 0 ].innerHTML));
    // console.log("The unitvalue in calcTheRent", ele.unitprice);
    // console.log("Final amount is", finalammount);
    // console.log("Type of final amount", typeof finalammount);
    ele.childNodes[ 0 ].childNodes[ 3 ].childNodes[ 1 ].childNodes[ 1 ].childNodes[ 6 ].childNodes[ 3 ].childNodes[ 0 ].innerHTML = finalammount.toString();
    totalAmountValuewrapper.innerHTML = (parseInt(totalAmountValuewrapper.innerHTML) + finalammount).toString();
    // console.log("Calculations elements are \n finalamount", typeof finalammount, "->", finalammount, "\n unitvalue", typeof unitvalue, "->", unitvalue, "\n userinput", typeof userinput, "->", userinput);
    // console.log(finalammount.toString());
}
