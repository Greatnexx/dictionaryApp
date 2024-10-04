
const words = [

    {
        word:'love',
        meaning:'show of Affection',
        example:'I love my father',
        synonyms:['charity','Affection','Feelings']
    },
    {
        word:'happy',
        meaning:'full of happiness',
        example:'I am happy with the new job',
        synonyms:['joyful','content','cheerful']
    },
    {
        word:'sad',
        meaning:'full of sadness',
        example:'I am sad because I missed my train',
        synonyms:['sorrowful','dejected','melancholic']
    },
    {
        word:'angry',
        meaning:'full of anger',
        example:'He is angry at his brother',
        synonyms:['furious','violent','hostile']
    },
    {
        word:'fear',
        meaning:'full of fear',
        example:'I am afraid of the dark',
        synonyms:['terrified','scared','afraid']
    }
]


const input = document.getElementById('input');
const btn = document.getElementById('btn');
const box = document.querySelector('.result-box');

btn.addEventListener('click',()=>{
    const inputVal = input.value

    const findWords = words.find(word => word.word === String(inputVal.toLowerCase().trim()));

    if(findWords){
        box.innerHTML = `
            <h3>${findWords.word}</h3>
            <p>${findWords.meaning}</p>
            <p>${findWords.example}</p>
            <i>${findWords.synonyms.toString()}</i>
        `;
    } else{

        box.innerHTML =`
        <h1>${inputVal} was not found!</h1>`
    }
   
})

