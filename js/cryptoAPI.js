class CryptoAPI {

    async queryAPI (currency, cryptocurrency){
        const url = await fetch (`https://api.coinmaketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`);

        const results = await url.json();
        
        return {
            results
        }

    }



    async getCryptoCurrenciesList(){
        const url = await fetch("https://api.coinmarketcap.com/v1/ticker/");

        const cryptoCurrencies = await url.json();


        return {
            cryptoCurrencies 
        }
    }
}