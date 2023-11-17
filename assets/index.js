let backgroundColorsArray = ["pink-background-color", "phosphore-background-color", "purple-background-color"]
let specialityArray = ["UI/UX DESIGNER? ", "SOFTWARE ENGINEER? ", "DATA ENGINEER? "]
let personTextArr =["Looking back, I cannot believe that only a year ago, I knew almost nothing about programming, and now I am a professional software engineer working remotelyfor a startup located in Norway. The boot camp was a life-changing experience for me.",
    "Hiring skilled engineers has never been easy. With SE Factory, this became super easy and effective. Candidates are well-trained and we get to see their strengths before hiring, which is perfect for a growing startup.",
"Growing up, I saw that every girl that had taken interest in anything technical or scientific had been undermined and underestimated in her field. That isn't fair, breaking this stereotype is a must. The first step I took towards doing this was to join SEF, a bootcamp that supported diversity and inclusion."];

let personImgArr=["./assets/images/zakaria.png", "./assets/images/rayan.jpeg", "./assets/images/zeina.png"]
let firstNameArr=["Zakaria", "Rayan","Zeina"]
let lastNameArr=["T.", "Najdi", "O."]
let workArr=["> SEF alumnus working at Celsia", "> Lebanon, Geek Express", "> SEF alumna working at Poyesis"]
let placeArr=["Celsia", "Geek Express", "Poyesis"]

let i=0
let index=0;
let fcsMap={
    firsttitle:">  FCS: ",
    secondtitle:" Foundations of Computer Science",
    bgColor:"background-orange",
    color:"color-orange",
    text:"// This 9-week course covers fundamental topics in computer science, including data structures, algorithms, and foundational concepts. It is suitable for coding enthusiasts, former computer science students, and beginners who wish to learn Python programming, object-oriented programming, file systems, and more. The course includes online video materials, assignments, and instructor-led sessions."
}

let fswmap={
    firsttitle:">  FSW: ",
    secondtitle:"Full-Stack Web Development",
    bgColor:"background-phosphore",
    color:"color-phosphore",
    text:"// Our 14-week bootcamp is designed to equip aspiring developers with the technical and interpersonal skills needed to become professional software engineers. Participants will learn essential concepts such as Version Control,Object-Oriented Programming, Database Management Systems, MVC Design Patterns,Dependency Management, modern Web Frameworks, and AWS. The program also includes a soft-skills curriculum covering Communication & Interpersonal Skills, Professional Writing, Technical Presentations, Negotiation, and Interviewing, which will be taught through lectures, weekly projects, tech talks, and a final project to showcase their learning."
}

let fsdMap={
    firsttitle:">  FSD: ",
    secondtitle:"Full-Stack-Data",
    bgColor:"background-purple",
    color:"color-purple",
    text:"// SE Factory's 12-week Full-Stack Data course offers robust training in data analysis and engineering. Participants learn to handle large data sets with Python and use libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization. The course also delves into cloud orchestration, distributed computing, relational databases, and SQL basics. Hands-on projects provide real-world data analysis experience. Upon completion, students gain proficiency in Python for analytics, understand data warehousing, and can effectively visualize and present data insights."
}

let uixMap={
    firsttitle:">  UIX: ",
    secondtitle:"UI/UX Design Bootcamp",
    bgColor:"background-pink",
    color:"color-pink",
    text:"// SE Factory's 6-week UI/UX course offers immersive learning in UI/UX design. It encompasses the essentials of UI/UX, from mastering Figma, color psychology, typography to UX heuristics, prototyping and WCAG guidelines. Learners work on projects, transforming wireframes into mockups, and creating responsive interfaces. The course culminates in a final project, enabling students to conduct a thorough UX audit, revamp a website, and create a well-documented case study. Graduates leave equipped with a polished portfolio and market-ready skills in UI/UX design."
}

let map = new Map();
map.set("FCS", fcsMap);
map.set("FSW", fswmap);
map.set("FSD", fsdMap);
map.set("UIX", uixMap);

let backgroundColorArr = ["background-orange","background-purple","background-phosphore","background-pink"];
let colorArr= ["color-orange", "color-purple", "color-phosphore", "color-pink"];

let firstContainerLeftElement = document.getElementById("first-container-left")
let specialitMovingTextElement = document.getElementById("speciality-moving-text");
let overlayElement = document.getElementById("overlay");
let closeBtnElement = document.getElementById("close-btn");
let menuFadeElement = document.getElementById("menu-fade");
let burgerIconElement = document.getElementById("burger-icon");
let chooseaElement = document.getElementsByClassName("choosea");
let programesSectionElement = document.getElementById("programes-section");
let firsTitleMapElement = document.getElementById("first-title-map");
let secondTitleMapElement = document.getElementById("second-title-map");
let textMapElement = document.getElementById("text-map"); 
let confirmElement = document.getElementById("confirm");
let pickPathSectionBtnElement = document.getElementsByClassName("pick-path-section-btn")
let firstQuestionAnswerElement = document.getElementById("first-question-answer");
let firstAnswerElement = document.getElementById("first-answer");
let secondQuestionAnswerElement = document.getElementById("second-question-answer");
let secondAnswerElement = document.getElementById("second-answer");
let thirdQuestionAnswerElement = document.getElementById("third-question-answer");
let thirdAnswerElement = document.getElementById("third-answer");
let persImgElement = document.getElementById("pers-img");
let smallPersonImgElement = document.getElementById("small-person-img");
let persTextElement = document.getElementById("pers-text");
let firstNameElement = document.getElementById("first-name");
let familyNameElement = document.getElementById("family-name");
let workElement = document.getElementById("work");
let workPlaceElement = document.getElementById("work-place");


let c=0;

const setAsyncTimeout = (cb, timeout = 0) => new Promise(resolve => {
    setTimeout(() => {
        cb();
        resolve();
    }, timeout);
});

const doStuffAsync = async () => {
    while(true){ 
        let realIndex = i % 3 ;
        let lettersArray= specialityArray[realIndex];
        specialitMovingTextElement.innerHTML = " ";
        if(realIndex ==0){
            overlayElement.classList.remove(`${backgroundColorsArray[specialityArray.length-1]}`)
        }else{
            overlayElement.classList.remove(`${backgroundColorsArray[realIndex -1]}`)
        }
        overlayElement.classList.add(`${backgroundColorsArray[realIndex]}`)
        for(let y=0; y<lettersArray.length; y++){
            
            await setAsyncTimeout(() => {
                specialitMovingTextElement.innerHTML += lettersArray.charAt(y) ;         
            }, 200);
        }

        await setAsyncTimeout(() => {         
        }, 200);

        i++;
        specialitMovingTextElement.innerHTML = " ";
    }   
};

doStuffAsync();

closeBtnElement.addEventListener("click", function(){
    closeMenu();
})

burgerIconElement.addEventListener("click", function(){
    menuFadeElement.classList.remove("hidden");
})

chooseaElementArr= [...chooseaElement]
chooseaElementArr.forEach(element => {
    element.addEventListener("click",function(){
    closeMenu()
    })
});

function closeMenu(){
    menuFadeElement.classList.add("hidden")
}


pickPathSectionBtnElementArr = [...pickPathSectionBtnElement]
pickPathSectionBtnElementArr.forEach(element =>{
    element.addEventListener("click",function(){
        firsTitleMapElement.innerHTML = "";
        const btnId = element.innerHTML
        removeClasses();
        let btnObj = map.get(btnId)
        firsTitleMapElement.innerHTML = btnObj.firsttitle;
        firsTitleMapElement.classList.add(btnObj.color);
        secondTitleMapElement.innerHTML =" "+ btnObj.secondtitle;
        textMapElement.innerHTML = btnObj.text;
        programesSectionElement.classList.add(btnObj.bgColor);
        confirmElement.classList.add(btnObj.color);
        element.classList.add('background-black-pick');
        element.classList.add(btnObj.color)
    })
})

function removeClasses(){
    pickPathSectionBtnElementArr.forEach(element =>{
        element.classList.remove('background-black-pick');
        for(let d=0; d<colorArr.length; d++){
            element.classList.remove(colorArr[d])
        }
    }) 
    for(let e=0; e<backgroundColorArr.length; e++){
        programesSectionElement.classList.remove(backgroundColorArr[e]);
        firsTitleMapElement.classList.remove(colorArr[e]);
        confirmElement.classList.remove(colorArr[e])
    } 
}

firstQuestionAnswerElement.addEventListener("click",function(){
    firstAnswerElement.classList.toggle('hidden');
})

firstAnswerElement.addEventListener("click",function(){
    firstAnswerElement.classList.toggle('hidden');
})

secondQuestionAnswerElement.addEventListener("click",function(){
    secondAnswerElement.classList.toggle('hidden');
})

secondAnswerElement.addEventListener("click",function(){
    secondAnswerElement.classList.toggle('hidden');
})

thirdQuestionAnswerElement.addEventListener("click",function(){
    thirdAnswerElement.classList.toggle('hidden');
})

thirdAnswerElement.addEventListener("click",function(){
    thirdAnswerElement.classList.toggle('hidden');
})

const fetchStudentInfoAsync = async () => {
    while(true){ 
        let therealIndex = index % 3 ;
        persImgElement.src = personImgArr[therealIndex];
        smallPersonImgElement.src = personImgArr[therealIndex];
        persTextElement.innerHTML = personTextArr[therealIndex];
        firstNameElement.innerHTML = firstNameArr[therealIndex];
        familyNameElement.innerHTML = lastNameArr[therealIndex];
        workElement.innerHTML = workArr[therealIndex];
        workPlaceElement.innerHTML = placeArr[therealIndex]
        for(let b=0; b<personTextArr.length; b++){
            
            await setAsyncTimeout(() => {
                
            }, 2000);
        }

        await setAsyncTimeout(() => {         
        }, 400);

        index++;
    }   
};

fetchStudentInfoAsync();





