import React,{Fragment,useState,useEffect} from "react"
import axios from "axios"
import AdminHeader from "./AdminHeader"


export default function ArticleList(){


    const [data,setData]=useState([]);
    const [role,setRole]=useState([]);


    useEffect(()=>{
        getData();
        setRole(localStorage.getItem("username"));
    },[]);

    const getData=()=>{
        const url="https://localhost:7255/api/Article/ArticleList";
        const data ={
           
  "title": "",
  "content": "",
  "email": "admin@gmail.com",
  "image": "",
  "isActive": 1,
  "isApproved": 0,
  "type": "admin"
        }
    
      

        axios.post(url,data)
        .then((result)=>{
            const data = result.data;
            if(data.statusCode===200){
                setData(data.listArticles);
            }
        })
        .catch((error)=>{
            console.log(error);
        })

    }

    const handleApproved=(e,id)=>{
        e.preventDefault();
        const data={
            Id:id,
           
  "title": "string",
  "content": "string",
  "email": "string",
  "image": "string",
  "isActive": 0,
  "isApproved": 0,
  "type": "string"
        }
        const url= "https://localhost:7255/api/Article/ArticleApproval";
        axios.post(url,data)
        .then((result)=>{
            const dt= result.data;
            if(dt.statusCode===200){
                alert('approved')
                setData(dt.listArticles);
                //getData();
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <Fragment>
          <AdminHeader />
          <h2 className="mt-4">List of articles</h2>
          {data ? (
            <table
              className="table stripped table-hover mt-4"
              style={{ backgroundColor: "White", width: "80%", margin: "0 auto" }}
            >
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Content</th>
                  <th scope="col">Email</th>
                  <th scope="col">Image</th>
                  <th scope="col">IsApproved</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val, index) => {
                  return (
                    <tr key={val.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{val.title}</td>
                      <td>{val.content}</td>
                      <td>{val.email}</td>
                      <td>
                    {val.image && <img src={val.image} alt="Article" style={{ width: "100px", height: "auto" }} />}
                  </td>
                      {/* <td>{val.isapproved}</td> */}
                      <td>
                        {val.isApproved? ("Already Approved") : (
                          <button
                            className="btn btn-primary"
                            onClick={(e) => handleApproved(e, val.id)}
                          >
                            Mark Approved
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : null}
        </Fragment>
      );
      
    }