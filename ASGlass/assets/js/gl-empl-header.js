const quest = Array.from(document.querySelectorAll('.help-decide-quest .quest'));
const questtext = Array.from(document.querySelectorAll('.help-decide-quest .quest-text'));
const questtexticon = Array.from(document.querySelectorAll('.quest .quest-dropdown'));


const clearActive = () => {
    quest.forEach(quest => {
        quest.classList.remove('active');
    });
    questtext.forEach(questtext => {
        questtext.classList.remove('active');
    });
}
quest.forEach(quest => {
    quest.onclick = function () {
        clearActive();
        const targetId = quest.getAttribute('data-target') //home
        const targetContent = document.getElementById(targetId);
        quest.classList.add('active');
        targetContent.classList.add('active');
        questtexticon.classList.add("questopen");
    }
});

// targetContent.style.height = targetContent.scrollHeight + "px";


// Feature section
const ftrbtn = Array.from(document.querySelectorAll('.ftr-btn .ftr-click'));
const ftrcards = Array.from(document.querySelectorAll('.ftr-card .ftr-card-item'));

const clearShow = () => {
    ftrbtn.forEach(ftrbtn => {
        ftrbtn.classList.remove('active');
    });
    ftrcards.forEach(ftrcards => {
        ftrcards.classList.remove('show-ftr');
    });
}
ftrbtn.forEach(ftrbtn => {
    ftrbtn.onclick = function (e) {
        clearShow();
         e.preventDefault();
        const targetId = ftrbtn.getAttribute('data-ftr') //home
        const targetContent = document.getElementById(targetId);
        ftrbtn.classList.add('active');
        targetContent.classList.add('show-ftr');
    }
});