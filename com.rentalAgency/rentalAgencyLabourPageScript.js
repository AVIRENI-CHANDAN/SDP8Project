var names = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var charges = [ 150, 125, 136, 148, 589, 745, 852, 126, 359, 856, 984, 695, 236, 849, 450, 586, 259, 359, 856, 984, 695, 236, 849, 450, 586, 259 ];
var section1 = document.getElementById('section1');
for (var i in names) {
    section1.innerHTML += `
                <div class="labourwrapper" style="margin-top:15px;margin-left:25px;width: 300px; display: flex;">
                    <div class="labourImgWrapper">
                        <img src="Avatar.webp" alt="err" height="100px"
                            style="margin-top:5px;margin-left: 15px;margin-right: 15px;border-radius: 15px;">
                    </div>
                    <div class="detailswrapper">
                        <table style="margin-top: 15px;margin-left: 10px;">
                            <tr>
                                <td>Name</td>
                                <td>`+ names[ parseInt(i) ] + `</td>
                            </tr>
                            <tr>
                                <td>Village</td>
                                <td>`+ names[ parseInt(i) ] + `</td>
                            </tr>
                            <tr>
                                <td>Cost per day </td>
                                <td>`+ charges[ parseInt(i) ] + `/-</td>
                            </tr>
                        </table>
                    </div>
                </div>
    `;
}