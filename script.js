async function callAPI() {
  try {
    const response = await fetch("https://followmeviews-api-2uuj.vercel.app/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: "testuser",
        service: "followers",
        quantity: 100
      })
    });

    const data = await response.json();
    document.getElementById("result").innerText = JSON.stringify(data);
  } catch (error) {
    document.getElementById("result").innerText = "❌ Error: " + error;
  }
}
