function scrollDown() {
    const nextSection = document.querySelector('.databank');
    nextSection.scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".custom-cursor");

    // Update cursor position
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Resize cursor on hover over links/buttons
    document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            const rect = el.getBoundingClientRect();
            cursor.style.width = `${rect.width + 10}px`;
            cursor.style.height = `${rect.height + 10}px`;
        });

        el.addEventListener("mouseleave", () => {
            cursor.style.width = "40px";
            cursor.style.height = "40px";
        });
    });
});
