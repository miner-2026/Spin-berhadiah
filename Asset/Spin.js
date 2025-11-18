document.addEventListener("DOMContentLoaded", function() {
    const spinButton = document.getElementById('spin-button');
    const resultDiv = document.getElementById('result');
    const rewards = [
        "Voucher Diskon 10%",
        "Hadiah Misteri",
        "Bonus Poin",
        "Merchandise",
        "Gratis Ongkir"
    ];

    spinButton.addEventListener('click', function() {
        resultDiv.textContent = "Memutar...";
        spinButton.disabled = true;

        setTimeout(function() {
            const randomIndex = Math.floor(Math.random() * rewards.length);
            resultDiv.textContent = "Selamat! Anda mendapat: " + rewards[randomIndex];
            spinButton.disabled = false;
        }, 1800);
    });
});
