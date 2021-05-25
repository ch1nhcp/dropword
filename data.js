let wordKey = "WORDS";

$("form").submit(function (e) {
    e.preventDefault();
    save();
});

let words = JSON.parse(localStorage.getItem(wordKey)) || [];

function save() {
    let img = $("#img").val();
    let Word = $("#Word").val();
    let Pronounce = $("#Pronounce").val();
    let Means = $("#Means").val();

    let word = {
        'img': img,
        'Word': Word,
        'Pronounce': Pronounce,
        'Means': Means
    }

    words.push(word);
    localStorage.setItem(wordKey, JSON.stringify(words));

    console.log("success");
}



