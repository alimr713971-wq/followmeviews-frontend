const data = await response.json();

if (data.success) {
    if (data.message) {
        // agar backend ne message bheja ho (promo code case)
        resultDiv.innerHTML = `<span style="color: green;">${data.message}</span>`;
    } else {
        // agar normal order response ho
        resultDiv.innerHTML = `
          <span style="color: green;">
            ✅ Order placed! <br>
            Order ID: ${data.orderId} <br>
            Service: ${data.service} <br>
            Username: ${data.username} <br>
            Quantity: ${data.quantity}
          </span>
        `;
    }
} else {
    resultDiv.innerHTML = `<span style="color: red;">Error: ${data.error || "Something went wrong"}</span>`;
}
