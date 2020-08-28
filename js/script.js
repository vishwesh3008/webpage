 $(document).ready(function(){
            $("#mycarousel").carousel( {interval:100} );
             $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    console.log("in pause");
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    console.log("in play");
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });           
        });
    
    $('#loginbutton').click(function(){
    	console.log("inside login modal");
    	$('#loginModal').modal('show');
    });
    $('#close-button,#cancel').click(function(){
    	console.log("closing login modal");
    	$('#loginModal').modal('hide');
    });
    $('#reservationModalbutton').click(function(){
    	console.log("inside reservation modal");
    	$('#reservationModal').modal('show');
    });
     $('#close-rsbutton,#cancelrsbutton').click(function(){
    	console.log("closing reservation modal");
    	$('#reservationModal').modal('hide');
    });