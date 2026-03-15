let gallery = document.getElementById("gallery");
let template = document.getElementById("card");

function capitalizeFirstCharacter(string) {
    if (string.length < 1) {
        return ""
    }

    return  string.charAt(0).toUpperCase() + string.slice(1); 
}

// Creates cards and fills their content using the works data from data.js 
for (let i = 0; i < DATA.length;  i++) {
    let card = document.importNode(template.content, true);
    
    // Set Content
    card.getElementById("title").textContent = DATA[i].title;
    card.getElementById("word count").textContent = DATA[i].wordCount + " Words";
    card.getElementById("date").textContent = DATA[i].publicationDate;
    card.getElementById("excerpt").textContent = DATA[i].excerpt;

    // Set Type Tag
    let typeTag = card.getElementById("type");
    switch(DATA[i].type) {
        case "story":
            typeTag.classList.add("blue");
            break;
        case "poem":
            typeTag.classList.add("purple");
            break;
        case "essay":
            typeTag.classList.add("green");
            break;
        default:
            console.warn("Unrecognized type: " + DATA[i].type);
        
    }
    typeTag.textContent = capitalizeFirstCharacter(DATA[i].type);

    // Done
    gallery.append(card)
}