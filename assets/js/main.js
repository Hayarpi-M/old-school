(function($) {
    /* Preloader start */
    let preloadTime;
    function preloader() {
      preloadTime = setTimeout(showPage, 350);
    }
    function showPage() {
      $("#preloader").css("display","none");
    }
    preloader();
    /* Preloader end */

    /*Main page slider start*/
    $('.pride-slider').slick({
        dots: false,
        arrows: true,
        fade: true,
        autoplay: true,
    }
    );
    /*Main page slider end*/

    /*Team page slider start*/
    $('.team-slider').slick({
      dots: false,
      arrows: true,
      fade: true,
      autoplay: true,
  }
  );
    /*Team page slider end*/
    
    /*Top question start*/
    $('.top-question').mouseover(function() {
      setTimeout(function() {
        $('.top-question').css('opacity', '0');
        $('.top-prompt').fadeIn(200);
      }, 200)
    })
    $('.top-prompt').mouseout(function() {
        setTimeout(function() {
          $('.top-question').css('opacity', '0.55');
        }, 200) 
        $('.top-prompt').fadeOut(200);
    })
    /*Benefits question start*/
    $('.benefits-question').mouseover(function(e) {
      let parent = e.currentTarget.closest("div.benefits__item");
      let parent2 = e.currentTarget.closest("div.rates-item__bottom");
      let parent3 = e.currentTarget.closest("ul.rates-item__text");
      let prompt = $(parent).children("div.benefits-prompt");
      let prompt2 = $(parent2).children("div.benefits-prompt");
      let prompt3 = $(parent3).children("div.benefits-prompt");
      setTimeout(function() {
        $(e.currentTarget).css('opacity', '0');
        $(prompt).fadeIn(200);
        $(prompt2).fadeIn(200);
        $(prompt3).fadeIn(200);
      }, 200)
    })
    $('.benefits-prompt').mouseout(function(e) {
      let parent = e.currentTarget.closest("div.benefits__item");
      let parent2 = e.currentTarget.closest("div.rates-item__bottom");
      let parent3 = e.currentTarget.closest("ul.rates-item__text");
      let question = $(parent).children("div.benefits-question");
      let question2 = $(parent2).children("div.benefits-question");
      let question3 = $(parent3).children("div.benefits-question");
        setTimeout(function() {
          $(question).css('opacity', '0.55');
          $(question2).css('opacity', '0.55');
          $(question3).css('opacity', '0.55');
        }, 200) 
        $(e.currentTarget).fadeOut(200);
        $(e.currentTarget).fadeOut(200);
        $(e.currentTarget).fadeOut(200);
    })

    /* ForYou question start*/
    $('.forYou-question').mouseover(function(e) {
      let parent = e.currentTarget.closest("div.forYou__item");
      let prompt = $(parent).children("div.forYou-prompt");
      setTimeout(function() {
        $(e.currentTarget).css('opacity', '0');
        $(prompt).fadeIn(200);
      }, 200)
    })
    $('.forYou-prompt').mouseout(function(e) {
      let parent = e.currentTarget.closest("div.forYou__item");
      let question = $(parent).children("div.forYou-question");
        setTimeout(function() {
          $(question).css('opacity', '0.55');
        }, 200) 
        $(e.currentTarget).fadeOut(200);
    })
    /* Cooperation question start */
    $('.cooperation-question').mouseover(function(e) {
      let parent = e.currentTarget.closest("h6.cooperation-item__name");
      let prompt = $(parent).children("div.cooperation-prompt");
      setTimeout(function() {
        $(e.currentTarget).css('opacity', '0');
        $(prompt).fadeIn(200);
      }, 200)
    })
    $('.cooperation-prompt').mouseout(function(e) {
      let parent = e.currentTarget.closest("h6.cooperation-item__name");
      let question = $(parent).children("div.cooperation-question");
     
        setTimeout(function() {
          $(question).css('opacity', '0.45');
        }, 200) 
        $(e.currentTarget).fadeOut(200);
    
    })
    /* Cooperation question end */
    /* Feedback question start */
    $('.feedback-question').mouseover(function(e) {
      let parent = e.currentTarget.closest("div.feedback-note");
      let parent1 = $(parent).closest("h4.feedback-top__title");
      let prompt = $(parent1).children("div.feedback-prompt");
      let question = $(parent).children("div.feedback-question");
      setTimeout(function() {
        $(question).css('opacity', '0');
        $(prompt).fadeIn(200);
      }, 200)
    })
    $('.feedback-prompt').mouseout(function(e) {
        setTimeout(function() {
          $(question).css('opacity', '0.55');
        }, 200) 
        $(e.currentTarget).fadeOut(200);
    })
    /* Feedback question end */

    /* Advantage button start */
    $('.advantage-item__top').click(function(e) {
      let target = $(this).children('div.advantage-item__plus');
      let parent = e.currentTarget.closest("div.advantage-item");
      let bottom = $(parent).children("div.advantage-item__bottom");
      const fade = { opacity: 0, transition: 'opacity 400ms' };
      if($(target).hasClass('active')) {
        $('div.advantage-item__plus').each(function() {
          $(this).removeClass("active");
        });
        $('div.advantage-item__bottom').not($(this)).css(fade).slideUp(500);
        $(bottom).css(fade).slideUp(500);
        $(target).removeClass("active");
      } else {
        $('div.advantage-item__plus').each(function() {
          $(this).removeClass("active");
        });
        $('div.advantage-item__bottom').not($(this)).css(fade).slideUp(500);
        $(bottom).css(fade).slideDown(500);
        $(target).addClass("active");  
      }
    })
    /* FAQ button start */
    $('.faq-item__top').click(function(e) {
      let target = $(this).children('div.faq-item__plus');
      let parent = e.currentTarget.closest("div.faq-item");
      let bottom = $(parent).children("div.faq-item__bottom");
      const fade = { opacity: 0, transition: 'opacity 400ms' };
      if($(target).hasClass('active')) {
        $('div.faq-item__plus').each(function() {
          $(this).removeClass("active");
        });
        $('div.faq-item__bottom').not($(this)).css(fade).slideUp(500);
        $(bottom).css(fade).slideUp(500);
        $(target).removeClass("active");
      } else {
        $('div.faq-item__plus').each(function() {
          $(this).removeClass("active");
        });
        $('div.faq-item__bottom').not($(this)).css(fade).slideUp(500);
        $(bottom).css(fade).slideDown(500);
        $(target).addClass("active");  
      }
    });

    /* Form validation */
    $.validator.addMethod('regex', function(value, element, regexp) {
        let regExsp = new RegExp(regexp);
        return this.optional(element) || regExsp.test(value)
    }, 'please check your input');
    function valEl(el) {
        el.validate({
          rules: {
            firstName: {
              required: true,
              regex: "[A-Za-z]{1,32}"
            },
            phoneNumber: {
              required: true,
              digits: true,
              minlength: 10,
              maxlength: 12,
              regex: "[0-9]+"
            },
          },
          messages: {
            firstName: 'Введите имя правильно',
            phoneNumber: 'Введите ваш номер правильно',
          },
          submitHandler: function(form) {   
            let $form = $(form);
            let $formId = $(form).attr('id');
            switch($formId) {
              case 'feedback-top__form':
                $.ajax({
                  type: 'POST',
                  url: $form.attr('action'),
                  data: $form.serialize()
                })
                .done(function() {
                    console.log('Succsess');
                })
                .fail(function() {
                    console.log('Fail');
                }) 
                .always(function () {
                  console.log('Always');
                  setTimeout(function() {
                    $form.trigger('reset');
                    $('.preloaderBg').fadeIn();
                  }, 1100);
                  setTimeout(function() {
                    $('.preloaderBg').fadeOut();
                    $('.feedback-popup').addClass('active');
                    $('body').addClass('body-fixed');
                  }, 1300);
                });
              break;
            }
            return false;
          }
        })
    };    
    $('.js-form').each(function() {
        valEl($(this));
    })
    /*Form validation end*/
    /*Feedback popup start*/
    $('.feedback-popup__overlay').click(function() {
        $('.feedback-popup').removeClass('active');
        $('body').removeClass('body-fixed');
    });
    $('.feedback-popup__close').click(function() {
        $('.feedback-popup').removeClass('active');
        $('body').removeClass('body-fixed');
    });
    /*Feedback popup end*/

    /* Responsive */
    if ($(window).width() < 1025) {
      $('section.reviews .reviews-wrapper').slick({
        dots: false,
        arrows: true,
        fade: true,
        autoplay: false,
        centerMode: true,
        variableWidth: true,
      });
    } 

    /* Menu burger */
    $('.menu-burger').click(function() {
      $('.header-menu').addClass('active');
      $('body').addClass('body-fixed');
    });
    $('.menu-close').click(function() {
      $('.header-menu').removeClass('active');
      $('body').removeClass('body-fixed');
    });
    
})(jQuery);