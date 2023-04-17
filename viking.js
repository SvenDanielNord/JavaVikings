

async function getKSamSok() {

    let weapon = await fetch("https://kulturarvsdata.se/ksamsok/api?method=search&&hitsPerPage=2&query=text=yxa&recordSchema=xml&fields=thumbnail&thumbnailExists=j", {

        headers: {
            accept: "Content-Type: application/json"
        }

    })
    let resp = await weapon.json()

    console.log(resp)
    createImage(resp)





}

function createImage(image){
    let thediv = document.getElementById("axe")
    let imgur = document.createElement("img")
    imgur.setAttribute("src", image)
    thediv.appendChild(imgur)
}

getKSamSok()