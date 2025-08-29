async function callAPI() {
  try {
    const response = await fetch("https://followmeviews-backend.vercel.app/api/hello"); 
    const data = await response.json();
    document.getElementById("result").innerText = JSON.stringify(data);
  } catch (error) {
    document.getElementById("result").innerText = "❌ Error: " + error;
  }
}
