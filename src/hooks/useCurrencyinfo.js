// import { useEffect, useState } from "react";

// function useCurrencyinfo(currency) {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
       
//         const response = await fetch(
//           `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
//         );
        
//         const jsonData = await response.json();
//         setData(jsonData); // Update state with fetched data
//         console.log(jsonData.inr)
      
//     };

//     fetchData() 
//   }, [currency]); 
//   console.log(data)

//   return data; 
// }

// export default useCurrencyinfo;


import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;