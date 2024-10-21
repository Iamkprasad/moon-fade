window.onload = function() {
    setTimeout(function() {
        document.getElementById('moon').style.opacity = 1;
        setTimeout(function() {
            document.getElementById('poem').innerHTML = "You write a poem on cat<br>A feline friend, in night's soft hue<br>With eyes that glow, and whiskers so fine<br>A silent dance, in moon's soft light.";
            document.getElementById('poem').style.opacity = 1;
            setTimeout(function() {
                document.getElementById('nextButton').style.display = 'block';
            }, 3000);
        }, 3000);
    }, 2000);
}
