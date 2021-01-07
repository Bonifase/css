function include_header() {
    document.getElementById("header").innerHTML='<object type="text/html" data="common/header.html" ></object>';
}
function include_footer() {
    document.getElementById("footer").innerHTML='<object type="text/html" data="common/footer.html" ></object>';
}

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("call your functions here");
    include_header();
    include_footer();
  });