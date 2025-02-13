let tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
let tabPanels = document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(node => {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "white";
  tabPanels.forEach(node => node.style.display = "none");
  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = colorCode;
}

showPanel(0, '#f44336');