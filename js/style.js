function faqExpand(){
    let faqBtn = document.getElementsByClassName("faq-expand");
    let faqDescription = document.getElementsByClassName("faq-description");

    for(var a = 0 ; a < faqBtn.length; a++){
        faqBtn[a].addEventListener("click",function(e){
            if(faqDescription[this.id].style.display=="none"){
                faqDescription[this.id].style.display="block";
            }
            else if(faqDescription[this.id].style.display=="block"){
                faqDescription[this.id].style.display="none";
            }
        });
    }
}


faqExpand();