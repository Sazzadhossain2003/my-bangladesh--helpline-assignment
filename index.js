// heart and love 
const hearts = document.querySelectorAll('.fa-heart');
const loveCount = document.getElementById('love-count');

hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
        heart.classList.toggle('text-red-500');
        heart.classList.toggle('fa-solid');
        let count = parseInt(loveCount.textContent);
        if (heart.classList.contains('fa-solid')) {
            count++;
        } else {
            count--;
        }
        loveCount.textContent = count;
    });
});

// copy number
const copyButtons = document.querySelectorAll('.btn i.fa-copy');

copyButtons.forEach((btn) => {
    btn.parentElement.addEventListener('click', () => {
        const number = btn.closest('.bg-white').querySelector('h2').nextElementSibling.textContent;
        navigator.clipboard.writeText(number);
        alert(`Copied: ${number}`);

        // Update copy count
        const copySpan = document.querySelector('.span-tag');
        copySpan.textContent = parseInt(copySpan.textContent) + 1;

        // Add to Call History
        addCallHistory(number);
    });
});