import React, { useEffect, useState } from 'react'
import axiosInstance, { getAuthtoken } from '../api/axios';
import { useSearchParams } from 'react-router-dom';

function Home() {

    const [data,setData] = useState();
    useEffect(() => {
        axiosInstance
          .get("",{
            headers:{
               "Authorization": `Bearer ${getAuthtoken()}`
            }
            
          }) // replace with your endpoint
          .then((response) => {
            setData(response.data);
           
          })
          .catch((error) => {
            console.log(error.message);
            
          });
      }, []);
  return (
    <div>{data==null?'data not found':data}</div>
  )
}

export default Home