// Typing effect for hero
document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector('.typing');
    const text = typingElement.textContent.trim();
    typingElement.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    }
    type();
});
