const cryptoAPI = new CryptoAPI(),
      ui = new UI(); 


     const form = document.getElementById("form").addEventListener("submit", printResult); 




      function printResult(e){
          e.preventDefault();
          
          const currency = document.getElementById("currency").value;
          const cryptocurrency = document.getElementById("cryptocurrency").value;
         
          if(currency === "" || cryptocurrency === ""){
              ui.printMessage("All the fields are mandatory", "deep-orange darken-4 card-panel");
          } else {
            cryptoAPI.queryAPI(currency, cryptocurrency)
                .then( data => {
                    ui.displayResult( data.result[0], currency.toLowerCase() );
                })
          }
      }
