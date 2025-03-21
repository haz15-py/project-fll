document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const diveButton = document.getElementById('dive-button');

    // بدء الغوص
    diveButton.addEventListener('click', () => {
        introScreen.style.display = 'none';
        mainContent.style.display = 'block';
    });

    // إضافة فقاعات بشكل ديناميكي
    const bubbleContainer = document.querySelector('.bubbles');
    const createBubble = () => {
        const bubble = document.createElement('span');
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
        bubbleContainer.appendChild(bubble);
        setTimeout(() => bubble.remove(), 10000);
    };

    setInterval(createBubble, 400);

    // زر اختبار الوعي البيئي
    const awarenessTestButton = document.getElementById('awareness-test');
    awarenessTestButton.addEventListener('click', () => {
        window.open('https://forms.office.com/r/s8ZnC8nx3n', '_blank');
    });
});
