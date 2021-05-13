let size = 10;
let orderElement = 1;

const init = () => {
  let btn = document.createElement("button");
  btn.textContent = "Dodaj 10 elementów do listy:";
  document.body.appendChild(btn);

  let list = document.createElement("ul");
  document.body.appendChild(list);

  btn.addEventListener("click", createLiElements);
};

const createLiElements = () => {
  for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    li.textContent = `Element nr ${orderElement++}`;
    document.querySelector("ul").appendChild(li);
    li.style.fontSize = `${size++}px`;
    li.style.listStyle = "none";
  }

  if (orderElement > 1 && orderElement < 12) {
    const btnReset = document.createElement("button");
    btnReset.textContent = "Resetuj listę";
    document.body.insertBefore(btnReset, document.querySelector("ul"));
    btnReset.addEventListener("click", () => {
      document.querySelector("ul").textContent = "";
      size = 10;
      orderElement = 1;
      btnReset.remove();
    });
  }
};

init();
