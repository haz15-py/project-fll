// script.js
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
        const size = Math.random() * 40 + 20; // حجم الفقاعات
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; // مدة الحركة
        bubble.style.zIndex = '-1'; // منع تغطية النصوص
        bubbleContainer.appendChild(bubble);
        setTimeout(() => bubble.remove(), 10000); // إزالة الفقاعة بعد انتهاء الحركة
    };

    setInterval(createBubble, 300); // إنشاء فقاعات جديدة كل 300ms
});
