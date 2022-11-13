export const colourNameToHex = (colour) => {
  const colours = {
    classicblack: "#000000",
    nightsky: "#436975",
    blueprintblue: "#3363EC",
    seaside: "#48A0C1",
    mintteal: "#7EBCA3",
    martinigreen: "#ACB75A",
    electricpurple: "#9097BE",
    boomingviolet: "#AC7BAE",
    vibrantsalmon: "#E86262",
    vineyardplum: "#99396F",
    blushpink: "#C5A3AB",
    autumnmustard: "#D39D2A",
  };

  if (!colour) {
    return colours.classicblack;
  }
  if (typeof colours[colour.toLowerCase().replaceAll(/\s/g, "")] != "undefined")
    return colours[colour.toLowerCase().replaceAll(/\s/g, "")];

  return false;
};
