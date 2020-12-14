// The below appends all the machinery in the machinery folder to the machineContainer. 
// But the no.of loops to be changed upon adding the machinery.
var machineContainer = document.getElementById('machineContainer');
console.log(machineContainer.innerHTML);
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
                                    <td style="width: 50%;"><span id="costContainer" class="costContainer">12000</span>
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
console.log(machineContainer.innerHTML);
for (let i = 0; i < 20; i++) {
    console.log("In the tools conatiner loop");
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
                                    <td style="width: 50%;"><span id="costContainer" class="costContainer">1200</span> ₹
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </button>
    `;
}

function addToCart(ele) {
    let cart = document.getElementById('orderWrapper');
    let eleclone = ele.cloneNode(true);
    // console.log(typeof eleclone.onclick);
    eleclone.setAttribute('onclick', 'removeFromCart(this)')
    // console.log(typeof eleclone.onclick);
    // console.log(eleclone.onclick);
    // console.log(ele);
    // console.log(ele.getElementsByClassName('costContainer')[ 0 ].innerHTML);
    cart.append(eleclone);
    var rentToBePaid = parseInt(document.getElementById('totalAmountValue').innerHTML) + parseInt(ele.getElementsByClassName('costContainer')[ 0 ].innerHTML);
    // console.log(rentToBePaid);
    document.getElementById('totalAmountValue').innerHTML = rentToBePaid.toString();
}
function removeFromCart(ele) {
    // console.log("In remove function");
    // console.log(ele.className);
    var rentToBePaid = parseInt(document.getElementById('totalAmountValue').innerHTML) - parseInt(ele.getElementsByClassName('costContainer')[ 0 ].innerHTML);
    document.getElementById('totalAmountValue').innerHTML = rentToBePaid.toString();
    ele.setAttribute('onclick', '');
    ele.className += ' removed';
    // console.log(cart);
}