import teaimg from "../../assets/tea.png";
import pavbhajiimg from "../../assets/pavbhaji.png";
import bhelimg from "../../assets/bhel.png";
import pohaimg from "../../assets/poha.png";
import samosaimg from "../../assets/samosa.png";
import parathaimg from "../../assets/paratha.png";
import coffeeimg from "../../assets/coffee.png";


const AllItems = [
    {
        id: 0,
        itemimg: teaimg,
        name: "Tea",
        price: 10,
        quantity: 1,
        todays_sp: true
    },
    {
       id: 1,
       itemimg: samosaimg,
       name: "Samosa",
       price: 20,
       quantity: 2,
       todays_sp: true
    },
    {
        id: 2,
        itemimg: pohaimg,
        name: "Poha",
        price: 20,
        quantity: 1,
        todays_sp: true
    },
    {
       id: 3,
       itemimg: parathaimg,
       name: "Aaloo Paratha",
       price: 40,
       quantity: 1,
       todays_sp: false
    },
    {
       id: 4,
       itemimg: coffeeimg,
       name: "Coffee",
       price: 20,
       quantity: 1,
       todays_sp: true
    },
    {
       id: 5,
       itemimg: parathaimg,
       name: "Paneer Paratha",
       price: 80,
       quantity: 1,
       todays_sp: true
    },
    {  id: 6,
       itemimg: bhelimg,
       name: "Bhel",
       price: 20,
       quantity: 1,
       todays_sp: false
    },
    {
        id: 7,
        itemimg: pavbhajiimg,
        name: "Pavbhaji",
        price: 60,
        quantity: 1,
        todays_sp: true
    }
]

export default AllItems;
