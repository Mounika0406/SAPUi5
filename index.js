//Input
/*sap.ui.define(["sap/m/Input"], 
function (Input) {

		new Input({
                      
		    Input : "PasswordInput",
                    placeholder :"enter your password ",
                    description :"measurement",
                    fieldWidth : "25%",
                              	
				}).placeAt("content");
			
		
	}
);*/

//link
/*sap.ui.define(["sap/m/Link"], 
function (Link) {

		new Link({
                    
                     text : "something",
		    href : "https://www.google.com",
                                                  	
				}).placeAt("content");
			
		
	}
);*/

//Formatted text
/*sap.ui.define(["sap/m/FormattedText"], 
function (FormattedText) {

		new FormattedText({
                    
                htmlText:"<h>This is FormattedText</h><h1>This is FormattedText</h1>",
                  
                                                  	
				}).placeAt("content");
			
		
	}
);*/


//ToggleButton
sap.ui.define(["sap/m/ToggleButton"], 
function (ToggleButton) {

		new ToggleButton({
                  text : "on",
                   pressed: true,  
               
                                                   	
				}).placeAt("content");
			
		
	}
);


