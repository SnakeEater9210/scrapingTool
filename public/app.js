function getSelectionText() {
    console.log('sono in getSelect')
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    formattedText = text.replaceAll(' ', '+');
    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formattedText })
    }).catch(e => {
        e.preventDefault();
    })


}

submit.addEventListener('click', (e) => {
    getSelectionText();
    console.log('tasto premuto');
})