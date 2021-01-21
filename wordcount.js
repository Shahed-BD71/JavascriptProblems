// count word in a sentence.

var speech = "Bangladesh’s per capita GDP was merely half of India’s in 2007 — but this was just before the global financial crisis. It was roughly 70% of India’s in   2014 and this   gap closed rapidly in the last few years."

count = 0;
for (let i = 0; i < speech.length; i++) {
    var word = speech[i];
    if (word == " " && speech[i-1] != " "){
        count++;
    }
}
console.log(count);


// count specific letter in a sentence.
var sentence = "I am hardworking. I am serious. I am sure I will do it";
var count = 0;
for (let i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter == "a") {
        count++;
    }
    
}
console.log(count);

// count line in a Paragraph.
var Paragraph = "Bangladesh is a southeast Asian country. It stands on the Bay of Bengal, which is on the south and the other three sides are surrounded by India. She also shares a little (271 Km.) of the southeast border with Myanmar. The population of about 140 million. Most of the people speak Bengali, which is the state language. English is seldom spoken. There are some tribal languages too. About 85% of the total population is Muslim. The rest Hindus, Christens, and Buddhists. People of all religions live here peacefully. The 26th March and 16 December are our Independence Day and Victory Day respectively. The national dress for men is pajama and Punjabi and for women sari and blouse. The informal dress for man is a lunge. Our main food is rice, fish, and dal. Bangladesh is self-sufficient in food. The largest sea-beach of the world in Cox’s Bazar on the southwest coast of the country. Her charming beauty is also fascinating. The people of our country are very friendly and peace-loving. Every year thousands of tourists visit Bangladesh for her natural beauty in a friendly atmosphere."
var count = 0;

for (var i = 0; i < Paragraph.length; i++) {
    var line = Paragraph[i];
    if (line == ".") {
        count++
    }
    
}
console.log(count);