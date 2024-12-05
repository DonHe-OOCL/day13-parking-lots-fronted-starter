import instance from "./interceptor";

export const getParkingStrategy = async () => {
   const response = await instance.get("/parking/strategy");
   return response.data;
}

export const getParkingLots = async () => {
   const response = await instance.get("/parking");
   return response.data;
}

export const parkCar = async (car, strategy) => {
   const response = await instance.post(`/parking/park/${strategy}`, car);
   return response.data;
}

export const fetchCar = async (ticket) => {
   const response = await instance.post("/parking/fetch", ticket);
   return response.data;
}

export const addParkingLot = async (parkingLot) => {
   const response = await instance.post("/parking", parkingLot);
   return response.data;
}