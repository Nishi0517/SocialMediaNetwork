import React,{Fragment,useState,useEffect} from "react"
import axios from "axios"
import AdminHeader from "./AdminHeader"


export default function RegistrationList(){


    const [data,setData]=useState([]);

    useEffect(()=>{
        getData();
    },[]);

    const getData=()=>{
        const url="https://localhost:7255/api/Registartion/RegistrationList";
        const data ={
            "id": 0,
  "name": "string",
  "email": "string",
  "password": "string",
  "phoneNo": "string",
  "isActive": 0,
  "isApproved": 0,
  "userType": "User"
        }

        axios.post(url,data)
        .then((result)=>{
            const data = result.data;
            if(data.statusCode===200){
                setData(data.listRegistration);
            }
        })
        .catch((error)=>{
            console.log(error);
        })

    }



    return(
        <>
        <AdminHeader />
        <h2 className="mt-4">List of Registered Candidate </h2>
        {data ? (
            <table
              className="table stripped table-hover mt-4"
              style={{ backgroundColor: "White", width: "80%", margin: "0 auto" }}
            >
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone No</th>
                  <th scope="col">Email</th>
                  <th scope="col">User Type</th>
                  <th scope="col">IsActive</th>
                  <th scope="col">IsApproved</th>
                
                </tr>
              </thead>
              <tbody>
                {data.map((val, index) => {
                  return (
                    <tr key={val.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{val.name}</td>
                      <td>{val.phoneNo}</td>
                      <td>{val.email}</td>
                      <td>{val.userType}</td>
                      <td>{val.isActive}</td>
                      <td>{val.isApproved}</td>
                      
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : null}
        </>
        )
    }