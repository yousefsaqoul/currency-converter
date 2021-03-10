// 7b4e4d9b8dfb98db5a167466043019f8
// http://data.fixer.io/api/latest?access_key=7b4e4d9b8dfb98db5a167466043019f8
const select = document.querySelectorAll('select')
const selectFrom = document.getElementById('selectFrom')
const selectTo = document.getElementById('selectTo')
const inputFrom = document.getElementById('inputFrom')
const inputTo = document.getElementById('inputTo')
let html = ''



async function currency() {


    let myJson = [
        { "country": "Japan", "currencyCode": "JPY", "currency": "Yen" },
        { "country": "Dominican Republic", "currencyCode": "DOP", "currency": "Peso" },
        { "country": "Indonesia", "currencyCode": "IDR", "currency": "Rupiah" },
        { "country": "Indonesia", "currencyCode": "IDR", "currency": "Rupiah" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Ukraine", "currencyCode": "UAH", "currency": "Hryvnia" },
        { "country": "Croatia", "currencyCode": "HRK", "currency": "Kuna" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Japan", "currencyCode": "JPY", "currency": "Yen" },
        { "country": "Iran", "currencyCode": "IRR", "currency": "Rial" },
        { "country": "Portugal", "currencyCode": "EUR", "currency": "Euro" },
        { "country": "Ukraine", "currencyCode": "UAH", "currency": "Hryvnia" },
        { "country": "Palestinian Territory", "currencyCode": "ILS", "currency": "Shekel" },
        { "country": "Brazil", "currencyCode": "BRL", "currency": "Real" },
        { "country": "Kyrgyzstan", "currencyCode": "KGS", "currency": "Som" },
        { "country": "Russia", "currencyCode": "RUB", "currency": "Ruble" },
        { "country": "Nigeria", "currencyCode": "NGN", "currency": "Naira" },
        { "country": "Colombia", "currencyCode": "COP", "currency": "Peso" },
        { "country": "Egypt", "currencyCode": "EGP", "currency": "Pound" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Mongolia", "currencyCode": "MNT", "currency": "Tugrik" },
        { "country": "Tajikistan", "currencyCode": "TJS", "currency": "Somoni" },
        { "country": "Kenya", "currencyCode": "KES", "currency": "Shilling" },
        { "country": "Poland", "currencyCode": "PLN", "currency": "Zloty" },
        { "country": "Indonesia", "currencyCode": "IDR", "currency": "Rupiah" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Indonesia", "currencyCode": "IDR", "currency": "Rupiah" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Jordan", "currencyCode": "JOD", "currency": "Dinar" },
        { "country": "Indonesia", "currencyCode": "IDR", "currency": "Rupiah" },
        { "country": "Philippines", "currencyCode": "PHP", "currency": "Peso" },
        { "country": "Venezuela", "currencyCode": "VEF", "currency": "Bolivar" },
        { "country": "Armenia", "currencyCode": "AMD", "currency": "Dram" },
        { "country": "Russia", "currencyCode": "RUB", "currency": "Ruble" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Indonesia", "currencyCode": "IDR", "currency": "Rupiah" },
        { "country": "United States", "currencyCode": "USD", "currency": "Dollar" },
        { "country": "Poland", "currencyCode": "PLN", "currency": "Zloty" },
        { "country": "Japan", "currencyCode": "JPY", "currency": "Yen" },
        { "country": "Slovenia", "currencyCode": "EUR", "currency": "Euro" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Turkmenistan", "currencyCode": "TMT", "currency": "Manat" },
        { "country": "Indonesia", "currencyCode": "IDR", "currency": "Rupiah" },
        { "country": "Hungary", "currencyCode": "HUF", "currency": "Forint" },
        { "country": "Myanmar", "currencyCode": "MMK", "currency": "Kyat" },
        { "country": "Thailand", "currencyCode": "THB", "currency": "Baht" },
        { "country": "Indonesia", "currencyCode": "IDR", "currency": "Rupiah" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Germany", "currencyCode": "EUR", "currency": "Euro" },
        { "country": "Thailand", "currencyCode": "THB", "currency": "Baht" },
        { "country": "Russia", "currencyCode": "RUB", "currency": "Ruble" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Bolivia", "currencyCode": "BOB", "currency": "Boliviano" },
        { "country": "United States", "currencyCode": "USD", "currency": "Dollar" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Russia", "currencyCode": "RUB", "currency": "Ruble" },
        { "country": "Palestinian Territory", "currencyCode": "ILS", "currency": "Shekel" },
        { "country": "Panama", "currencyCode": "PAB", "currency": "Balboa" },
        { "country": "Mongolia", "currencyCode": "MNT", "currency": "Tugrik" },
        { "country": "Thailand", "currencyCode": "THB", "currency": "Baht" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Indonesia", "currencyCode": "IDR", "currency": "Rupiah" },
        { "country": "Philippines", "currencyCode": "PHP", "currency": "Peso" },
        { "country": "Indonesia", "currencyCode": "IDR", "currency": "Rupiah" },
        { "country": "Ukraine", "currencyCode": "UAH", "currency": "Hryvnia" },
        { "country": "Poland", "currencyCode": "PLN", "currency": "Zloty" },
        { "country": "United States", "currencyCode": "USD", "currency": "Dollar" },
        { "country": "Philippines", "currencyCode": "PHP", "currency": "Peso" },
        { "country": "France", "currencyCode": "EUR", "currency": "Euro" },
        { "country": "Kyrgyzstan", "currencyCode": "KGS", "currency": "Som" },
        { "country": "Belarus", "currencyCode": "BYR", "currency": "Ruble" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Portugal", "currencyCode": "EUR", "currency": "Euro" },
        { "country": "Argentina", "currencyCode": "ARS", "currency": "Peso" },
        { "country": "Portugal", "currencyCode": "EUR", "currency": "Euro" },
        { "country": "Latvia", "currencyCode": "EUR", "currency": "Euro" },
        { "country": "Sweden", "currencyCode": "SEK", "currency": "Krona" },
        { "country": "Indonesia", "currencyCode": "IDR", "currency": "Rupiah" },
        { "country": "Philippines", "currencyCode": "PHP", "currency": "Peso" },
        { "country": "Philippines", "currencyCode": "PHP", "currency": "Peso" },
        { "country": "Sweden", "currencyCode": "SEK", "currency": "Krona" },
        { "country": "Philippines", "currencyCode": "PHP", "currency": "Peso" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Madagascar", "currencyCode": "MGA", "currency": "Ariary" },
        { "country": "Vietnam", "currencyCode": "VND", "currency": "Dong" },
        { "country": "Sweden", "currencyCode": "SEK", "currency": "Krona" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Russia", "currencyCode": "RUB", "currency": "Ruble" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Sweden", "currencyCode": "SEK", "currency": "Krona" },
        { "country": "Albania", "currencyCode": "ALL", "currency": "Lek" },
        { "country": "Indonesia", "currencyCode": "IDR", "currency": "Rupiah" },
        { "country": "China", "currencyCode": "CNY", "currency": "Yuan Renminbi" },
        { "country": "Brazil", "currencyCode": "BRL", "currency": "Real" },
        { "country": "Japan", "currencyCode": "JPY", "currency": "Yen" },



    ]
    const API_URL = "http://data.fixer.io/api/latest?access_key=7b4e4d9b8dfb98db5a167466043019f8"
    const res = await fetch(API_URL);
    const data = await res.json();
    const rates = data.rates;
    myJson.forEach(myFunction);
    function myFunction(country, currencyCode) {
        html += `<option value=${country.currencyCode}>${country.currencyCode} ${country.country}</option>`
    }

    for (let i = 0; i < select.length; i++) {
        select[i].innerHTML = html;
    };
    console.log(rates[selectFrom.value]);
    inputFrom.addEventListener('keyup', function () {
        inputTo.value = inputFrom.value * rates[selectTo.value] / rates[selectFrom.value];

    })
    inputTo.addEventListener('keyup', function () {
        inputFrom.value = inputTo.value * rates[selectFrom.value] / rates[selectTo.value];

    })
    selectFrom.addEventListener('change', function () {
        inputTo.value = inputFrom.value * rates[selectTo.value] / rates[selectFrom.value];

    })
    selectTo.addEventListener('change', function () {
        inputFrom.value = inputTo.value * rates[selectFrom.value] / rates[selectTo.value];

    })
}
currency()






