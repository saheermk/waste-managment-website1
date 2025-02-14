fetch('data.json')
.then(response => response.json())
.then(data => {
    const datasContainer = document.getElementById('system');
    const bookList = data.map(datas => {
        return`
        <ul>
            <li>
                <img src="${datas.image}" alt="${datas.title}">
                <p>${datas.description}</p>
                <button>Learn More</button>
            </li>
        </ul>
        `;
    }).join('');
    datasContainer.innerHTML = bookList;

    window.datasData = data;
})
.catch(error=>{
    console.error('Error:', error);
});