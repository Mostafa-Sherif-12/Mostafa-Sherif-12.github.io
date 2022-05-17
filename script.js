document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByName("href").forEach(
        function goto(button) {
            button.onclick = function() {
                window.location.href = `${button.dataset.link}.html`;}
        });
    document.getElementsByName("letter").forEach(
        function sound(button) {
            var location = "none";
            if (button.dataset.lang === 'en') {
                location = "en/en_";}
            else if (button.dataset.lang === 'fr') {
                location = "fr/fr_";}
            else if (button.dataset.lang === 'ar') {
                location = "ar/ar_";}
            else if (button.dataset.lang === 'jp') {
                location = "jp/jp_";}
            else { 
                alert("error playing audio!");
                return;}
            button.onclick = function() { 
                const x = new Audio(`sounds/${location}${button.dataset.letter}.mp3`);
                x.play();}
        });
    document.getElementsByName("word").forEach(
        function sound(button) {
            button.onclick = function() { 
                const x = new Audio(`sounds/words/${button.dataset.word}.mp3`);
                x.play();}
        });
});
