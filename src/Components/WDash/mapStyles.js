export const mapStyles = [
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [{ hue: "#ff0000" }, { saturation: -100 }, { lightness: 99 }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#808080" }, { lightness: 54 }],
  },

  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#767676" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#ffffff" }],
  },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "poi.park", stylers: [{ visibility: "on" }] },
  {
    featureType: "poi.sports_complex",
    stylers: [{ visibility: "on" }],
  },
  { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
  {
    featureType: "poi.business",
    stylers: [{ visibility: "simplified" }],
  },
];
