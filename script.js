
const hello = "World";


//////////////////СТРОКА ПОШУКУ.................
// Отримуємо поле вводу і результат
const currencySearchInput = document.getElementById('currencySearch');
const resultsContainer = document.getElementById('searchResults');

// Додаємо обробник події для поле вводу
currencySearchInput.addEventListener('input', function () {
    const searchValue = currencySearchInput.value.toLowerCase();
    const matchingCurrencies = currencies.filter(currency => currency.toLowerCase().includes(searchValue));
    displayResults(matchingCurrencies);
});

// Функція для відображення результатів
    function displayResults(results) {
        resultsContainer.innerHTML = '';
        results.forEach(result => {
        const currencyElement = document.createElement('div');
        currencyElement.textContent = result;
        resultsContainer.appendChild(currencyElement);
    });
}

/////////////////ГОРИЗОНТАЛЬНА ЛІНІЯ ................
/////////////convertor__container-left-bottom
    const columns = document.querySelectorAll('.column');
    const infoBox = document.querySelector('.info-box');
    const infoText = document.getElementById('info-text');
    const defaultTextColor = '#fff'; 


    infoBox.style.display = 'block';
    let isExpanded = false;

    columns.forEach(column => {
        const line = column.querySelector('.line');
        const info = column.getAttribute('data-info');
        column.addEventListener('mouseover', () => {
            line.style.borderColor = 'orange';
            column.querySelector('p').style.color = 'orange';

                if (info === 'All') {
                    infoText.innerHTML = `
                <li style="cursor: pointer; display: flex; margin: 10px 30px 10px -25px;">
                    <img src="./Image/images (20).png" alt="Bitcoin" style = "width: 100px;">
                    <p style="padding: 11px 0px; margin: 10px 0px;">Bitcoin</p> 
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (21).png" alt="DOGE" style=" width: 40px; height: 40px;">
                    <p style="padding: 10px; margin: 5px 15px;">DOGE</p>
                </li>
                <li style="display: flex; margin: 10px -20px;">
                    <img src="./Image/images (18).png" alt="Litecoin" style="width: 100px; height: 45px">
                    <p style="padding: 11px -2px; margin: 10px 0px;">Litecoin</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (19).png" alt="BNB" style="width: 40px;">
                    <p style="padding: 10px; margin: 5px;15px;">BNB</p>
                </li>
                <li style="display: flex;margin: 10px; ">
                    <img src="./Image/images (22).png" alt="Tron" style="width: 45px;">
                    <p style="padding: 10px;margin: 5px;">Tron</p>
                </li>
                <li style="display: flex; margin: 10px -10px;">
                    <img src="./Image/images (5).png" alt="Bitcoin Cash" style="width: 80px;">
                    <p style="padding: 11px 0px; margin: 10px 5px;">Bitcoin Cash</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/Ethereum_logo_2014.svg.png" alt="ETH" style=" width: 35px;height: 60px;">
                    <p style="padding: 10px;margin: 10px;">ETH</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/ripple-xrp-logo-E97D62205B-seeklogo.com.png" alt="Ripple" style="width: 50px;">
                    <p style="padding: 10px;margin: 5px;">Ripple</p>
                </li>
                <li style="display: flex;  margin: 10px -10px;">
                    <img src="./Image/ghv.png" alt="Dogecoin" style="width: 70px;">
                    <p style="padding: 11px 0px;margin: 10px 5px;">Dogecoin</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/luy8.png" alt="Monero" style="width: 50px;">
                    <p style="padding: 10px; margin: 5px;">Monero</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/Записати.PNG" alt="ALGO" style="width: 50px;height: 50px;">
                    <p style="padding: 10px; margin: 5px;">ALGO</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images.png" alt="SOL" style="width: 50px;">
                    <p style="padding: 10px; margin: 5px;">SOL</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (3).png" alt="Polygon" style="width: 50px;">
                    <p style="padding: 10px; margin: 5px;">Polygon</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/l.png" alt="Zcash" style="width: 50px;">
                    <p style="padding: 10px; margin: 5px;">Zcash</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/9o=-.png" alt="Stellar" style="width: 50px; height: 50px;">
                    <p style="padding: 10px; margin: 5px;">Stellar</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (17).png" alt="SHIB" style="width: 50px;">
                    <p style="padding: 10px; margin: 5px;">SHIB</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (4).png" alt="Luna" style="width: 50px; height: 50px;">
                    <p style="padding: 10px; margin: 5px;">Luna</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/iu.png" alt="Dash" style="width: 50px; height: 50px;">
                    <p style="padding: 10px; margin: 5px;">Dash</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (16).png" alt="SWEAT" style="width: 45px;">
                    <p style="padding: 10px; margin: 5px;">SWEAT</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/TetherUSDT.png" alt="Tether TRC20" style="width: 50px; height: 50px;">
                    <p style="padding: 10px; margin: 5px;">Tether TRC20</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (15).png" alt="USD Coin TRC20" style="width: 45px;">
                    <p style="padding: 10px; margin: 5px;">USD Coin TRC20</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (19).png" alt="USDC" style="width: 40px;">
                    <p style="padding: 10px; margin: 5px;">USDC</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/TetherUSDT.png" alt="Tether SOL" style="width: 50px; height: 50px;">
                    <p style="padding: 10px; margin: 5px;">Tether SOL</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/TetherUSDT.png" alt="Tether ERC20" style="width: 50px; height: 50px;">
                    <p style="padding: 10px; margin: 5px;">Tether ERC20</p>
                </li>
                    `;
                } else if (info === 'Crypto') {
                    infoText.innerHTML = `
                    <li style="cursor: pointer; display: flex; margin: 10px 30px 10px -25px;">
                    <img src="./Image/images (20).png" alt="Bitcoin" style = "width: 100px;">
                    <p style="padding: 11px 0px; margin: 10px 0px;">Bitcoin</p> 
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (21).png" alt="DOGE" style=" width: 40px; height: 40px;">
                    <p style="padding: 10px; margin: 5px 15px;">DOGE</p>
                </li>
                <li style="display: flex; margin: 10px -20px;">
                    <img src="./Image/images (18).png" alt="Litecoin" style="width: 100px; height: 45px">
                    <p style="padding: 11px -2px; margin: 10px 0px;">Litecoin</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (19).png" alt="BNB" style="width: 40px;">
                    <p style="padding: 10px; margin: 5px;15px;">BNB</p>
                </li>
                <li style="display: flex;margin: 10px; ">
                    <img src="./Image/images (22).png" alt="Tron" style="width: 45px;">
                    <p style="padding: 10px;margin: 5px;">Tron</p>
                </li>
                <li style="display: flex; margin: 10px -10px;">
                    <img src="./Image/images (5).png" alt="Bitcoin Cash" style="width: 80px;">
                    <p style="padding: 11px 0px; margin: 10px 5px;">Bitcoin Cash</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/Ethereum_logo_2014.svg.png" alt="ETH" style=" width: 35px;height: 60px;">
                    <p style="padding: 10px;margin: 10px;">ETH</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/ripple-xrp-logo-E97D62205B-seeklogo.com.png" alt="Ripple" style="width: 50px;">
                    <p style="padding: 10px;margin: 5px;">Ripple</p>
                </li>
                <li style="display: flex;  margin: 10px -10px;">
                    <img src="./Image/ghv.png" alt="Dogecoin" style="width: 70px;">
                    <p style="padding: 11px 0px;margin: 10px 5px;">Dogecoin</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/luy8.png" alt="Monero" style="width: 50px;">
                    <p style="padding: 10px; margin: 5px;">Monero</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/Записати.PNG" alt="ALGO" style="width: 50px;height: 50px;">
                    <p style="padding: 10px; margin: 5px;">ALGO</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images.png" alt="SOL" style="width: 50px;">
                    <p style="padding: 10px; margin: 5px;">SOL</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (3).png" alt="Polygon" style="width: 50px;">
                    <p style="padding: 10px; margin: 5px;">Polygon</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/l.png" alt="Zcash" style="width: 50px;">
                    <p style="padding: 10px; margin: 5px;">Zcash</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/9o=-.png" alt="Stellar" style="width: 50px; height: 50px;">
                    <p style="padding: 10px; margin: 5px;">Stellar</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (17).png" alt="SHIB" style="width: 50px;">
                    <p style="padding: 10px; margin: 5px;">SHIB</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (4).png" alt="Luna" style="width: 50px; height: 50px;">
                    <p style="padding: 10px; margin: 5px;">Luna</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/iu.png" alt="Dash" style="width: 50px; height: 50px;">
                    <p style="padding: 10px; margin: 5px;">Dash</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (16).png" alt="SWEAT" style="width: 45px;">
                    <p style="padding: 10px; margin: 5px;">SWEAT</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/TetherUSDT.png" alt="Tether TRC20" style="width: 50px; height: 50px;">
                    <p style="padding: 10px; margin: 5px;">Tether TRC20</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (15).png" alt="USD Coin TRC20" style="width: 45px;">
                    <p style="padding: 10px; margin: 5px;">USD Coin TRC20</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (19).png" alt="USDC" style="width: 40px;">
                    <p style="padding: 10px; margin: 5px;">USDC</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/TetherUSDT.png" alt="Tether SOL" style="width: 50px; height: 50px;">
                    <p style="padding: 10px; margin: 5px;">Tether SOL</p>
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/TetherUSDT.png" alt="Tether ERC20" style="width: 50px; height: 50px;">
                    <p style="padding: 10px; margin: 5px;">Tether ERC20</p>
                </li>
                    `;
                } else {
                    infoText.innerHTML = 'No currencies'; 
                }
            });

            column.addEventListener('mouseout', () => {
                line.style.borderColor = '#fff';
                column.querySelector('p').style.color = defaultTextColor;
            });
        });

    /////////////convertor__container-left-bottom
    const columnsMedium = document.querySelectorAll('.column__medium');
    const infoBoxMedium = document.querySelector('.info-box-medium');
    const infoTextMedium = document.getElementById('info-text__medium');
    const defaultTextColorMedium = '#fff'; 

   
    infoBoxMedium.style.display = 'block';
    let isExpandedMedium = false;

    columnsMedium.forEach(column__medium => {
        const line__medium = column__medium.querySelector('.line__medium');
        const infoBoxMedium = column__medium.getAttribute('data-info__medium');
        column__medium.addEventListener('mouseover', () => {
            line__medium.style.borderColor = 'orange';
            column__medium.querySelector('p').style.color = 'orange';

            if (infoBoxMedium === 'All') {
                infoTextMedium.innerHTML = `
                <li style="cursor: pointer; display: flex; margin: 10px;">
                <img src="./Image/ап.png" alt="Sberbank RU" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">Sberbank RU</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 10px;">
                <img src="./Image/kisspng_visa_mastercard_computer_icons_clip_art_portable_n_visa.png" alt="Visa/MC kzt" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin:10px 5px;">Visa/MC kzt</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 10px;">
                <img src="./Image/kisspng_visa_mastercard_computer_icons_clip_art_portable_n_visa.png" alt="Visa/MC RU" style = "width: 50px;">
                <p style="padding: 10px; margin: 5px;">Visa/MC RU</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 10px 30px 10px -20px;">
                <img src="./Image/images (20).png" alt="Bitcoin" style = "width: 100px;">
                <p style="padding: 11px 0px; margin: 10px 0px;">Bitcoin</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (13).png" alt="Halyk Bank" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">Halyk Bank</p> 
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (21).png" alt="DOGE" style=" width: 40px; height: 40px;">
                <p style="padding: 10px; margin: 5px 15px;">DOGE</p>
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (10).png" alt="СБП" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">СБП</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 10px -20px;">
                <img src="./Image/images (18).png" alt="Litecoin" style="width: 100px; height: 45px">
                <p style="padding: 11px -2px; margin: 10px 0px;">Litecoin</p>
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (8).png" alt="RNCB" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">RNCB</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/logo_vtb_bank_ВТБ.png" alt="VTB" style = "width: 50px;">
                <p style="padding: 10px; margin: 5px;">VTB</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (19).png" alt="BNB" style = "width: 50px;">
                <p style="padding: 10px; margin: 5px;">BNB</p> 
            </li>
            <li style="cursor: pointer; display: flex;margin: 10px -5px;">
                <img src="./Image/images (7).png" alt="Gazprombank" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">Gazprombank</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (13).png" alt="Alfabank" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">Alfabank</p> 
            </li>
            <li style="cursor: pointer; display: flex;margin: 10px; ">
                <img src="./Image/images (22).png" alt="Tron" style="width: 45px;">
                <p style="padding: 10px;margin: 5px;">Tron</p>
            </li>
            <li style="cursor: pointer; display: flex;margin: 10px -5px;">
                <img src="./Image/images (12).png" alt="Kaspi Bank" style = "width: 65px;">
                <p style="padding: 10px; margin: 5px;">Kaspi Bank</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 10px 0px; ">
                <img src="./Image/Otkritie_logo_2017.png" alt="Otkritie" style = "width: 60px;">
                <p style="padding: 10px;margin: 10px;">Otkritie</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 10px -10px;">
                <img src="./Image/images (5).png" alt="Bitcoin Cash" style = "width: 80px;">
                <p style="padding: 11px 0px;margin: 10px 5px;">Bitcoin Cash</p> 
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/Ethereum_logo_2014.svg.png" alt="ETH" style=" width: 35px;height: 60px;">
                <p style="padding: 10px;margin: 10px;">ETH</p>
            </li>

            <li style="display: flex; margin: 10px;">
                <img src="./Image/ripple-xrp-logo-E97D62205B-seeklogo.com.png" alt="Ripple" style="width: 50px;">
                <p style="padding: 10px;margin: 5px;">Ripple</p>
            </li>
            <li style="display: flex;  margin: 10px -10px;">
                <img src="./Image/ghv.png" alt="Dogecoin" style="width: 70px;">
                <p style="padding: 11px 0px;margin: 10px 5px;">Dogecoin</p>
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (13).png" alt="RosBank" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">RosBank</p> 
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/luy8.png" alt="Monero" style="width: 50px;">
                <p style="padding: 10px; margin: 5px;">Monero</p>
            </li>
            <li style="cursor: pointer; display: flex; margin: 10px -5px;">
                <img src="./Image/images (2).png" alt="Bereke Bank KZT" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">Bereke Bank KZT</p> 
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/Записати.PNG" alt="ALGO" style="width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">ALGO</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images.png" alt="SOL" style="width: 50px;">
                <p style="padding: 10px; margin: 5px;">SOL</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (3).png" alt="Polygon" style="width: 50px;">
                <p style="padding: 10px; margin: 5px;">Polygon</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/l.png" alt="Zcash" style="width: 50px;">
                <p style="padding: 10px; margin: 5px;">Zcash</p>
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (13).png" alt="MIR" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">MIR</p> 
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/9o=-.png" alt="Stellar" style="width: 50px; height: 50px;">
                <p style="padding: 10px; margin: 5px;">Stellar</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (17).png" alt="SHIB" style="width: 50px;">
                <p style="padding: 10px; margin: 5px;">SHIB</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (4).png" alt="Luna" style="width: 50px; height: 50px;">
                <p style="padding: 10px; margin: 5px;">Luna</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/iu.png" alt="Dash" style="width: 50px; height: 50px;">
                <p style="padding: 10px; margin: 5px;">Dash</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (16).png" alt="SWEAT" style="width: 45px;">
                <p style="padding: 10px; margin: 5px;">SWEAT</p>
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (6).png" alt="Home Credit" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">Home Credit</p> 
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/TetherUSDT.png" alt="Tether TRC20" style="width: 50px; height: 50px;">
                <p style="padding: 10px; margin: 5px;">Tether TRC20</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (15).png" alt="USD Coin TRC20" style="width: 45px;">
                <p style="padding: 10px; margin: 5px;">USD Coin TRC20</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (19).png" alt="USDC" style="width: 40px;">
                <p style="padding: 10px; margin: 5px;">USDC</p>
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (9).png" alt="QIWI" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">QIWI</p> 
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/TetherUSDT.png" alt="Tether SOL" style="width: 50px; height: 50px;">
                <p style="padding: 10px; margin: 5px;">Tether SOL</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (14).png" alt="Jusan Bank" style="width: 45px;">
                <p style="padding: 10px; margin: 5px;">Jusan Bank</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (11).png" alt="ЮMoney" style="width: 50px; height: 50px;">
                <p style="padding: 10px; margin: 5px;">ЮMoney</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/TetherUSDT.png" alt="Tether ERC20" style="width: 50px; height: 50px;">
                <p style="padding: 10px; margin: 5px;">Tether ERC20</p>
            </li>
            `;
        } else if (infoBoxMedium === 'Banks') {
            infoTextMedium.innerHTML = `
            <li style="cursor: pointer; display: flex; margin: 10px;">
                <img src="./Image/ап.png" alt="Sberbank RU" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">Sberbank RU</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (13).png" alt="Halyk Bank" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">Halyk Bank</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="" alt="Tinkoff" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">Tinkoff</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
               <img src="./Image/images (10).png" alt="СБП" style = "width: 50px;height: 50px;">
               <p style="padding: 10px; margin: 5px;">СБП</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (8).png" alt="RNCB" style = "width: 45px;">
                <p style="padding: 10px; margin: 5px;">RNCB</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/logo_vtb_bank_ВТБ.png" alt="VTB" style = "width: 50px;">
                <p style="padding: 10px; margin: 5px;">VTB</p> 
            </li>
            <li style="cursor: pointer; display: flex;margin: 10px -5px;">
                <img src="./Image/images (7).png" alt="Gazprombank" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">Gazprombank</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="" alt="Alfabank" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">Alfabank</p> 
            </li>
            <li style="cursor: pointer; display: flex;margin: 10px -5px;">
                <img src="./Image/images (12).png" alt="Kaspi Bank" style = "width: 65px;">
                <p style="padding: 10px; margin: 5px;">Kaspi Bank</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="" alt="RosBank" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">RosBank</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 10px -5px;">
                <img src="./Image/images (2).png" alt="Bereke Bank KZT" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">Bereke Bank KZT</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (6).png" alt="Home Credit" style = "width: 45px; height: 40px;">
                <p style="padding: 10px; margin: 5px;">Home Credit</p> 
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (14).png" alt="Jusan Bank" style="width: 40px;">
                <p style="padding: 10px; margin: 5px;">Jusan Bank</p>
            </li>
        `;
        }else if(infoBoxMedium === 'Crypto') {
            infoTextMedium.innerHTML = `
                <li style="cursor: pointer; display: flex; margin: 10px 30px 10px -25px;">
                    <img src="./Image/images (20).png" alt="Bitcoin" style = "width: 100px;">
                    <p style="padding: 11px 0px; margin: 10px 0px;">Bitcoin</p> 
                </li>
                <li style="display: flex; margin: 10px;">
                    <img src="./Image/images (21).png" alt="DOGE" style=" width: 40px; height: 40px;">
                    <p style="padding: 10px; margin: 5px 15px;">DOGE</p>
                </li>
                <li style="cursor: pointer; display: flex; margin: 10px -20px;">
                    <img src="./Image/images (18).png" alt="Litecoin" style="width: 100px; height: 45px">
                    <p style="padding: 11px -2px; margin: 10px 0px;">Litecoin</p>
                </li>
                <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (19).png" alt="BNB" style = "width: 50px;">
                <p style="padding: 10px; margin: 5px;">BNB</p> 
            </li>
            <li style="cursor: pointer; display: flex;margin: 10px; ">
                <img src="./Image/images (22).png" alt="Tron" style="width: 45px;">
                <p style="padding: 10px;margin: 5px;">Tron</p>
            </li>
            <li style="cursor: pointer; display: flex; margin: 10px -10px;">
                <img src="./Image/images (5).png" alt="Bitcoin Cash" style = "width: 80px;">
                <p style="padding: 11px 0px;margin: 10px 5px;">Bitcoin Cash</p> 
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/Ethereum_logo_2014.svg.png" alt="ETH" style=" width: 35px;height: 60px;">
                <p style="padding: 10px;margin: 10px;">ETH</p>
            </li>

            <li style="display: flex; margin: 10px;">
                <img src="./Image/ripple-xrp-logo-E97D62205B-seeklogo.com.png" alt="Ripple" style="width: 50px;">
                <p style="padding: 10px;margin: 5px;">Ripple</p>
            </li>
            <li style="display: flex;  margin: 10px -10px;">
                <img src="./Image/ghv.png" alt="Dogecoin" style="width: 70px;">
                <p style="padding: 11px 0px;margin: 10px 5px;">Dogecoin</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/luy8.png" alt="Monero" style="width: 50px;">
                <p style="padding: 10px; margin: 5px;">Monero</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/Записати.PNG" alt="ALGO" style="width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">ALGO</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images.png" alt="SOL" style="width: 50px;">
                <p style="padding: 10px; margin: 5px;">SOL</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (3).png" alt="Polygon" style="width: 50px;">
                <p style="padding: 10px; margin: 5px;">Polygon</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/l.png" alt="Zcash" style="width: 50px;">
                <p style="padding: 10px; margin: 5px;">Zcash</p>
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (13).png" alt="MIR" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">MIR</p> 
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/9o=-.png" alt="Stellar" style="width: 50px; height: 50px;">
                <p style="padding: 10px; margin: 5px;">Stellar</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (17).png" alt="SHIB" style="width: 50px;">
                <p style="padding: 10px; margin: 5px;">SHIB</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (4).png" alt="Luna" style="width: 50px; height: 50px;">
                <p style="padding: 10px; margin: 5px;">Luna</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/iu.png" alt="Dash" style="width: 50px; height: 50px;">
                <p style="padding: 10px; margin: 5px;">Dash</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (16).png" alt="SWEAT" style="width: 45px;">
                <p style="padding: 10px; margin: 5px;">SWEAT</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (15).png" alt="USD Coin TRC20" style="width: 45px;">
                <p style="padding: 10px; margin: 5px;">USD Coin TRC20</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (19).png" alt="USDC" style="width: 40px;">
                <p style="padding: 10px; margin: 5px;">USDC</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/TetherUSDT.png" alt="Tether SOL" style="width: 50px; height: 50px;">
                <p style="padding: 10px; margin: 5px;">Tether SOL</p>
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/TetherUSDT.png" alt="Tether ERC20" style="width: 50px; height: 50px;">
                <p style="padding: 10px; margin: 5px;">Tether ERC20</p>
            </li>`;

        }else if(infoBoxMedium === 'Payment') {
            infoTextMedium.innerHTML = `
            <li style="cursor: pointer; display: flex; margin: 10px;">
                <img src="./Image/kisspng_visa_mastercard_computer_icons_clip_art_portable_n_visa.png" alt="Visa/MC kzt" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin:10px 5px;">Visa/MC kzt</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 10px;">
                <img src="./Image/kisspng_visa_mastercard_computer_icons_clip_art_portable_n_visa.png" alt="Visa/MC RU" style = "width: 50px;">
                <p style="padding: 10px; margin: 5px;">Visa/MC RU</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (13).png" alt="MIR" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">MIR</p> 
            </li>
            <li style="cursor: pointer; display: flex; margin: 5px 10px;">
                <img src="./Image/images (9).png" alt="QIWI" style = "width: 50px;height: 50px;">
                <p style="padding: 10px; margin: 5px;">QIWI</p> 
            </li>
            <li style="display: flex; margin: 10px;">
                <img src="./Image/images (11).png" alt="ЮMoney" style="width: 50px; height: 50px;">
                <p style="padding: 10px; margin: 5px;">ЮMoney</p>
            </li>`;
            }
        });

            column__medium.addEventListener('mouseout', () => {
                line__medium.style.borderColor = '#fff';
                column__medium.querySelector('p').style.color = defaultTextColorMedium;
            });
            column__medium.addEventListener('onclick', () => {
                line__medium.style.borderColor = '#fff';
                column__medium.querySelector('p').style.color = defaultTextColorMedium;
            });

        });





















/////////////////ПОГОДЖЕННЯ З УМОВАМИ І ПРАВИЛАМИ  ................
const checkbox = document.getElementById('agreement');
        const submitButton = document.getElementById('submitButton');

        checkbox.addEventListener('change', () => {
            submitButton.disabled = !checkbox.checked;
        });
   ////////Відправка на сторінку оплати
   function startExchange() {
    window.location.href = './payment.html';
}  

