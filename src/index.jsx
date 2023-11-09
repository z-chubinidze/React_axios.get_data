import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

function App() {

    //crete useState for axios datas
    const [datas, setData] = useState([])

    //create useState for loading spinner
    const [loading, setLoading] = useState()


    // create function to get datas from axios when click on the button 
    const getData = () => {
        setLoading(true)
        // use axios.get()  method to get data from API
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(function (response) {
                
                setData(response.data)

                setLoading(false)
                document.getElementById("block").style.display = "block"
            }).catch(function (error) {
                console.log(error);
            })

    };


    return (
        <div className="container  mt-5">
            <button className="btn btn-success" onClick={getData}>ინფორმაციის მიღება API-დან</button>
            <h1 className={"text-center text-success"}>TABLE OF AXIOS DATAS</h1>
            <div className="row">
                <div className="col-12">
                    <center>
                        <span className={loading ? "spinner spinner-border text-danger" : "d-none"}></span>
                    </center>

                   <div style={{display : "none"}} id="block">
                        <table className="table table-bordered mt-5">
                            <thead >
                                <tr>
                                    <th >id</th>
                                    <th >title</th>
                                    <th >userId</th>
                                    <th >completed</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // map datas to get object contents
                                    datas.map(item =>
                                        <tr >
                                            <td className={"text-center"}>{item.id}</td>
                                            <td >{item.title}</td>
                                            <td className={"text-center"}>{item.userId}</td>
                                            <td className={(item.completed == false) ? "bg-danger text-center" : "bg-success text-center"}>{item.completed ? "ჭეშმარიტია" : "მცდარია"} </td>

                                        </tr>

                                    )

                                }
                            </tbody>
                        </table>
                   </div>
                    



                </div>
            </div>

        </div>



    )

}


var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App />) 