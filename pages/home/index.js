/* Desenvolva a lógica da página aqui */
function createOpenPostModal(){
    
    const modalPage        = document.createElement("main")
    const modalContainer   = document.createElement("section")
    const modalProfile     = document.createElement("div")
    const imgProfileModal  = document.createElement("img")
    const divInfoProfile   = document.createElement("div")
    const profileName      = document.createElement("h2")
    const profileFunction  = document.createElement("p")
    const closeModal       = document.createElement("button")
    const postTitleModal   = document.createElement("h1")
    const postModal        = document.createElement("p")
    const mobileScreen     = document.querySelector (".screen")
    
    modalPage.classList.add("modal-page")
    modalContainer.classList.add("modal-container")
    modalProfile.classList.add("profile-modal")
    closeModal.classList.add("close-modal")
    postTitleModal.classList.add("post-title-modal")
    postModal.classList.add("post-modal")

    imgProfileModal.src = "/assets/img/user1.svg"
    profileName.innerText = "Samuel Leão"
    profileFunction.innerText = "Front end Engineer"
    closeModal.innerText = "X" 
    postTitleModal.innerText = "Como criar um interface simples e agradável utilizando boas práticas de design"
    postModal.innerText = `Hoje vamos conversar sobre como criar uma interface agradável mesmo sem ter um design pronto feito por um profissional de UI design.
    
    Antes de iniciar a criação de qualquer projeto, busque referências de aplicações que tenham a ver com o nicho que você está desenvolvendo. Por exemplo, quando quero criar um e-commerce de roupas, vou reservar um momento para buscar por aplicações do gênero, tanto acessando ou baixando apps e vendo o que se repete de informações em cada um dos aplicativos e sites referentes a compra de roupas, e também, observar cores que normalmente você enxerga em cada um dos apps `

    divInfoProfile.append(profileName,profileFunction)
    modalProfile.append(imgProfileModal, divInfoProfile)
    modalContainer.append(modalProfile, postTitleModal, postModal, closeModal)
    modalPage.append(modalContainer) 
    mobileScreen.append(modalPage)

    return modalPage
}





function abrirPost(){
    const abrirPostButton = document.querySelector("#post-1")
    const main = document.querySelector(".screen")

    abrirPostButton.addEventListener("click", function(event){
        event.preventDefault()
        const creatingModal = createOpenPostModal()

        main.appendChild(creatingModal)

        closePost()

    })
}

abrirPost()

function closePost(){
    const closePostButton = document.querySelector(".close-modal") 
    const modalPage = document.querySelector(".modal-page")

    closePostButton.addEventListener("click", function(){
        modalPage.remove()

    })
}