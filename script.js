async function placeOrder(username, service, quantity) {
  try {
    const response = await fetch("https://followmeviews-api-2uuj.vercel.app/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, service, quantity })
    });

    const data = await response.json();
    console.log("Order Response:", data);

    alert(data.message || "Order placed!");
  } catch (error) {
    console.error("Error placing order:", error);
    alert("Something went wrong!");
  }
}
