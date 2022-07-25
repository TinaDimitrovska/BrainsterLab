// Navbar 

$(function () {
    'use strict'
  
    $('[data-toggle="offcanvas"]').on('click', function () {
      $('.offcanvas-collapse').toggleClass('open')
    })
         
  })

// Forma 

$(function() {
  var dd1 = new dropDown($('#myDropdown'));
  
  $(document).click(function() {
    $('.wrapper-dropdown').removeClass('active');
  });
});

function dropDown(el) {
  this.dd = el;
  this.placeholder = this.dd.children('span');
  this.opts = this.dd.find('ul.dropdown > li');
  this.val = '';
  this.index = -1;
  this.initEvents();
}
dropDown.prototype = {
  initEvents: function() {
    var obj = this;
    
    obj.dd.on('click', function() {
      $(this).toggleClass('active');
      return false;
    });
    
    obj.opts.on('click', function() {
      var opt = $(this);
      obj.val = opt.text();
      obj.index = opt.index();
      obj.placeholder.text(obj.val);
    });
  }
}

// Filters 

let filterInput = document.querySelectorAll('.filter-input');
let projectCards = document.querySelectorAll('.project-card');
 
filterInput.forEach(Element => {
    Element.addEventListener('click', function()
    { filterInput.forEach(filter =>  {
        if (this.checked) {
            if (filter.id !== this.id) {
                filter.checked = false;
            } else {
                projectCards.forEach(card => {
                    if(card.id !== Element.id) {
                        card.style.display = 'none';

                    } else {
                        card.style.display = 'inline-block';
                    }
                })
            }
        } else {
            projectCards.forEach(card => card.style.display = 'inline-block');
        }
    })

    })
})






































































































  
  
  
  
































