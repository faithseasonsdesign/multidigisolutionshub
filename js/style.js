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

function menuBtn(){
    let menuBtn = document.getElementsByClassName("menu-btn");
    let menuItems = document.getElementsByClassName("navigation-list-items-sm");

    menuBtn[0].onclick = function(){
        if(menuItems[0].style.display ="none"){
            menuItems[0].style.display = "block";
            menuItems[0].style.position = "absolute";
            menuItems[0].style.backgroundColor = "black";
            menuItems[0].style.position = "absolute";
            menuItems[0].style.left = "0";
            menuItems[0].style.right = "0";
            menuItems[0].style.top = "70pt";
            menuItems[0].style.height = "50vh";
            menuItems[0].className = "d-flex align-items-center flex-column container-fluid py-4 justify-content-center";
        }
        else if(menuItems[0].className == "d-flex align-items-center flex-column container-fluid py-4 justify-content-center"){
            menuItems[0].className = "d-none";
        }
    }
}


faqExpand();
//menuBtn();