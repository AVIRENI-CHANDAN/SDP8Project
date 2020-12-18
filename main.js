var usr1 = {
    "123001": "Password001", "123002": "Password002", "123003": "Password003", "123004": "Password004", "123005": "Password005"
}
// Farmers
var usr2 = {
    "124001": "Password001", "124002": "Password002", "124003": "Password003", "124004": "Password004", "124005": "Password005"
}
// Rental agencies
var usr3 = {
    "125001": "Password001", "125002": "Password002", "125003": "Password003", "125004": "Password004", "125005": "Password005"
}
// Consumers
function validate() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if (username.value == "" || password.value == "") {
        alert("Please fill the username and password");
        return;
    }
    else {
        for (const [ key, value ] of Object.entries(usr1)) {
            if (key == username.value && value == password.value) {
                // window.location.replace('https://www.google.com');//Working
                // window.location.href = "https://www.google.com/"; //Working
                // window.location.assign("https://www.google.co.in");//Working
                // window.location = "https://www.google.co.in";//Working
                // self.location = "http://net-informations.com";//Working
                document.getElementById("myForm").action = "./com.farmer/FarmerHomePage.html";
                return;
            }
        }
        for (const [ key, value ] of Object.entries(usr2)) {
            // alert(key);
            // alert(value);
            if (key == username.value && value == password.value) {
                // alert("Cat2 user");
                // window.location.replace('https://www.google.com');//Working
                // window.location.href = "https://www.google.com/"; //Working
                // window.location.assign("https://www.google.co.in");//Working
                // window.location = "https://www.google.co.in";//Working
                // self.location = "http://net-informations.com";//Working
                document.getElementById("myForm").action = "./com.rentalAgency/rentalAgencyHomePage.html";
                return;
            }
        }
        for (const [ key, value ] of Object.entries(usr3)) {
            if (key == username.value && value == password.value) {
                // window.location.replace('https://www.google.com');//Working
                // window.location.href = "https://www.google.com/"; //Working
                // window.location.assign("https://www.google.co.in");//Working
                // window.location = "https://www.google.co.in";//Working
                // self.location = "http://net-informations.com";//Working
                document.getElementById("myForm").action = "Page2.html";
                return;
            }
        }
    }
    alert("Invalid user credentials");
}