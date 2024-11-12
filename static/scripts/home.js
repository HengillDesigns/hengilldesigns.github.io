console.log("Script loaded at", window.location.href)

views = ['.databank', '.gallery']
i = 0
function scrollDown() {
    const nextSection = document.querySelector(views[i]);
    nextSection.scrollIntoView({ behavior: 'smooth' });
    i = i + 1
}
