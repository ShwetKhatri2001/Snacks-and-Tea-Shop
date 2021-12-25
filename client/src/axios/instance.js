import axios from "axios";
const url = "http://localhost:5000" ;

export const server = axios.create({
    baseURL: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
});

export const PlaceNewOrder = (data) => server.post(`${url}/api/order/placeorder`, data);
