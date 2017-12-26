$(document).ready(function () {


    
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