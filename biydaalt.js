const questions = [
    // N1 (A,B,C,D)
    {
        question: "もうすぐ海外旅行に行くというのに切符の手配............、パスポートも用意していない。",
        // Correct はおろか
        options: ["はおろか", "にひきかえ", "といえども", "をとわず"],
        correctAnswer: "A", 
        level: 1
    },
    {
        question: "話し合いの結果............では、ストライキも辞さない覚悟だ。",
        // Correct いかん
        options: ["のわけ", "いかん", "かぎり", "のよう"],
        correctAnswer: "B",
        level: 1
    },
    {
        question: "こんな風が強い日に小型のボートで沖に出るなんて、危険............。",
        options: ["極める", "極まっている", "極まりない", "極めない"],
        correctAnswer: "C",
        level: 1
    },
    {
        question: "孫が無事生まれたとの知らせに、彼が喜んだのは............。",
        // Correct: いうまでもない
        options: ["いうくらいだ", "いうきらいがある", "いうにあたらない", "いうまでもない"],
        correctAnswer: "D",
        level: 1
    },

    // N2 (A,B,C,D)
    {
        question: "彼は確かにりっぱな人だと思うが、この点に関してだけはどう見ても間違っていると............。",
        // Correct: 言わざるをえない
        options: ["言わざるをえない", "言うどころではない", "言わずにおくしかない", "言うわけにはいかない"],
        correctAnswer: "A",
        level: 2
    },
    {
        question: "あの人が志望の大学に入れたのは、まじめな努力の結果に............。",
        // Correct: ほかならない
        options: ["ほかない", "ほかならない", "違いない", "わけがない"],
        correctAnswer: "B",
        level: 2
    },
    {
        question: "環境問題の解決策を............、熱心な議論が続いている。",
        // Correct: めぐって
        options: ["通じて", "こめて", "めぐって", "まわって"],
        correctAnswer: "C",
        level: 2
    },
    {
        question: "休養に徹すると言い............頭から仕事のことが離れない。",
        // Correct: ながらも
        options: ["かたがた", "ながらに", "ついでに", "ながらも"],
        correctAnswer: "D",
        level: 2
    },

    // N3 (A,B,C,D)
    {
        question: "ちょっと熱............。風邪を引いたのかもしれない。",
        // Correct: っぽい
        options: ["っぽい", "だらけだ", "気味だ", "がちだ"],
        correctAnswer: "A",
        level: 3
    },
    {
        question: "彼とは高校を卒業し.............、一度も会っていない。",
        // Correct: て以来
        options: ["たところ", "て以来", "た上で", "たらしく"],
        correctAnswer: "B",
        level: 3
    },
    {
        question: "息子が大学に合格して、うれしくて............。",
        // Correct: ならない
        options: ["すまない", "かまわない", "ならない", "はいけない"],
        correctAnswer: "C",
        level: 3
    },
    {
        question: "通勤に車を使っていると、運動不足に............。",
        // Correct: なりがちだ
        options: ["しそうだ", "なるせいだ", "するべきだ", "なりがちだ"],
        correctAnswer: "D",
        level: 3
    },

    // N4 (A,B,C,D)
    {
        question: "図書館へ本をかえし............行きます。",
        // Correct: に
        options: ["に", "を", "へ", "で"],
        correctAnswer: "A",
        level: 4
    },
    {
        question: "子どものとき、私は毎日母に漢字の勉強............させられた。",
        // Correct: を
        options: ["に", "を", "が", "で"],
        correctAnswer: "B",
        level: 4
    },
    {
        question: "こんどの日曜日は出かけます、友だちのが............んです。",
        // Correct: ある
        options: ["あった", "あります", "ある", "行く"],
        correctAnswer: "C",
        level: 4
    },
    {
        question: "ちょっとあついですね。まどを............もいいですか。",
        // Correct: 開けて
        options: ["開け", "開ける", "開けた", "開けて"],
        correctAnswer: "D",
        level: 4
    },

    // N5 (A,A,C,B)
    {
        question: "わたしは   きのう　おとうと ……. テニスを　しました。",
        options: ["と","や", "を", "か"],
        correctAnswer: "A",
        level: 5
    },
    {
        question: "あたらしいコンピューターが …….です。",
        options: ["ほしい","ありたい", "ほしいでした", "ありたくない"],
        correctAnswer: "A",
        level: 5
    },
    {
        question: "おかあさんは …….でんしゃで来ますか。",
        options: ["どれ", "どこ","どの", "どちら"],
        correctAnswer: "C",
        level: 5
    }
    {
        question: "きのう　えいがを…….から　どう　しましたか。"
        options: ["見ます", "見て", "見", "見る"].
        correctAnswer: "B",
        level: 5
    }
    
];
//Creating the questions form
const form = document.getElementById("testForm");
const container = document.getElementById("questionsContainer");

questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    
    const p = document.createElement("p");
    p.textContent = `Question ${index + 1}: ${q.question}`;
    questionDiv.appendChild(p);

    const div = document.createElement("div");
    const questionName = `q${index + 1}`;

    q.options.forEach((optionText, optionIndex) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = questionName;

        const optionLetter = String.fromCharCode(65 + optionIndex);
        radio.value = optionLetter;

        label.appendChild(radio);
        label.append(` ${optionLetter}. ${optionText}`);
        div.appendChild(label);
        div.appendChild(document.createElement("br"));
    });

    questionDiv.appendChild(div);
    container.appendChild(questionDiv);
});



// timer
let timeLeft = 15 * 60;
const timerDisplay = document.getElementById('timerDisplay');

const timerInterval = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        // Tsag duusvl automataar duusgah
        document.getElementById("testForm").dispatchEvent(new Event('submit'));
    }
}, 1000);


//Determine level

document.getElementById("testForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from reloading the page

    // We'll store the scores for each level in an object.
    const levelScores = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };

    questions.forEach((q, index) => {
        const questionName = `q${index + 1}`;
        const userAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
        
        if (userAnswer) {
            // userAnser.value n q.correctAnswer-tai matchlj bga eseh
            if (userAnswer.value === q.correctAnswer) {
                // level bureer ni hadgalaad object blgh
                levelScores[q.level] += 1;
            }
        }
    });

    // Tuvshing gargah
    let userLevel = null;
    for (let lvl = 1; lvl <= 5; lvl++) {
        if (levelScores[lvl] >= 3) {
            userLevel = lvl;
            break;
        }
    }

    let levelText;
    if (userLevel === null) {
        levelText = "No level determined";
    } else {
        levelText = `You are considered N${userLevel} level.`;
    }

    const modal = document.getElementById('resultModal');
    const resultText = document.getElementById('resultText');
   

    resultText.textContent = levelText;
    modal.style.display = "block";

    // gargah
    document.getElementById('closeModal').addEventListener('click', function() {
        modal.style.display = "none";
    });

    // gargah gehdee gadna tald darval
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});









