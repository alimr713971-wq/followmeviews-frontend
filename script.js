async function callAPI() {
  try {
    const username = document.getElementById("username").value;
    const service = document.getElementById("service").value;
    const quantity = document.getElementById("quantity").value;

    const response = await fetch("https://followmeviews-api-2uuj.vercel.app/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        service,
        quantity
      })
    });

    const data = await response.json();
    document.getElementById("result").innerText = JSON.stringify(data);
  } catch (error) {
    document.getElementById("result").innerText = "❌ Error: " + error;
  }
}
