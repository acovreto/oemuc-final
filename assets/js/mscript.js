document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const stvari = document.getElementById("stvari2");

  async function fetchHTMLstvari() {
    try {
      const response = await fetch("./pages/pages-footer/contactpage.html");

      if (!response.ok) {
        throw new Error("ne rab");
      }

      const htmlContent = await response.text();

      stvari.innerHTML = htmlContent;
    } catch (error) {
      console.error("rabotit?", error);
    }
  }
  fetchHTMLstvari();

  btn1.addEventListener("click", async () => {
    await showContactPage();
  });
  async function showEmailForm() {
    await fetch("./pages/pages-footer/emailform.html")
      .then((response) => response.text())
      .then((data) => {
        stvari.innerHTML = data;
        stvari.classList.add("show");
      });
  }
  async function showContactPage() {
    await fetch("./pages/pages-footer/contactpage.html")
      .then((response) => response.text())
      .then((data) => {
        stvari.innerHTML = data;
        stvari.classList.add("show");
      });
  }
  btn2.addEventListener("click", async () => {
    await showEmailForm();
    const closeBtn = stvari.querySelector("#close-btn");
    console.log(closeBtn);
    closeBtn.addEventListener("click", () => {
      console.log("hello");
      stvari.innerHTML = "";
      showContactPage();
    });
  });
  btn3.addEventListener("click", () => {
    fetch("./pages/pages-footer/pages/praz.html")
      .then((response) => response.text())
      .then((data) => {
        stvari.innerHTML = data;
        stvari.classList.add("show");
      });
  });
});
