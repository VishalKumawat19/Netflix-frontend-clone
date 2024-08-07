let icon = document.querySelectorAll(".faq-ques i");
let faqQdivs = document.querySelectorAll(".faq-ques");
let answerDiv = document.querySelectorAll(".answer-div")

faqQdivs.forEach((ques)=>{
    ques.addEventListener("click",()=>{
        ques.children[0].classList.toggle("fa-plus");
        ques.children[0].classList.toggle("fa-xmark");
        ques.nextElementSibling.classList.toggle("show-answer");

        faqQdivs.forEach((otherElements)=>{
            if(otherElements!=ques){
                otherElements.nextElementSibling.classList.remove("show-answer");
                otherElements.children[0].classList.remove("fa-xmark");
                otherElements.children[0].classList.add("fa-plus");
            }
        })

    })
})

    




