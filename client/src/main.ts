async function fetchData() {
  try {
      const response = await fetch("http://localhost:5000/api/data");
      const data = await response.text();
      document.getElementById("result")!.textContent = data;
  } catch (error) {
      console.error("Error fetching data:", error);
      document.getElementById("result")!.textContent = "Failed to fetch data";
  }
}

document.getElementById("fetchDataBtn")!.addEventListener("click", fetchData);
