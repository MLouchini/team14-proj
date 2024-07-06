function calculateSavingsPerHome(numTurbines, numHouseholds) {
    const homesPerTurbine = 1500;
    const avgSavingsPerHome = 75; // in pounds
  
    const totalHomesPowered = numTurbines * homesPerTurbine;
    const totalPotentialSavings = totalHomesPowered * avgSavingsPerHome;
  
    // Distribute savings, capped at avgSavingsPerHome
    let savingsPerHousehold = Math.min(totalPotentialSavings / numHouseholds, avgSavingsPerHome);
  
    return Math.round(savingsPerHousehold * 100) / 100;
  }
  
  function calculateEnvironmentScore(numTurbines, wildlifeImpact, landUseEfficiency){
    //wildlifeimpact is from 1 to 10, and so is landuseefficiency.
    //1 is poor, 10 is excellent
  
    const turbineEffect = numTurbines*5
    const wildlifeEffect = -wildlifeImpact*3
    const landUseEffect = landUseEfficiency*2
  
    //normalises to 0-100 so represented as percentage
    let score = turbineEffect+wildlifeEffect+landUseEffect;
  
    score = Math.max(0, Math.min(100, score))
  
    return Math.round(score)
  }
  
  // Example usage:
  const numTurbines = 10;
  const wildlifeImpact = 4;
  const landUseEfficiency = 7;
  const numHouseholds = 10000;
  
  
  const annualSavings = calculateSavingsPerHome(numTurbines, numHouseholds);
  const envScore = calculateEnvironmentScore(numTurbines, wildlifeImpact, landUseEfficiency)