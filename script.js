function fetchData() {
    fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72")
        .then(response => {
            if(!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.data);
            const html = data.map(local => {
                return `    
                    <div class="local">
                        <img src="${local.photo}"/>
                        <div class="container">
                            <p class="type">${local.property_type}</p>
                            <p class="title-card">${local.name}</p>
                            <p class="price">R$ ${local.price}/noite</p>
                        </div>
                    </div>     
                `
            })
            .join("");
            console.log(html);
            document.querySelector("#app").insertAdjacentHTML('afterbegin', html);
        })
        .catch(error => {
            console.log(error)
        })
}

fetchData();