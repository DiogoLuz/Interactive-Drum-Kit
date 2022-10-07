const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = () => {
    let audio = new Audio(`static/${buttons[i].id}.wav`);
    audio.play();
  };
}
