'use strict';

var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
var gLastRes = null;


$(document).ready(init);

function init() {
    if (!localStorage.questsTree) {
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
    } else {
        var questsTree = JSON.parse(localStorage.questsTree);
        gQuestsTree = questsTree
    }
    gCurrQuest = gQuestsTree;
}

function startGuessing() {
    $('.gameStart').hide()
    renderQuest();
}

function renderQuest() {
    var $gameQuest = $(".gameQuest").children("h2")
    $gameQuest.text(gCurrQuest.txt);
    $('.gameQuest').show()
}

function userResponse(res) {

    if (gCurrQuest.yes === null && gCurrQuest.no === null) {
        if (res === 'yes') {
            alert('Yes, I knew it!');
            // TODO: improve UX
        } else {
            $('.gameQuest').hide()
            $('.gameNewQuest').show()
        }
    } else {
        gPrevQuest = gCurrQuest;
        gCurrQuest = gCurrQuest[res]
        gLastRes = res;
        renderQuest();
    }
}

function addGuess() {
    var newGuess = $('#newGuess').val()
    var newQuest = $('#newQuest').val()
    gPrevQuest[gLastRes] = createQuest(newQuest)
    gPrevQuest[gLastRes].no = gCurrQuest;
    gPrevQuest[gLastRes].yes = createQuest(newGuess)
    localStorage.questsTree = JSON.stringify(gQuestsTree);    
    restartGame();
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function restartGame() {
    $('.gameNewQuest').hide();
    $('.gameStart').show();
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
    gLastRes = null;
}
