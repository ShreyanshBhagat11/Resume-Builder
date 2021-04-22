let num;
let nameVariable;
let count;

function addSkill() {

    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', 8);
        num = parseInt(localStorage.getItem('name'));
    } else {
        num = parseInt(localStorage.getItem('name'));
    }

    if (localStorage.getItem('count') == null) {
        localStorage.setItem('count', 8);
        count = parseInt(localStorage.getItem('count'));
    } else {
        count = parseInt(localStorage.getItem('count'));
    }

    let skillSection = document.getElementById('skill-section');
    // section = document.getElementById(section);
    // console.log(skillSection);
    let div = document.createElement('div');
    let progressBack = document.createElement('div');
    let Innerdiv = document.createElement('div');
    let divLabel = document.createElement('div');
    div.className = 'skill';
    // div.className = section;
    divLabel.className = 'label';
    progressBack.className = 'progress-back';
    Innerdiv.className = 'rate';
    Innerdiv.setAttribute('contenteditable', false);

    let text = document.createTextNode('extra');

    skillSection.appendChild(div);
    // section.appendChild(div);
    divLabel.appendChild(text);
    div.appendChild(divLabel);
    div.appendChild(progressBack);

    progressBack.appendChild(Innerdiv);

    div.setAttribute('contenteditable', true);

    nameVariable = `rate${num}`;
    for (let i = 5; i > 0; i--) {

        console.log(nameVariable);
        let skill = document.createElement('input');
        let label = document.createElement('label');
        localStorage.setItem('count', count);
        skill.id = `star-${localStorage.getItem('count')}`;
        skill.setAttribute('type', 'radio');
        skill.setAttribute('name', nameVariable);
        skill.setAttribute('value', i);
        label.setAttribute('for', skill.id);
        count += 1;
        localStorage.setItem('count', count);
        console.log(skill, label);
        Innerdiv.appendChild(skill);
        Innerdiv.appendChild(label);

    }
    num++;
    localStorage.setItem('name', num);
}

// For adding new language
function addLang() {
    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', 8);
        num = parseInt(localStorage.getItem('name'));
    } else {
        num = parseInt(localStorage.getItem('name'));
    }

    if (localStorage.getItem('count') == null) {
        localStorage.setItem('count', 8);
        count = parseInt(localStorage.getItem('count'));
    } else {
        count = parseInt(localStorage.getItem('count'));
    }

    let langSection = document.getElementById('lang-section');
    // section = document.getElementById(section);
    // console.log(skillSection);
    let div = document.createElement('div');
    let progressBack = document.createElement('div');
    let Innerdiv = document.createElement('div');
    let divLabel = document.createElement('div');
    div.className = 'lang';
    // div.className = section;
    divLabel.className = 'label';
    progressBack.className = 'progress-back';
    Innerdiv.className = 'rate';
    Innerdiv.setAttribute('contenteditable', false);

    let text = document.createTextNode('extra');

    langSection.appendChild(div);
    // section.appendChild(div);
    divLabel.appendChild(text);
    div.appendChild(divLabel);
    div.appendChild(progressBack);

    progressBack.appendChild(Innerdiv);

    div.setAttribute('contenteditable', true);

    nameVariable = `rate${num}`;
    for (let i = 5; i > 0; i--) {

        // console.log(nameVariable);
        let lang = document.createElement('input');
        let label = document.createElement('label');
        localStorage.setItem('count', count);
        lang.id = `star-${localStorage.getItem('count')}`;
        lang.setAttribute('type', 'radio');
        lang.setAttribute('name', nameVariable);
        lang.setAttribute('value', i);
        label.setAttribute('for', lang.id);
        count += 1;
        localStorage.setItem('count', count);
        // console.log(skill, label);
        Innerdiv.appendChild(lang);
        Innerdiv.appendChild(label);

    }
    num++;
    localStorage.setItem('name', num);
}