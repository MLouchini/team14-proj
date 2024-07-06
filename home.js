document.addEventListener("DOMContentLoaded", function() {
    var townSelect = document.getElementById("coastal-towns");
    townSelect.addEventListener("change", function() {
      var selectedTown = townSelect.value;
      if (selectedTown) {
        // Construct the URL of the new page
        var newPageUrl = "Community.html?town=" + encodeURIComponent(selectedTown);
        // Navigate to the new page
        window.location.href = newPageUrl;
      }
    });
  });
  