$(document).ready(function () {



    $(".buy-list li").click(function(){
        $(".buy-list li").removeClass("activeClass");
        $(this).addClass("activeClass");

        $('html, body').animate({
            scrollTop: $("#payment-list-section").offset().top
        }, 2000);

        
        $(".select_options>span").removeClass("selected");
      

    })


    $(".payment-list li").click(function(){
        $(".payment-list li").removeClass("activeClass");
        $(this).addClass("activeClass");

        $('html, body').animate({
            scrollTop: $("#calculator").offset().top
        }, 2000);

    })
    
                $(".owl-carousel").owlCarousel({
                    autoPlay: 3000, //Set AutoPlay to 3 seconds
                    dots: true,
                    items:1,
                    itemsDesktop: [1199, 1],
                    itemsDesktopSmall: [979, 1]   
                });




                  /*===Fancy Select===*/
    jQuery("body").on("click",".select_triger",function(e){
        var $this = jQuery(this);
        jQuery(this).parent(".fancy_select").find(".select_options").slideToggle();
    });
    $("body").on("click",".select_options span",function(e){
        var $this = jQuery(this);
        var text;
        var src;
        jQuery(".select_options span").removeClass("selected");
        jQuery(this).addClass("selected");
        text = jQuery(this).text();
        src = jQuery(this).find('img.absoluteLeft').attr('src');
        console.log(src);
        jQuery(this).parents(".fancy_select").find("span.text").text(text);
        jQuery(this).parents(".fancy_select").find("span.text").text(text);
        this.selectedOption = text;
        jQuery(this).parents(".fancy_select").find(".select_triger img").attr('src',src);
        jQuery(this).parents(".fancy_select").find(".select_options").slideUp();

         if(this.selectedOption == "BITCOIN"){
            self.tokenType = "Bitcoins";
            self.bitCoinCheck = true;
            self.ethereumCheck = false;
            self.liteCoinCheck = false;
             self.wireCheck=false;
             self.creditCardCheck=false;
         }else
         if(this.selectedOption == "LITECOIN"){
            self.tokenType = "LiteCoins";
            self.bitCoinCheck = false;
            self.ethereumCheck = false;
            self.liteCoinCheck = true;
           self.wireCheck=false;
           self.creditCardCheck=false;
         }else
         if(this.selectedOption == "ETHEREUM"){
            self.tokenType = "Ethers";
            self.bitCoinCheck = false;
            self.ethereumCheck = true;
            self.liteCoinCheck = false;
            self.wireCheck=false;
            self.creditCardCheck=false;
         }else
         if(this.selectedOption == "WIRE TRANSFER"){
            self.tokenType = "Ethers";
            self.bitCoinCheck = false;
            self.ethereumCheck = false;
            self.liteCoinCheck = false;
            self.wireCheck=true;
            self.creditCardCheck=false;
         }else
         if(this.selectedOption == "CREDIT CARD"){
            self.bitCoinCheck = false;
            self.ethereumCheck = false;
            self.liteCoinCheck = false;
            self.wireCheck=false;
            self.creditCardCheck=true;
         }
       console.log(this.bitcoinCheck,self.ethereumCheck ,this.litecoinCheck)
    });
    
    $('body').on("click", function (e) {
        if (jQuery(e.target).closest('.select_triger').length === 0) {
            jQuery(".fancy_select .select_options").slideUp();
            
        }
    });
    
    jQuery("body").on("click",".color-select .select_options span",function(e){
        var $this = $(this);
        var text;
        jQuery(".select_options span").removeClass("selected");
        jQuery(this).addClass("selected");
        text = jQuery(this).html();
        jQuery(this).parents(".fancy_select").find(".select_triger span").html(text);
        jQuery(this).parents(".fancy_select").find(".select_options").slideUp();
    });

    
});

function showBuy(){
    $(".homepage-content").hide();
    $(".buy-section").show();
}


AOS.init();



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });