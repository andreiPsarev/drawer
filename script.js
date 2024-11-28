const container = document.getElementById("grid-container");

const gridRow = 16;
const grid = gridRow * gridRow;

for (let i = 0; i < grid; i ++) {
    const block = document.createElement("div");
    block.classList.add("grid-item");
    container.append(block);

    block.addEventListener("mouseenter", function() {
        block.classList.add("hovered");
    });
}

