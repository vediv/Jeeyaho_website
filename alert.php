<?php  require_once 'config/auth.php'; ?> 
<?php require_once 'includes/header.php'; ?>
<?php //HI ?>
 <script type="text/javascript">
        function show_alert() {
            alert("Hello! I am an alert box!");
        }
    </script>
 <style type="text/css">
 	
 	.customAlert {
  display: none;
  position: fixed;
  max-width: 25%;
  min-width: 250px !important;
  min-height: 20%;
  height: 200px;
  left: 50%;
  top: 50%;
  padding: 10px;
  box-sizing: border-box;
  margin-left: -12.5%;
  margin-top: -5.2%;
  background: #088A68;
}
@media all and (max-width: 1300px) {
  .customAlert .message {
    font-size: 14px !important;
  }
  .customAlert input[type='button'] {
    height: 15% !important;
  }
}
.customAlert .message {
  padding: 5px;
  color: white;
  font-size: 14px;
  line-height: 20px;
  text-align: justify;
}
.customAlert input[type='button'] {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 50%;
  height: 36px;
  margin-top: -45px;
  margin-left: -25%;
  outline: 0;
  border: 0;
  background: #04B486;
  color: white;
}
.customAlert input[type='button']:hover {
  transition: 0.3s;
  cursor: pointer;
  background: #05cd99;
}

.rab {
  width: 200px;
  height: 30px;
  outline: 0;
  border: 0;
  color: white;
  background: #039b73;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

 </style>

<body onload="initWatchVideo()"   id="get_token">
	 
<?php require_once 'includes/navigation.php';?> 
 
    
<div class='customAlert'>
  <p class='message'></p>
	<input type='button' class='confirmButton' value='Ok'>
</div>
  
 

<?php require_once 'includes/footer.php';?>
  <!--<script type="text/javascript" src="layouts/js/app.js"></script>-->
 

<script>
 var currentCallback; 
// override default browser alert
window.alert = function(msg, callback){
  $('.message').text(msg);
  $('.customAlert').css('animation', 'fadeIn 0.3s linear');
  $('.customAlert').css('display', 'inline');
  setTimeout(function(){
    $('.customAlert').css('animation', 'none');
  }, 300);
  currentCallback = callback;
}

$(function(){
  
  // add listener for when our confirmation button is clicked
	$('.confirmButton').click(function(){
    $('.customAlert').css('animation', 'fadeOut 0.3s linear');
    setTimeout(function(){
     $('.customAlert').css('animation', 'none');
		$('.customAlert').css('display', 'none');
    }, 300);
    currentCallback();
  })
  
 var Message = getVideoData.Message;
      alert(Message);
      login();, 500);
});
</script>
