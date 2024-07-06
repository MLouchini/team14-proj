// Function to calculate the money saved per household
function calculateSavingsPerHome(numTurbines, numHouseholds) {
    const homesPerTurbine = 1500;
    const avgSavingsPerHome = 75; // in pounds

    const totalHomesPowered = numTurbines * homesPerTurbine;
    const totalPotentialSavings = totalHomesPowered * avgSavingsPerHome;

    // Distribute savings, capped at avgSavingsPerHome
    let savingsPerHousehold = Math.min(totalPotentialSavings / numHouseholds, avgSavingsPerHome);

    return Math.round(savingsPerHousehold * 100) / 100;
}

// Function to calculate the environmental impact score
function calculateEnvironmentScore(numTurbines, wildlifeImpact, landUseEfficiency) {
    // Wildlife impact is from 1 to 10, and so is land use efficiency.
    // 1 is poor, 10 is excellent

    const turbineEffect = numTurbines * 5;
    const wildlifeEffect = -wildlifeImpact * 3;
    const landUseEffect = landUseEfficiency * 2;

    // Normalize to 0-100 so represented as a percentage
    let score = turbineEffect + wildlifeEffect + landUseEffect;

    score = Math.max(0, Math.min(100, score));

    return Math.round(score);
}

// Function to initialize the Google Map
function initMap() {
    const location = { lat: 51.414, lng: 0.833 }; // Example coordinates, replace with your variable
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });

    new google.maps.Marker({
        position: location,
        map: map
    });
}

// Fetch data and update the DOM after the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Example values, replace with dynamic values from your backend if needed
    const numTurbines = 10;
    const wildlifeImpact = 4;
    const landUseEfficiency = 7;
    const numHouseholds = 10000;

    const annualSavings = calculateSavingsPerHome(numTurbines, numHouseholds);
    const envScore = calculateEnvironmentScore(numTurbines, wildlifeImpact, landUseEfficiency);

    // Update the DOM elements with calculated values
    document.getElementById('impact-score').textContent = `${envScore}%`;
    document.getElementById('money-saved').textContent = `£${annualSavings}`;
});
