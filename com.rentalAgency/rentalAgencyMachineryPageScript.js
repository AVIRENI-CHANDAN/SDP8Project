var rents = [
    21000, 22000, 23000, 45000, 12000, 23000, 42000, 52000, 21000, 22000,
    23000, 45000, 12000, 23000, 42000, 52000, 22000, 23000, 45000, 12000,
    23000, 42000, 52000, 21000, 22000, 23000, 45000, 12000, 23000, 42000, 52000
];
var machinecount = 31;
console.log("in js file");
var machinerwrapper = document.getElementsByClassName('machinewrapper');
var section1 = document.getElementById('section1');
// section1.innerHTML = `
//     <div class="machinewrapper" style = "height: 3cm;display: flex;">
//         <div class="picwrapper" style="width: 25 %;">
//             <img src="./Machinery/1.jpg" alt="img err" class="machinePic" style="height: 100px;margin - left: 5px;">
//         </div>
//         <div class="contentwrapper" style="width: 75%;">
//             <table class="machineryData">
//                 <tr>
//                     <td style="width: 50%;">Title</td>
//                     <td style="width: 50%;">Tech mahindra</td>
//                 </tr>
//                 <tr>
//                     <td style="width: 50%;">Description</td>
//                     <td style="width: 50%;">
//                         A powerful machine to invest and plow to make farmer rich
//                     </td>
//                 </tr>
//                 <tr>
//                     <td style="width: 50%;">Category</td>
//                     <td style="width: 50%;">Farming machine</td>
//                 </tr>
//                 <tr>
//                     <td style="width: 50%;">Rent per month</td>
//                     <td style="width: 50%;">12000/-</td>
//                 </tr>
//             </table>
//         </div>
//     </div>
// `;
for (var i in rents) {
    // console.log("Loop rents", i);
    section1.innerHTML += `
        <div class="machinewrapper" style = "height: 3cm;display: flex;">
            <div class="picwrapper" style="width: 25%;overflow:hidden;margin-left:10px;">
                <img src="./Machinery/`+ ((parseInt(i, 10) + 1)) + `.jpg" alt="img err" class="machinePic" style="height: 100px;">
            </div>
            <div class="contentwrapper" style="width: 75%;">
                <table class="machineryData">
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
                        <td style="width: 50%;">`+ rents[ i ] + `/-</td>
                    </tr>
                </table>
            </div>
        </div>
    `;
}
