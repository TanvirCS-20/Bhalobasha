const numberOfFul = 40;
const bhalobasharFuls = document.querySelectorAll("#bhalobashar_ful");
const ful = ["🌸", "🌹", "🌷", "💐", "🪻", "🌺", "🌻"];
bhalobasharFuls.forEach((bhalobasharFul) => {
  for (let i = 0; i < numberOfFul; i++) {
    bhalobasharFul.innerHTML += ful[Math.floor(Math.random() * ful.length)];
  }
});
