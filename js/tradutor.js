const logo = document.querySelector("#logo");
const nav_ul = document.querySelector(".nav_ul");
const flag_pt = document.querySelector("#flag-pt");
const flag_en = document.querySelector("#flag-en");
const greeting = document.querySelector("#greeting");
const Smalldescription = document.querySelector("#smalldescription");
const about = document.querySelector("#about");
const information = document.querySelector("#information");
const Skills = document.querySelector(".titulo-skills");
const works = document.querySelector(".titulo-works");
const t_contact = document.querySelector(".titulo-contact");
const send_e = document.querySelector(".send_email");
const t_form = document.querySelector(".t_contact_form")
const button_submit_form = document.querySelector(".submit")


var url = "../content/pt-br.json";

flag_pt.addEventListener("click", () => {
    url = "../content/pt-br.json";
    load();
});

flag_en.addEventListener("click", () => {
    url = "../content/en-us.json";
    load();
});

function load() {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
    // ----- Header --------
        logo.innerHTML = data.header.logo;
        nav_ul.innerHTML = "";
        for(var i = 0; i < data.header.menu.length; i++) {
            nav_ul.innerHTML += `<li><a class="nav_ul_li_a" href="#">${data.header.menu[i]}</a></li>`;
        }
    //-----greeding------
        greeting.innerHTML = data.description.greet;

    //---------Samalldescription----------
        Smalldescription.innerHTML = data.description.Smalldescription;

    //----------about-----------
        about.innerHTML = data.about.about;

    //--------information--------
        information.innerHTML = data.about.information;

    //-------Skills-----------
        Skills.innerHTML = data.skills.skills;
    
    //------Works---------
        works.innerHTML = data.projects.works;

    //----------contact-----------
        send_e.innerHTML = data.contact.send_email;

        t_form.innerHTML = data.contact.t_form;

        button_submit_form.innerHTML = data.contact.b_submit;

        t_contact.innerHTML = data.contact.t_contact;
        

    });

    


}

load();
