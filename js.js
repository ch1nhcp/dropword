let wordKey = "WORDS";
let words = [
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/elifile/public/images/question/Image/T%E1%BB%AB%20v%E1%BB%B1ng%202.0/14.2.png",
        "Word":"cycling",
        "Pronounce":"/ˈsaɪklɪŋ/",
        "Means":"đạp xe đạp",
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/elifile/public/images/question/Image/T%E1%BB%AB%20v%E1%BB%B1ng%202.0/14.4.png",
        "Word":"dancing",
        "Pronounce":"/ˈdænsɪŋ/",
        "Means":"nhảy",
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/elifile/public/images/question/Image/T%E1%BB%AB%20v%E1%BB%B1ng%202.0/13.9.png",
        "Word":"wish",
        "Pronounce":"/wɪʃ/",
        "Means":"ước, chúc",
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/elifile/public/images/question/Image/T%E1%BB%AB%20v%E1%BB%B1ng%202.0/13.3.png",
        "Word":"talk",
        "Pronounce":"/tɔːk/",
        "Means":"nói (trao đổi)",
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/elifile/public/images/question/Image/T%E1%BB%AB%20v%E1%BB%B1ng%202.0/14.7.png",
        "Word":" sewing",
        "Pronounce":" /ˈsoʊɪŋ/",
        "Means":" may vá",
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/elifile/public/images/question/Image/T%E1%BB%AB%20v%E1%BB%B1ng%202.0/14.3.png",
        "Word":" writing",
        "Pronounce":" /ˈraɪtɪŋ/",
        "Means":" viết lách",
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/elifile/public/images/question/Image/T%E1%BB%AB%20v%E1%BB%B1ng%202.0/14.6.png",
        "Word":" cooking" ,
        "Pronounce":" /ˈkʊkɪŋ/",
        "Means":" nấu nướng" ,
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/elifile/public/images/question/Image/T%E1%BB%AB%20v%E1%BB%B1ng%202.0/50.4.png",
        "Word":" afraid" ,
        "Pronounce":" /əˈfreɪd/" ,
        "Means":" sợ hãi",
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/elifile/public/images/question/Image/T%E1%BB%AB%20v%E1%BB%B1ng%202.0/50.7.png",
        "Word":" jealous" ,
        "Pronounce":" /ˈdʒeləs/",
        "Means":" ghen tị",
    },
    {
        "img":"https://s3-ap-northeast-1.amazonaws.com/elifile/public/images/question/Image/T%E1%BB%AB%20v%E1%BB%B1ng%202.0/50.1.png" ,
        "Word":"happy" ,
        "Pronounce":"/ˈhæpi/" ,
        "Means":" vui vẻ",
    },
    {
        "img": "https://s3-ap-northeast-1.amazonaws.com/elifile/public/images/question/Image/T%E1%BB%AB%20v%E1%BB%B1ng%202.0/50.6.png",
        "Word":"calm" ,
        "Pronounce":" /kɑːm/",
        "Means":"điềm tĩnh" ,
    },
    {
        "img":"https://s3-ap-northeast-1.amazonaws.com/elifile/public/images/question/Image/T%E1%BB%AB%20v%E1%BB%B1ng%202.0/50.3.png" ,
        "Word":"angry" ,
        "Pronounce":"/ˈæŋɡri/",
        "Means":"tức giận" ,
    },
    
    ];
    


let word = null;

function nextWord() {
    let wordRd = words.sort(i => 0.5 - Math.random());
    word = wordRd[0];
    $('#word').text(word.Word);
    $('#img').attr('src', word.img);
    $('#pronounce').text(word.Pronounce);
    $('#mean').text(word.Means);
}

function sound() {
    if (word) {
        responsiveVoice.speak(word.Word);
    }
}


$(document).keydown(function(e) {
    console.log(e);
    if (e.keyCode == 32) {
        nextWord();
    }
})

nextWord();

