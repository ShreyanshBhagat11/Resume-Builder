function scaleCv() {
    document.body.classList.add('scale-cv')
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/
function removeScale() {
    document.body.classList.remove('scale-cv')
}

/*==================== GENERATE PDF ====================*/
// PDF generated area

let container = document.getElementById('container');

let downloadIcon = document.getElementById('download');
let addSkill = document.getElementById('addSkill');
let addLang = document.getElementById('addLang');

// Html2pdf options
let opt = {
    margin: 0,
    filename: 'myResume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a2', orientation: 'portrait' }
};
// Function to call container and Html2Pdf options 
function generateResume() {
    html2pdf(container, opt)
}

function removeIcon() {
    downloadIcon.style.display = 'none';
    addSkill.style.display = 'none';
    addLang.style.display = 'none'
}

function addIcon() {
    downloadIcon.style.display = 'inline-block';
    addSkill.style.display = 'inline-block';
    addLang.style.display = 'inline-block'
}
downloadIcon.addEventListener('click', () => {
    removeIcon();
    generateResume();
    setTimeout(addIcon, 3000);
});


/*==================== Change user photo ====================*/
// console.log("Design 2");
let picfile = document.getElementById('picfile');
let userIcon = document.getElementById('userIcon');
// let upload = document.getElementById('upload');

userIcon.addEventListener("click", function() {
    picfile.click();
});

picfile.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        console.log(file);
        userIcon.style.display = "block";
        reader.addEventListener("load", function() {
            userIcon.setAttribute("src", this.result);
        });
        reader.readAsDataURL(file);

    } else {
        userIcon.setAttribute("src", "/Design2/images/sample-personal-image.jpg");

    }
});