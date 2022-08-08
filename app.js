var getacctitle = document.getElementsByClassName("acctitle");
console.log(getacctitle); //HTML  Collection Array
var getacccontent = document.querySelectorAll(".acccontent");
console.log(getacccontent); //NodeList Array

for (var x = 0; x < getacctitle.length; x++) {
    //console.log(x);

    getacctitle[x].addEventListener("click", function (e) {
        // console.log(e.target);
        //console.log(this);

        this.classList.toggle("active");

        var getcontent = this.nextElementSibling;
        if (getcontent.style.height) {
            // getcontent.style.height = 0;
            getcontent.style.height = null; //betware can;t set 0
        } else {
            // console.log(getcontent.scrollHeight)
            //     getcontent.style.height = 80 + "px";

            getcontent.style.height = getcontent.scrollHeight + "px"; //
        }
    });


    if (getacctitle[x].classList.contains("active")) {
        getacccontent[x].style.height = getacccontent[x].scrollHeight + "px";
    }
}