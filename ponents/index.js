import { albumData } from "../assets/data.js";
import { renderList } from "./displayLists.js";

(function(){
    console.log(albumData[3].artist);
    renderList(albumData);

})();
