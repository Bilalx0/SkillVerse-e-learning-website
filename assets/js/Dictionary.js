const word = document.getElementById('word');
const pho = document.getElementById('pho');
const ant = document.getElementById('ant');
const syn = document.getElementById('syn');
const pos = document.getElementById('pos');
const def1 = document.getElementById('def1');
const def2 = document.getElementById('def2');
const def3 = document.getElementById('def3');
const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
const result = document.getElementById('result');

btn.addEventListener('click', fetchDefinition);
inp.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchDefinition();
    }
});

function fetchDefinition() {
    const word = inp.value.trim();
    if (!word) return;

    result.style.display = 'none';
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => {
            if (!response.ok) throw new Error('Word not found');
            return response.json();
        })
        .then(data => {
            displayResult(data[0]);
        })
        .catch(error => {
            displayError(error.message);
        })
        .finally(() => {
            result.style.display = 'block';
        });
}

function displayResult(data) {
    word.textContent = data.word;
    pho.textContent = data.phonetic || 'N/A';
    pos.textContent = data.meanings[0].partOfSpeech || 'N/A';
    
    const synonyms = data.meanings[0].synonyms.join(', ') || 'N/A';
    const antonyms = data.meanings[0].antonyms.join(', ') || 'N/A';
    syn.textContent = synonyms;
    ant.textContent = antonyms;

    const definitions = data.meanings[0].definitions;
    def1.textContent = definitions[0]?.definition || 'N/A';
    def2.textContent = definitions[1]?.definition || 'N/A';
    def3.textContent = definitions[2]?.definition || 'N/A';

    inp.value = '';
}

function displayError(message) {
    word.textContent = 'Error';
    pho.textContent = message;
    pos.textContent = '';
    syn.textContent = '';
    ant.textContent = '';
    def1.textContent = '';
    def2.textContent = '';
    def3.textContent = '';
}