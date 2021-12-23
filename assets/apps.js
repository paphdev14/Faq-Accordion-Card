// Declare variables
const faqLists = document.querySelector('.faq-lists');
const faqs = document.querySelectorAll('.faq');

faqLists.addEventListener('click', function(e){
    const faqElement = e.target.parentElement.parentElement.parentElement;
    if(e.target.dataset.arrow === 'down'){
        // Remove all answers
        removeAnsrs()
        faqElement.classList.add('display-answer');
    }else{
        faqElement.classList.remove('display-answer');
    }
});

// Remove all answers
function removeAnsrs(){
    for (let faq of faqs){
        if(faq.classList.contains('display-answer')){
            faq.classList.remove('display-answer')
        }
    }
}