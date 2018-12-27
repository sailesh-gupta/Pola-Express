$(document).ready(function(){
	var url="https://www.webkraze.in/design/phonegap/auth.php?callback=?";
    
    //search function
    $("#search").click(function(){
	
	//var search_url="https://www.webkraze.in/design/phonegap/search.php?callback=?";

        var address=$("#address").val();
		var group1 = $("input[name='group1']:checked").val();
		
		if($.trim(address).length>0 & $.trim(group1).length>0)
		{
		
     	var lat=$("#lat").val();
     	var lon=$("#lon").val();
		
		localStorage.lat=lat;
		localStorage.lon=lon;
		localStorage.group1=group1;
		
		$("#search").html('Searching...');
		window.location.href = "search.html";
		}
		else
		{
			alert("Please Select your Option/Address");
			return false;
		}
    });
    
	
	
	
    
	
	
	$("#book").click(function(){
    	
    	var group1 = $("input[name='group1']:checked").val();
		var date = $('#date').val();
		
		var TodayDate = new Date();
var endDate= new Date(Date.parse($("#date").val()));

if (endDate < TodayDate) {
    alert("Your Booking Date Can't be gone Date");
	
}
		
		alert("Thank you Booking. Your Booking ID: 342234");
    	
    });
	
	
	
	$("#login").click(function(){
    	
    	var email=$("#email").val();
    	var password=$("#password").val();
    	var dataString="email="+email+"&password="+password+"&login=";
    	if($.trim(email).length>0 & $.trim(password).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#login").html('Connecting...');},
				success: function(data){
					if(data=="success")
					{
						localStorage.login="true";
						localStorage.email=email;
						window.location.href = "index.html";
					}
					else if(data="failed")
					{
						alert("Login error");
						$("#login").html('Login');
					}
				}
			});
		}return false;

    });

    //signup function
    $("#signup").click(function(){
    	var fullname=$("#fullname").val();
    	var email=$("#email").val();
    	var password=$("#password").val();
    	var dataString="fullname="+fullname+"&email="+email+"&password="+password+"&signup=";

    	if($.trim(fullname).length>0 & $.trim(email).length>0 & $.trim(password).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#signup").val('Connecting...');},
				success: function(data){
					if(data=="success")
					{
						alert("Thank you for Registering with us! you can login now");
					}
					else if(data="exist")
					{
						alert("Hey! You alreay has account! you can login with us");
					}
					else if(data="failed")
					{
						alert("Something Went wrong");
					}
				}
			});
		}return false;

    });

    //Change Password
    $("#change_password").click(function(){
    	var email=localStorage.email;
    	var old_password=$("#old_password").val();
    	var new_password=$("#new_password").val();
    	var dataString="old_password="+old_password+"&new_password="+new_password+"&email="+email+"&change_password=";
    	if($.trim(old_password).length>0 & $.trim(old_password).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#change_password").val('Connecting...');},
				success: function(data){
					if(data=="incorrect")
					{
						alert("Your old password is incorrect");
					}
					else if(data="success")
					{
						alert("Password Changed successfully");
					}
					else if(data="failed")
					{
						alert("Something Went wrong");
					}
				}
			});
		}return false;

    });

    //Forget Password
    $("#forget_password").click(function(){
    	var email=$("#email").val();
    	var dataString="email="+email+"&forget_password=";
    	if($.trim(email).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#forget_password").val('Connecting...');},
				success: function(data){
					if(data=="invalid")
					{
						alert("Your have not registered with us");
					}
					else if(data="success")
					{
						alert("we have sent password to your email address, please check");
					}
				}
			});
		}return false;

    });


    //logout function
    //$("#logout").click(function(){
//    	localStorage.login="false";
//    	window.location.href = "login.html";
//    });

    //Displaying user email on home page
    //$("#email1").html(localStorage.email);
    //var imageHash="http://www.gravatar.com/avatar/"+md5(localStorage.email);
    //$("#profilepic").attr('src',imageHash);
});


function toggle_sidebar()
        {
            var sidebar = document.getElementById("sidebar");
            
            console.log(sidebar.style.right);
            
            if(sidebar.style.left == "-300px")
            {
                sidebar.style.left = "0px";
            }
            else
            {
                sidebar.style.left = "-300px";
            }
        }
		
function closethis() {
var sidebar = document.getElementById("sidebar");
            
            console.log(sidebar.style.left);
 sidebar.style.left = "-300px";
}		