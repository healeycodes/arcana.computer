window.addEventListener("load", () => {
Array.from(document.getElementsByClassName("tabular-content-item")).map(item => item.style.height = Math.max(item.children[0].clientHeight, item.children[1].clientHeight) + "px")
});