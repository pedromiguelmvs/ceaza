const buttonCreateElement = document.querySelector("button[name=create]");
const formElement = document.querySelector("form[name=form]");
const sectionCardsElement = document.querySelector("ul[class=cards]");

const inputTitleElement = document.querySelector("input[name=title]");
const inputDescriptionElement = document.querySelector("input[name=description]");
const emptyElement = document.querySelector("section[class=empty]");

const articleElement = document.querySelectorAll("article[class=card]");

const projects = [];

if (!projects.length) {
    sectionCardsElement.style['height'] = '300px';
    sectionCardsElement.style['display'] = 'flex';
    sectionCardsElement.style['align-items'] = 'center';
    sectionCardsElement.style['justify-content'] = 'center';
    emptyElement.style['display'] = 'flex';
}

function listProjects() {
    const articles = document.querySelectorAll("li");
    
    for (const item of articles) {
        sectionCardsElement.removeChild(item);
    }

    for (const item of projects) {
        const li = document.createElement("li");
        const card = document.createElement("div");

        const title = document.createElement("h2");
        const titleValue = document.createTextNode(item.title);
        title.appendChild(titleValue);

        const description = document.createElement("p");
        const descriptionValue = document.createTextNode(item.title);
        description.appendChild(descriptionValue);

        const img = document.createElement('img');
        img.src = '../assets/close.svg';
        img.alt = 'deletar';
        
        card.appendChild(title);
        card.appendChild(description);
        li.appendChild(card);
        li.appendChild(img);
        li.className = 'card';

        sectionCardsElement.appendChild(li);
    }
}

function showForm() {
    if (formElement.style['display'] === 'flex') {
        return formElement.style['display'] = 'none'
    }

    formElement.style['display'] = 'flex';
}

buttonCreateElement.addEventListener('click', showForm);

function onCreate(event) {
    event.preventDefault();

    const formData = new FormData(formElement);

    if (!formData.get('title') || !formData.get('description')) {
        return false;
    }

    const title = formData.get('title');
    const description = formData.get('description');

    if (!projects.length) {
        emptyElement.style['display'] = 'none';
        sectionCardsElement.style['height'] = null;
        sectionCardsElement.style['display'] = 'grid';
        sectionCardsElement.style['align-items'] = null;
        sectionCardsElement.style['justify-content'] = null;
    }

    projects.push({ title, description });

    inputTitleElement.value = "";
    inputDescriptionElement.value = "";

    showForm();
    listProjects();
}

formElement.addEventListener('submit', onCreate);
