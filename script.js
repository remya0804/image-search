//     Show More
// 4RSKU-kwNiJjgywAY5oTye1lpZYtLj-audGTt6TFDXU
const formElement = document.getElementById('search-form');
const searchboxElement = document.getElementById('search-box');
const searchbuttonElement = document.getElementById('search-button');
const searchresultsElement = document.getElementById('search-results');
const showmorebuttonElement = document.getElementById('show-more');

console.log(formElement)

let keyword='';
let page=1;
const access_key = 'svseki0GGR_uTXzr-QF_6uv_67gEuLbOa9JwfDYWF-Y';

const searchFunction =  async () => {

    keyword = searchboxElement.value;

    const search_url = `https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${keyword}&client_id=${access_key}`;

    const response = await fetch(search_url);

    const data = await response.json();

    const results = data.results;

    console.log(data);

    if(page===1){

        searchresultsElement.innerHTML = '';
    }

    results.map((r,idx) => {

        const imageElement = document.createElement('img');

        imageElement.src = r.urls.small;

        const imageLinkElement = document.createElement('a');

        imageLinkElement.href = r.links.html;

        imageLinkElement.target = '_blank';

        imageLinkElement.appendChild(imageElement);

        searchresultsElement.appendChild(imageLinkElement);
    })

    showmorebuttonElement.style.display="block";
}

formElement.addEventListener('submit',(e) => {

    e.preventDefault();

    page=1;

    searchFunction();

    
})

showmorebuttonElement.addEventListener('click',() => {

    page++;
    searchFunction();
})