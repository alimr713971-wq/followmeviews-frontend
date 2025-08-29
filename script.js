// frontend/script.js
document.getElementById("orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const service = document.getElementById("service").value;
  const quantity = document.getElementById("quantity").value;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Processing...";

  try {
    const response = await fetch("https://followmeviews-api.vercel.app/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, service, quantity }),
    });

    const data = await response.json();

    if (data.success) {
      resultDiv.innerHTML = `<span style="color: green;">${data.message}</span>`;
    } else {
      resultDiv.innerHTML = `<span style="color: red;">Error: ${data.error}</span>`;
    }
  } catch (err) {
    resultDiv.innerHTML = `<span style="color: red;">Failed to connect to API</span>`;
  }
});
