import React, { useEffect, useState } from "react";
import axios from 'axios';
import Table from '../components/table/Table'
import NewLine from '../components/popup/NewLine'
import Details from '../components/popup/Details'


const customerTableHead = [
    'id',
    'name',
    'price',
    'description',
    'operation',
    'new detail'
]

const renderHead = (item, index) => <th key={index}>{item}</th>




const Products = () => {

    const [detailsdata, newData] = useState({});
    const [detailspopup, detailsDisplay] = useState(false);
    const renderBody = (item, index) => {
        
        const handleClick = (id) => {
            const options = {
                url: 'http://localhost:3500/cars/'+ id ,
                method: 'GET',
                headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
                },
            };

            axios(options)
            .then(response => {
                detailsDisplay(true);
                newData(response.data);
            });
        }

        return(
        <tr key={index}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td><a className="operation"><i className="bx bx-trash"></i></a> <a className="operation"><i className="bx bx-edit"></i></a></td>
            <td><a className="operation" onClick={() => handleClick(item._id)}><i class='bx bx-message-square-add'></i></a></td>
        </tr>
        )
    }

    const [login, loginItem] = useState({
        user: 'test',
        pwd: 'test'
    })
    const [carsList, getCars] = useState([]);

    useEffect(() => {
        console.log(login)

        const options = {
            url: 'http://localhost:3500/auth',
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
            },
            data: login
          };
          
          axios(options)
            .then(response => {
                console.log(response.status);
                const jwtStr = response.data.accessToken;
                console.log(jwtStr);
                localStorage.setItem('jwt', jwtStr);
            });

            const optionsGet = {
                url: 'http://localhost:3500/cars/',
                method: 'Get',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
                },
              };
              
              axios(optionsGet)
                .then(response => {
                    console.log(response.data);
                    getCars(response.data);
                    console.log(carsList)
                });
    }, []);

    const [popup, display] = useState(false);
    const handleClick = () =>{
        display(true);
    }
    const close = () =>{
        display(false);
        detailsDisplay(false);
    }

    if(carsList.length === 0) return (<div>Loading...</div>)
    return (
        <div>
            <div className='top-lines'>
                <h2 className="page-header">
                Namx Models
                </h2>
                <button className='add-model' onClick={handleClick}>New Model</button>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={carsList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                            <NewLine
                                popup={popup}
                                close={close}
                            />
                            <Details
                                popup={detailspopup}
                                close={close}
                                data={detailsdata}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Products
