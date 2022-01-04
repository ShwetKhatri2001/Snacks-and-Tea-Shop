import axios from "axios";
const url = "http://localhost:5000";

export const server = axios.create({
    baseURL: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
});

export const PlaceNewOrder = (data) => server.post(`${url}/api/order/placeorder`, data);
export const AddEmployee = (data) => server.post(`${url}/api/emp/addemployee`, data);
export const AddItem = (data) => server.post(`${url}/api/menu/additem`, data);
export const EditOrder = (data) => server.post(`${url}/api/order/editorder`, data);
export const EditEmployee = (data) => server.post(`${url}/api/emp/editemployee`, data);
export const EditItem = (data) => server.post(`${url}/api/menu/edititem`, data);
export const RemoveOrders = () => server.post(`${url}/api/order/removeorders`);
export const RemoveEmployee = (data) => server.post(`${url}/api/emp/removeemployee`, data);
export const RemoveItem = (data) => server.post(`${url}/api/menu/removeitem`, data);
export const GetOrders = (data) => server.get(`${url}/api/order/getorders`);
export const GetEmployees = (data) => server.get(`${url}/api/emp/getemployees`);
export const GetItems = (data) => server.get(`${url}/api/menu/getitems`);
export const GetTodaysItems = (data) => server.get(`${url}/api/menu/gettodayssp`);


