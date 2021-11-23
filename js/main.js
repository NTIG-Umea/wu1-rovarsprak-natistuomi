document.addEventListener('DOMContentLoaded', () => {
    // kolla i webbläsarens console för att se vad som händer
    console.log('Laddat');

    // välj de element vi behöver
    const message = document.querySelector('#message');
    const textbox = document.querySelector('#textbox');
    const button = document.querySelector('#translate');

    // lyssna på knapptryck

    button.addEventListener('click', (e) => {
        // läs in texten från textboxen
        const text = textbox.value;
        // skicka texten till funktionen för att översätta
        const translation = translate(text);
        // Hur kan du rensa textboxen?
        // skriv ut översättningen i message
        display(translation, message);
    });

});

const translate = (text) => {
    // översätt texten till rövarspråket

    let s2 = "";
    let konsonanter = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";


    for (let i = 0; i < text.length; i++){
        for (let q = 0; q < 42; q++){
            if (text.charAt(i) == konsonanter.charAt(q))
                s2 = s2 + konsonanter.charAt(q) + "o";
            else if (q == 41)
                s2 = s2 + text.charAt(i);
        }

    }
    console.log(text)
    return s2;
};

const display = (translation, element) => {
    // skapa ett p element för texten
    const p = document.createElement('p');
    // sätt texten till översättningen
    p.textContent = translation;
    // fäst elementet
    element.insertBefore(p, element.firstChild);
}
