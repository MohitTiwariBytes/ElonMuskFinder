const button = document.getElementById("button")
const image = document.getElementById("img")
const title = document.getElementById("title")
const desc = document.getElementById("desc")
const source = document.getElementById("source")

button.addEventListener("click", () => {
    async function getElonMusk() {
        await fetch('https://elonmu.sh/api')
            .then(response => {
                if (!response.ok) {
                    throw new Error('network gotta be dying right now');
                }
                return response.json();
            })
            .then(data => {
                image.src = data.urlImage
                title.innerHTML = data.title
                title.href = data.url
                desc.innerHTML = data.description
                source.innerHTML = "by " + data.source
            })
            .catch(error => {
                console.error('your code broke mohit', error);
            });

        }
        
        getElonMusk()
    })