export const renderList = (list) => {
    const listPushBox = document.getElementById("listBody");
    const listDump = document.createDocumentFragment();

    list.map((albums) => {
        const itemCont = document.createElement("article");

        const itemTitle = document.createElement("h3");
        itemTitle.innerText = albums.title;

        const itemImg = document.createElement("img");
        itemImg.src = albums.webLink;
        itemImg.classList.add("list-img");

        const itemData = document.createElement("div");
        albums.trackList.map((tracks) => {
            const dataLine = document.createElement("p");
            dataLine.innerText = tracks.track;
            itemData.appendChild(dataLine);
        })
        

        itemCont.appendChild(itemTitle);
        itemCont.appendChild(itemImg);
        itemCont.appendChild(itemData);

        listDump.appendChild(itemCont);

    });

    listPushBox.appendChild(listDump);

}