let temperatures = [];

function addTemperature() {
  const temperatureInput = document.getElementById("temperatureInput");
  const temperature = parseFloat(temperatureInput.value);

  if (!isNaN(temperature)) {
    temperatures.push(temperature);
    temperatureInput.value = "";
    displayTemperatures();
    calculateAverage();
  } else {
    alert("Inserisci un valore valido per la temperatura");
  }
}

function displayTemperatures() {
  const temperatureList = document.getElementById("temperatureList");
  temperatureList.innerHTML = "";

  temperatures.forEach((temp, index) => {
    const li = document.createElement("li");
    li.textContent = `Temperatura ${index + 1}: ${temp}°C`;
    temperatureList.appendChild(li);
  });
}

function calculateAverage() {
  const averageTemperature = document.getElementById("averageTemperature");
  const seasonImage = document.getElementById("seasonImage");
  if (temperatures.length === 0) {
    averageTemperature.textContent = "N/A";
    seasonImage.style.display = "none";
    return;
  }

  const sum = temperatures.reduce((acc, curr) => acc + curr, 0);
  const average = (sum / temperatures.length).toFixed(2);
  averageTemperature.textContent = `${average}°C`;

  if (average < 15) {
    seasonImage.src = "img/winter.jpg"; // Sostituisci con il percorso della tua immagine invernale
    seasonImage.alt = "Immagine Invernale";
    seasonImage.style.display = "block";
  } else if (average >= 15 && average <= 28) {
    seasonImage.src = "img/primavera.jpg"; // Sostituisci con il percorso della tua immagine primaverile
    seasonImage.alt = "Immagine Primaverile";
    seasonImage.style.display = "block";
  } else {
    seasonImage.src = "img/summer.jpg"; // Sostituisci con il percorso della tua immagine estiva
    seasonImage.alt = "Immagine Estiva";
    seasonImage.style.display = "block";
  }
}

function resetAll() {
  temperatures = [];
  document.getElementById("temperatureInput").value = "";
  document.getElementById("temperatureList").innerHTML = "";
  document.getElementById("averageTemperature").textContent = "N/A";
  document.getElementById("seasonImage").style.display = "none";
}
