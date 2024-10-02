const Navigation = $("#navigation").children("a");
const MainContent = $("#mainContent");
const MenuTitle = $("#menuTitle");
const HomeText = "<p>Home and welcome to my personal website! I’m [Your Name], a passionate software engineer specializing in creating impactful and innovative solutions. My work focuses on .NET Core, Node.js, and mobile app development.</p><p>Explore my projects, learn more about me, and get in touch if you’re interested in collaborating or discussing technology.</p>"

const AboutText = "<p>About and welcome to my personal website! I’m [Your Name], a passionate software engineer specializing in creating impactful and innovative solutions. My work focuses on .NET Core, Node.js, and mobile app development.</p><p>Explore my projects, learn more about me, and get in touch if you’re interested in collaborating or discussing technology.</p>"

const ProjectText = "<p>Project and welcome to my personal website! I’m [Your Name], a passionate software engineer specializing in creating impactful and innovative solutions. My work focuses on .NET Core, Node.js, and mobile app development.</p><p>Explore my projects, learn more about me, and get in touch if you’re interested in collaborating or discussing technology.</p>"

const ContactText = "<p>Contact and welcome to my personal website! I’m [Your Name], a passionate software engineer specializing in creating impactful and innovative solutions. My work focuses on .NET Core, Node.js, and mobile app development.</p><p>Explore my projects, learn more about me, and get in touch if you’re interested in collaborating or discussing technology.</p>"

$(Navigation).on('click', function(event){
    event.preventDefault();
    
    MenuTitle.text($(this).text());

    if($(this).text().toUpperCase() === "HOME"){
        MainContent.html(HomeText);
    }else if($(this).text().toUpperCase() === "ABOUT"){
        MainContent.html(AboutText);
    }else if($(this).text().toUpperCase() === "PROJECTS"){
        MainContent.html(ProjectText);
    }else if($(this).text().toUpperCase() === "CONTACT"){
        MainContent.html(ContactText);
    }else{
        MainContent.html("<p class='text-danger text-center'>Nothing Found!<p/>");
    }
});