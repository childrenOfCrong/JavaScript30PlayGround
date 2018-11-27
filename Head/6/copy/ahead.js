const endpoint = 'https://gist.githubusercontent.com/HTMLhead/4df46ff900f710fbacca6ae92807bb0d/raw/87a9fdf23ba4b8daebb2f3b4a4c144a33edd14a1/phoneBook.json'

const phoneBook = []
fetch(endpoint).
    then(blob => blob.json()).
    then(data => phoneBook.push(...data))

function findMatches(wordToMatch, phoneBook) {
    const regex = new RegExp(wordToMatch, 'gi');
    return phoneBook.filter(word => {
        return word.name.match(regex) || word.phoneNumber.match(regex)
    })
}

function displayMatches() {
    const matchArr = findMatches(this.value, phoneBook)
    console.log(this.value)
    if(this.value === '') {
        return suggestion.innerHTML = `<ul class="suggestions">
        <li>사람의 이름이나</li>
        <li>핸드폰 번호를 입력하세요</li>
    </ul>`
    }
    const html = matchArr.map(data => {
        const regex = new RegExp(this.value, 'gi')
        const name = data.name.replace(regex, `<span class="hl">${this.value}</span>`)
        const phoneNumber = data.phoneNumber.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
        <li>
            <span class="name">${name}</span>
            <span class="phoneNumber">${phoneNumber}</span>
        </li>
        `
    }).join('');
    suggestion.innerHTML = html
}

const searchInput = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
