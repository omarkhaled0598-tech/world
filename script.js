function handleImageChange() {
    var img = document.getElementById("img_1");
    console.log(img.src)
    img.src = "img/slide2-demo1.jpg";

}



function handleFormSubmit(event) {
    console.log(event)
    event.preventDefault();
    console.log("name:", form.elements["name"]);
    console.log("email:", form.elements["email"]);
}
var data = []
var form = document.getElementById("myForm");
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("name:", form.elements["name"]);
    console.log("email:", form.elements["email"].value);
    data.push({
        name: form.elements["name"].value,
        email: form.elements["email"].value
    });
    console.log(data);
})
