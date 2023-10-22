export const renderList = (list) => {
    const listPushBox = document.getElementById("listBody");
    const listDump = document.createDocumentFragment();

    list.map((item) => {
        const itemCont = document.createElement("article");

        const itemTitle = document.createElement("h3");
        itemTitle.innerText = item.title;
        itemCont.appendChild(itemTitle);
        listDump.appendChild(itemCont);

    });

    listPushBox.appendChild(listDump);

}