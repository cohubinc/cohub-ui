enum MediaQuery {
  mobileMediaQuery = "(min-device-width: 320px) and (max-device-width: 480px)",
  tabletMediaQuery = "(min-device-width: 768px) and (max-device-width: 1024px)",
  mobileOrTabletMediaQuery = "(max-device-width: 1224px)",
  desktopsLaptopsMediaQuery = "(min-device-width: 1224px)",
  bigScreenMediaQuery = "(min-device-width: 1824px)",
  orientationPortrait = "orientation: portrait",
  orientationLandscape = "orientation: lanscape"
}

export default MediaQuery;
