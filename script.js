async function callAPI() {
  const username = document.getElementById("username").value;
  const service = document.getElementById("service").value;
  const quantity = document.getElementById("quantity").value;

  try {
    const response = await fetch("https://followmeviews-api.vercel.app/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        service,
        quantity
      })
    });

    const data = await response.json();
    document.getElementById("result").innerText = JSON.stringify(data);
  } catch (error) {
    document.getElementById("result").innerText = "Error: " + error.message;
  }
}
