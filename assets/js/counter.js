const counter = document.querySelector(".body-small view-counter");
async function updateCounter() {
  let response = await fetch(
    "https://3h7jxzyhaufoowcjltuk27lrne0rkbnf.lambda-url.us-east-1.on.aws/"
  );
  let data = await response.json();
  counter.innerHTML = `Built with ❤️ Adithya | Visitors: ${data}`;
}
