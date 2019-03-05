class GeoLocations {
  get() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve(position);
          return position;
        },
        error => {
          reject(error);
          return error;
        }
      );
    });
  }
}
export default new GeoLocations();
