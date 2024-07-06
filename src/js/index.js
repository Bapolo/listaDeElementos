window.onload = () =>
{
    const form = document.querySelector("form")
    const ul = document.querySelector("ul")
    const button = document.querySelector("button")
    const input = document.querySelector("input")
    let contador = 0

    form.onsubmit = (event) =>
    {
        event.preventDefault()
    } 

    button.onclick = () =>
    {
        criarElemento()
    }    

    input.onkeydown = (event) =>
    {
        if (event.key == "Enter") criarElemento()  
    }    

    function criarElemento()
    {
        const value = input.value

        if (value == "") return 



        const li = document.createElement("li")
        li.innerHTML = value + " " + ++contador
        ul.appendChild(li)

        input.value = ""
    }

}
