const contenedor = document.getElementById("container-row");
const btnCrear = document.getElementById("btn-new");
const myModal = new bootstrap.Modal(document.getElementById("myModal"));
const btnSave = document.getElementById("btn-save");
const form = document.getElementById("formulario");
// console.log(btnCrear);

let html = "";
let option = "";
let idForm = "";

const inputTitle = document.getElementById("inputTitle");
const inputDescription = document.getElementById("inputDescription");
const inputLinkUrl = document.getElementById("inputLinkUrl");

btnCrear.addEventListener("click", () => {
    option = "new";
    btnSave.textContent = "new";
    inputTitle.value = "";
    inputDescription.value = "";
    inputLinkUrl.value = "";
    myModal.show();
});

document.addEventListener('click', (event) => {
    if (event.target.matches('#btn-delete')){
        const article = event.target.closest('.col-4')
        const idArticle = article.dataset.id

        fetch(`http://localhost:3001/api/posts/${idArticle}`, {
            method: 'DELETE'
        }).then(res => {
            if(res.ok) {
                article.remove()
            }
        }).catch(err => {
            console.error(err)
        })
    }
})

document.addEventListener('click', (event) => {
    if (event.target.matches('#btn-edit')) {
        const article = event.target.closest('.col-4');
        console.log(article);

        const idArticle = article.dataset.id;
        const linkUrlEdit = article.children[0].children[0].src;
        const tilteEdit = article.children[0].children[1].children[0].textContent;
        const descriptionEdit = article.children[0].children[1].children[1].textContent;

        idForm = idArticle;
        inputTitle.value = tilteEdit;
        inputDescription.value = descriptionEdit;
        inputLinkUrl.value = linkUrlEdit;
        option = 'edit';
        btnSave.textContent = 'Editar';
        myModal.show();
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (option === "new") {
        const newPost = {
            title: inputTitle.value,
            description: inputDescription.value,
            linkUrl: inputLinkUrl.value,
        };

        fetch("http://localhost:3001/api/posts", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost),
        }).then(res => {
            // console.log(res)
            if(res.ok) {
                alert("Posteo creado exitosamente");
                myModal.hide();
                location.reload();
            }
        })
        .catch((err) => {
            console.error(err);
        });
    }

    if (option === "edit") {
        const newPost = {
            title: inputTitle.value,
            description: inputDescription.value,
            linkUrl: inputLinkUrl.value,
        };

        fetch(`http://localhost:3001/api/posts/${idForm}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        }).then(res => {
            if(res.ok) {
                alert("Posteo editado exitosamente")
                myModal.hide();
                location.reload();
            }
        })
    }
});