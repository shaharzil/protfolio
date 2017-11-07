var gProjs = [
  {
    id: "sokoban",
    name: "Sokoban",
    title: "Better push those carrots",
    desc: "Sokoban is a type of transport puzzle,\
     in which the player(the bunny) pushes carrots or crates around in a warehouse,\
      trying to get them to storage locations.",
    publishedAt: 1448693940000,
    link:"../projs/sprint1/game2index.html",
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "Minesweeper",
    name: "Minesweeper",
    title: "Dont hit those bombs",
    desc: "Minesweeper is a single-player puzzle video game.\
    The objective of the game is to clear a rectangular board containing hidden mines or bombs without detonating any of them,\
    with help from clues about the number of neighboring mines in each field.",
    publishedAt: 1448693940000,
    link:"../projs/sprint1/game1index.html",    
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "touchNums",
    name: "Touch Nums",
    title: "",
    desc: "",
    publishedAt: 1448693940000,
    link:"../projs/touch-nums/index.html",    
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "inPicture",
    name: "In Picture",
    title: "Pick the right sentence",
    desc: "In this game, the user need to pick the sentence that describes the picture.",
    publishedAt: 1448693940000,
    link:"../projs/in-picture/index.html",    
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "Chess",
    name: "Chess",
    title: "",
    desc: "",
    publishedAt: 1448693940000,
    link:"../projs/Chess/index.html",    
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "balloonPop",
    name: "Balloons pop",
    title: "Pop the baloons!",
    desc: "",
    publishedAt: 1448693940000,
    link:"../projs/balloon-pop/index.html",    
    labels: ["Matrixes", "keyboard events"],
  },
]

function initPage() {
  renderGalley(gProjs)
  renderPopup(gProjs)
}


function renderGalley(projs) {
  var strHtml = '';
  for (var i = 0; i < projs.length; i++) {
    strHtml += ' \
    <div class="col-md-4 col-sm-6 portfolio-item">\
    <a class="portfolio-link" data-toggle="modal" href="#proj'+ i + 1 + '">\
      <div class="portfolio-hover">\
        <div class="portfolio-hover-content">\
          <i class="fa fa-plus fa-3x"></i>\
        </div>\
      </div>\
      <img class="img-fluid" src="img/portfolio/'+ projs[i].id + '.jpg" alt="">\
    </a>\
    <div class="portfolio-caption">\
      <h4>'+ projs[i].name + '</h4>\
      <p class="text-muted">'+ projs[i].title + '</p>\
    </div>\
  </div>'
  }
  var elProj = document.querySelector('.projsContainer');
  elProj.innerHTML = strHtml;
}

function renderPopup(projs) {
  var strHtml = '';
  for (var i = 0; i < projs.length; i++) {
    strHtml += ' \
    <div class="portfolio-modal modal fade" id="proj'+ i + 1 + '" tabindex="-1" role="dialog" aria-hidden="true">\
    <div class="modal-dialog">\
      <div class="modal-content">\
        <div class="close-modal" data-dismiss="modal">\
          <div class="lr">\
            <div class="rl"></div>\
          </div>\
        </div>\
        <div class="container">\
          <div class="row">\
            <div class="col-lg-8 mx-auto">\
              <div class="modal-body">\
                <!-- Project Details Go Here -->\
                <h2>'+ projs[i].name + '</h2>\
                <p class="item-intro text-muted">'+ projs[i].title + '</p>\
                <img class="img-fluid d-block mx-auto" src="img/portfolio/'+ projs[i].id + '.jpg" alt="">\
                <p>'+ projs[i].desc + '</p>\
                <ul class="list-inline">\
                  <li>Date: January 2017</li>\
                  <li>Client: Threads</li>\
                  <li>Category: Illustration</li>\
                  <li><a href="'+projs[i].link+'">Go to the game!</a></li>\
                </ul>\
                <button class="btn btn-primary" data-dismiss="modal" type="button">\
                    <i class="fa fa-times"></i>\
                    Close Project</button>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>\
    </div>\
  </div>'
  }
  var elProj = document.querySelector('.projContainer');
  elProj.innerHTML = strHtml;
}

function openMail() {
  var myMail = 'shchar@zilberman.org'
  var subject = document.querySelector('#subject').value
  var massage = document.querySelector('#massage').value
  var str = 'https://mail.google.com/mail/?view=cm&fs=1&to='+ myMail +'&su='+ subject +'&body='+ massage +''
    window.open(str);
}




(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict
