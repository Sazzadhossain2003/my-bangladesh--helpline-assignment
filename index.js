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
