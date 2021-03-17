const icon = document.getElementsByClassName("icon");
const tab = document.getElementsByClassName("tab");
for(i=0;i<icon.length;i++)
{
    icon[i].addEventListener("click",function(){
        for(i=0;i<tab.length;i++)
        {
            tab[i].classList.remove('active');
        }
        this.parentElement.classList.toggle("active");
    });
}
