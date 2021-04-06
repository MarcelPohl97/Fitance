export const getCurrentPosition = () => {
    if(navigator.geolocation) {navigator.geolocation.getCurrentPosition(function(position) {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        return coords;
      });
    }
}