// Remove loading cursor when page has loaded
window.addEventListener("load", () => {
    document.documentElement.classList.remove("loading");
});

const lightbox = document.querySelector(".lightbox");
const creditsProject1 = document.querySelector("#project-1-credits");
const creditsProject4 = document.querySelector("#project-4-credits");

function initProject(_id, color) 
{
    var project = document.querySelector("#"+_id);

    const mainImg = project.querySelector(".project-main-img");
    const mainVideo = project.querySelector(".project-main-video");
    const carouselItem = project.querySelectorAll(".carousel-item");
    const carouselList = project.querySelector(".carousel-list")
    const slideButtons = project.querySelectorAll(".slider-arrow")

    //Set the right border color for each project
    carouselItem.forEach(selectedItem => {selectedItem.style.border = `0.15em solid var(${color})`; });
    
    //Select first carousel by default
    // carouselItem[0].style.border = "0.15em solid var(--clr-accent)";
    
    // Carousel Next / Previous buttons behavior
    slideButtons.forEach(button => 
    {
        button.addEventListener("click", () => 
        {
            const direction = button.id === "previous" ? -1 : 1;
            const scrollAmount = 500 * direction;
            carouselList.scrollBy({ left: scrollAmount, behavior: "smooth"});
        });
    });
    
    const handleSlideButtons = () => 
    {
        slideButtons[0].style.display = carouselList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = carouselList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

    carouselList.addEventListener("scroll", () => 
    {
        handleSlideButtons();
    });
    
    // Select carousel items
    carouselItem.forEach(item => 
    {
        item.addEventListener("click", () => 
        {   
            carouselItem.forEach(selectedItem => 
            {
                selectedItem.style.border = `0.15em solid var(${color})`;
            });

            item.style.border = "0.15em solid var(--clr-accent)";

            if(item.id === "img")
            {
                document.querySelectorAll('iframe').forEach(v => { v.src = v.src });
                mainVideo.style.display = "none";
                
                mainImg.style.display = "inline";
                mainImg.src = item.src; 
            }
            else
            {
                mainImg.style.display = "none";
                mainVideo.style.display = "inline";
                mainVideo.src = item.id;
            }
        });
    });

    // Open lightbox
    mainImg.addEventListener("click", () => 
    {
        lightbox.style.display = "flex";
        document.getElementById("lightbox-content").src = mainImg.src;
    });

    // Close lightbox
    lightbox.addEventListener("click", () => 
    {
        lightbox.style.display = "none";
    });

    // Close using Escape
    document.body.addEventListener("keydown", (ev) =>
    {
        if(ev.key == "Escape" && lightbox.style.display != "none")
        {
            lightbox.style.display = "none";
        }
    });
}

window.addEventListener("load", initProject("project-pro-1", "--clr-dark-grey"));
window.addEventListener("load", initProject("project-pro-2", "--clr-dark-grey"));
window.addEventListener("load", initProject("project-1", "--clr-dark"));
window.addEventListener("load", initProject("project-2", "--clr-dark"));
window.addEventListener("load", initProject("project-3", "--clr-dark"));
window.addEventListener("load", initProject("project-4", "--clr-dark"));


const initProjectSelection = () => 
{
    const projectSelectors = document.querySelectorAll(".project-selection-element");
    var projects = document.querySelector(".projects").querySelectorAll(".project");

    //Select the first by default
    projectSelectors[0].style.border = "0.15em solid var(--clr-accent)";
    projectSelectors[0].style.transform = "scale(1.05)";
    var projectSelected = projectSelectors[0].id.slice(2);

    projectSelectors.forEach(item => 
    {
        //Hover
        item.addEventListener("mouseover", () => 
        {
            if(item.id.slice(2) != projectSelected)
            {
                item.style.border = "0.15em solid var(--clr-white)";
                item.style.transform = "scale(1.01)";
            }
        });

        //Unhover
        item.addEventListener("mouseout", () => 
        {
            if(item.id.slice(2) != projectSelected)
            {
                item.style.border = "0.15em solid var(--clr-dark)";
                item.style.transform = "scale(1)";
            }
        });

        //Select
        item.addEventListener("click", () => 
        {   
            document.querySelectorAll('iframe').forEach(v => { v.src = v.src });
            projectSelectors.forEach(selectedItem => 
            {
                selectedItem.style.border = "0.15em solid var(--clr-dark)";
                selectedItem.style.transform = "scale(1)";
                creditsProject1.style.display = "none";
                creditsProject4.style.display = "none";
            });
            
            item.style.border = "0.15em solid var(--clr-accent)";
            item.style.transform = "scale(1.05)";
            if(item.id.slice(2) == "project-1") creditsProject1.style.display = "block";
            if(item.id.slice(2) == "project-4") creditsProject4.style.display = "block";

            projectSelected = item.id.slice(2);
            
            projects.forEach(prj => 
            { 
                if(prj.id != projectSelected)
                    prj.style.display = "none";
                else
                    prj.style.display = "grid";
            });
        });
    });
}

window.addEventListener("load", initProjectSelection);

const initProProjectSelection = () => 
{
    const projectSelectors = document.querySelectorAll(".project-pro-selection-element");
    var projects = document.querySelector(".projects-pro").querySelectorAll(".project");

    //Select the first by default
    projectSelectors[0].style.border = "0.15em solid var(--clr-accent)";
    projectSelectors[0].style.transform = "scale(1.05)";
    var projectSelected = projectSelectors[0].id.slice(2);

    projectSelectors.forEach(item => 
    {
        //Hover
        item.addEventListener("mouseover", () => 
        {
            if(item.id.slice(2) != projectSelected)
            {
                item.style.border = "0.15em solid var(--clr-white)";
                item.style.transform = "scale(1.01)";
            }
        });

        //Unhover
        item.addEventListener("mouseout", () => 
        {
            if(item.id.slice(2) != projectSelected)
            {
                item.style.border = "0.15em solid var(--clr-dark-grey)";
                item.style.transform = "scale(1)";
            }
        });

        //Select
        item.addEventListener("click", () => 
        {   
            document.querySelectorAll('iframe').forEach(v => { v.src = v.src });
            projectSelectors.forEach(selectedItem => 
            {
                selectedItem.style.border = "0.15em solid var(--clr-dark-grey)";
                selectedItem.style.transform = "scale(1)";
                creditsProject1.style.display = "none";
            });
            
            item.style.border = "0.15em solid var(--clr-accent)";
            item.style.transform = "scale(1.05)";
            if(item.id.slice(2) == "project-pro-1") creditsProject1.style.display = "block";

            projectSelected = item.id.slice(2);
            
            projects.forEach(prj => 
            { 
                if(prj.id != projectSelected)
                    prj.style.display = "none";
                else
                    prj.style.display = "grid";
            });
        });
    });
}

window.addEventListener("load", initProProjectSelection);