function generatePassword() {
    var len = parseInt(document.getElementById('length').value);
    var small = "abcdefghijklmnopqrstuvwxyz";
    var big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var sym = "!@#$%^&*()_+=-{}[]|\\:<>?/`~";
    var num = "0123456789";

    var password = small;
    if (document.getElementById("letterbox").checked)
        password += big;
    if (document.getElementById("numberbox").checked)
        password += num;
    if (document.getElementById("symbolbox").checked)
        password += sym;

    var newpass = '';
    for (var i = 0; i < len; i++) {
        var rnd = Math.floor(Math.random() * password.length);
        newpass += password[rnd];
    }
    var box = document.getElementById('password');
    if (len < 6) {
        alert("Password is too short, Try again!!");
        location.reload();
    }
    else if (len > 14) {
        alert("Password is too big, Try again!!");
        location.reload();
    }
    else
        box.innerHTML = newpass;
}
