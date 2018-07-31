import axios from 'axios';


const axiosInstanceForOrders = axios.create({
    baseURL: 'https://shiny-burger.firebaseio.com/',
});

export default axiosInstanceForOrders;