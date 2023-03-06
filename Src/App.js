function addName() {
    const Navn = localStorage.Name;
    if (Navn !== undefined) {
      document.getElementById("message").innerHTML =
        "Welcome " + Navn + "!";
    }
  }

  function addNameToBasket() {
    const Navn = localStorage.Name;
    if (Navn !== undefined) {
      document.getElementById("message").innerHTML =
        Navn + "'s Shopping Cart";
    }
  }
