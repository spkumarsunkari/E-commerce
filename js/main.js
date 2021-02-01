fetch("https://spkumarsunkari.github.io/E-commerce/data/data.json").then(response=>{
    return response.json()
}).then(data=>{
    displayData(data)
})

function displayData(info){
    var bodyElement=document.querySelector("body");
    var row=document.createElement("section");
    row.classList.add("row","justify-content-center");
    bodyElement.append(row);
    info.mobiles.map(value=>{
        var column=document.createElement("article");
        column.classList.add("col-lg-3","col-md-6","col-sm-10");
        row.append(column);
        //card
        var card=document.createElement("div");
        card.classList.add("card","mt-3");

        //card-body
        var cardBody=document.createElement("div");
        cardBody.classList.add("card-body");
        //img
        var imgElement=document.createElement("img");
        imgElement.src=value.image;
        imgElement.classList.add("img-responsive")
        imgElement.alt=value.name;
        //name
        var name=document.createElement("h2")
        name.textContent=value.name;
        cardBody.append(imgElement); 
        cardBody.append(name); 
        name.classList.add("text-center", "text-primary")
        //original price
        var op=document.createElement("p");
        op.classList.add("text-danger","text-center");
        op.innerHTML="<s> ₹"+value.oprice+"/- </s>";
        cardBody.append(op);
        //price
        var price=document.createElement("h4");
        price.classList.add("text-success","text-center")
        price.textContent="₹"+value.price+"/-";
        cardBody.append(price);
        //button
        var buttonParent=document.createElement("div")
        buttonParent.classList.add("d-grid","gap-2")
        cardBody.append(buttonParent)
        var button1=document.createElement("button")
        button1.classList.add("btn","btn-secondary");
        button1.textContent="Buy Now";
        var button=document.createElement("button")
        button.classList.add("btn","btn-info");
        button.textContent="Add to cart";
        buttonParent.append(button);
        buttonParent.append(button1)
        card.append(cardBody);
        column.append(card);

    })
}
