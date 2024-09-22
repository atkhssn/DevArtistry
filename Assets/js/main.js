const Navigation = $("#navigation").children("a");
const MainContent = $("#mainContent");

$(Navigation).on('click', function(event){
    event.preventDefault();
    MainContent.empty();
    MainContent.text($(this).text());
});