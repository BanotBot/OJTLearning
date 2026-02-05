
document.addEventListener("DOMContentLoaded", async function() {
    const response = await fetch("https://www.w3schools.com/");
        const data = await response.text();
        console.log("Fetched Data : ", data);
});

