console.log('Main');


// TODO:
// let the user select the preffered font-size

function savePrefs() {
    console.log('Saving...');

    var elSelectedColor = document.querySelector('#selectedColor');
    var color = elSelectedColor.value;
    var elSelectedBgColor = document.querySelector('#selectedBgColor');
    var bgColor = elSelectedBgColor.value;
    var elSelectedFontSize = document.querySelector('#selectedFontSize')
    var fontSize = selectedFontSize.value;

    var userPrefs = {color: color, bgColor: bgColor, fontSize: fontSize}

    var strUserPrefs = JSON.stringify(userPrefs);
    localStorage.userPrefs = strUserPrefs;

    applyPrefs();
}

function applyPrefs() {
    if (!localStorage.userPrefs) return;

    var userPrefs = JSON.parse(localStorage.userPrefs);
    console.log('Loaded user prefs', userPrefs);

    var elBody = document.querySelector('body');
    
    elBody.style.backgroundColor = userPrefs.bgColor;
    elBody.style.color = userPrefs.color;
    elBody.style.fontSize = userPrefs.fontSize + 'px';
}




displayUserName();

function displayUserName() {
    if (!localStorage.theUserName) {
        var userName = prompt('Your Name?')
        localStorage.theUserName = userName;
    }
    var elUserName = document.querySelector('.userName');
    elUserName.innerText = localStorage.theUserName;
}

function resetUser() {
    localStorage.theUserName = '';
    displayUserName();
}


