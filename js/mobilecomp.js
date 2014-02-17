/**
* @package menu_on_top
* @category base
* @author m6n,Awikatchikaen
* @copyright 2012-2013 m6n,Awikatchikaen <lord.awikatchikaen@gmail.com>
* @license GNU Affero General Public license (AGPL)
* @link information http://apps.owncloud.com/content/show.php?content=157091
*
* This library is free software; you can redistribute it and/or
* modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
* License as published by the Free Software Foundation; either
* version 3 of the license, or any later version.
*
* This library is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU AFFERO GENERAL PUBLIC LICENSE for more details.
*
* You should have received a copy of the GNU Affero General Public
* License along with this library.
* If not, see <http://www.gnu.org/licenses/>.
*
*/

/**
 * @file js/menu_on_top.JS
 * @author m6n,Awikatchikaen
 */

/**  
*   {
*   }
*/


/* Under files its possible to share files
 * If you click the link you are not able to copy the link :(
 * This is because the input is marked as "Readonly"
 * The following lines are used to change the input to R/W
 * TODO - Not yet working
*/	
	/*
	$(document).ready(function () {
		  javascript:alert('Verweisziel noch nicht erreichbar') 
          $("#dropdown").click(function() {
			alert('clicked!');
			$('#linkText').attr('readonly', false);
          });
    });
    */
    //hookup the event
    /*
	$('#linkText').bind('focus', function() {
		alert('clicked!');
		$('#linkText').attr('readonly', false);
	});

	function RemoveReadonly(){
		/* $("#linkCheckbox").click(function() { FUNKTIONIER 
		$("#linkText").focus(function() {
			 $(this).trigger('isVisible');
        });
	} //foo()
	window.setInterval(RemoveReadonly, 100);
	
	/*
    $(document).ready(function () {
	javascript:alert('1');
		/* $('.action[data-action="Share"]').click(function(e){ 
		/* $("#fileList").click(function() { FUNKTIONIERT 
		/* $("#my_id .my_class") 
		$('#dropdown').show('slow', function(){
			  javascript:alert('Verweisziel noch nicht erreichbar');
			  $("#dropdown").load(function() {
				alert('clicked!');
				$('#linkText').attr('readonly', false);
			  });
		});
	});
    */
    
    
    
    
    
/* Get windows width */
var breite = window.innerWidth;

/* Wait page to be loaded */
	$(document).ready(function () {
			
		if (breite<1080){
		  /* Implemention of "menu on top" */
		   
		    
		  $("#navigation").hide();
		  $("#navigation").css("visibility", "visible");
		  $("#owncloud").click(function(e){
			e.preventDefault();
			$("#navigation").slideToggle(); 
		  });
		  
		  
		  $("#navigation li a").click(function(e){
			$("#navigation").slideUp(); 
		  });

		  /*$("#navigation, #owncloud").mouseleave(function(){
			$("#navigation").slideUp(); 
		  });*/
		  
		  
		}
	});
	
	
	/*
	$(function () {
		//$(".campaign-box span:last").hide();
		$("#owncloud").hover(function () { 
			//$("#navigation").css("opacity", 0.5);
			$("#navigation").fadeIn("fast");           
		}, function () {        
			//$("#navigation").css("opacity", 1); 
			$("#navigation").hide("slow");
		});
	});
	*/
