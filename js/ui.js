class UI {
     constructor() {
         this.init();
     }
     init() {
         this.printCryptoCurrencies();
     }
     printCryptoCurrencies() {
         cryptoAPI.getCryptoCurrenciesList()
            .then( data => {
                const cryptoCurrencies = data.cryptoCurrencies;
                
                const select = document.getElementById("cryptocurrency");

                cryptoCurrencies.forEach(currency => {
                    const option = document.createElement("option")
                    option.value = currency.id;
                    option.appendChild(document.createTextNode(currency.name));
                    select.appendChild(option);
                    
                });
            })
     }
    printMessage(message, className) {
        const you = document.querySelector(".messages");
         const errorM = document.createElement("div");
         errorM.className = className;
         errorM.appendChild(document.createTextNode(message));

       
         you.appendChild(errorM);

         setTimeout(()=>{
            document.querySelector(".messages div").remove();
         },3000);
        

     }

     displayResult(data, currency) {
        const prevResult = document.querySelector('#result > div');

        if(prevResult) {
            prevResult.remove();
        }

        // Display Spinner
        this.showSpinner();

        // Read the currency
        const currencyName = `price_${currency}`;

        // Get the currency value
        const value = result[currencyName];

        // Construir el template
        let templateHTML = '';
        templateHTML += `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Result</span>
                    <p>The price of ${data.name} from ${currency} is: $ ${value}</p>
                    <p>Last hour: ${data.percent_change_1h} %</p>
                    <p>Last Day: ${data.percent_change_24h} %</p>
                    <p>Last 7 Days: ${data.percent_change_7d} %</p>
                </div>
            </div>
        `;

        // After 3 seconds print the result and hide spinner
        setTimeout(() => {
            // Insert HTML Template
            const divResult = document.getElementById('result');
            divResult.innerHTML = templateHTML;

            // Hide Spinner
            document.querySelector('.spinner img').remove();
        }, 3000 );
    }

    // Prints the spinner
    showSpinner() {
        const spinnerGif = document.createElement('img');
        spinnerGif.src = 'img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinnerGif);
    }

}