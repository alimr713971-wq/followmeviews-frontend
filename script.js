// ⛳ BACKEND URL YAHAN DAALO:
const BACKEND_URL = "https://followmeviews-api-2uuj.vercel.app"; 
// example: https://your-api.vercel.app

const form = document.getElementById("orderForm");
const responseBox = document.getElementById("response");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  responseBox.innerHTML = "";

  const payload = {
    platform: document.getElementById("platform").value,
    service:  document.getElementById("service").value,
    username: document.getElementById("username").value.trim(),
    quantity: Number(document.getElementById("quantity").value),
    promo:    document.getElementById("promo").value.trim()
  };

  try {
    const res = await fetch(`${BACKEND_URL}/api/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (data.success) {
      responseBox.innerHTML = `
        <div class="msg ${data.free ? "ok" : "ok"}">
          ${data.free ? "🎉 <b>FREE</b> " : ""}${data.message}<br/>
          <small>
            Platform: <b>${data.platform}</b> • Service: <b>${data.service}</b><br/>
            Order ID: <b>${data.orderId}</b>${data.free ? "" : ` • Cost: $${(data.cost||0).toFixed(2)}`}
          </small>
        </div>`;
    } else {
      responseBox.innerHTML = `<div class="msg err">❌ ${data.error || "Order failed"}</div>`;
    }
  } catch (err) {
    responseBox.innerHTML = `<div class="msg err">❌ Failed to connect to API</div>`;
  }
});
