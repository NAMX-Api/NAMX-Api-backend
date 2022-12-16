
import React, { useState , useEffect} from "react";
import { useForm } from "react-hook-form";
import './newLine.css'
import axios from 'axios';

const NewLine = props => {
     const { register, handleSubmit, reset} = useForm();
     const [stations, setStation] = useState([]);
     const [num, setNum] = useState(1);
     const [detailName, setNameDetail] = useState([]);
     const [detailValue, setdetailValue] = useState([]);
     const handleClick = () =>{
          props.close(true);
     }

     //to remove last input station
     const removeStation = () =>{
          setNum(num-1);
          stations.pop();
          setStation(stations);
     }

     //to add new input station
     const addStation = () =>{
          setNum(num+1);
          setStation(oldArray => [...oldArray,num] );
          console.log(stations)
     }

     //to set values names station of inputs
     const setDetailName = (id,value) => {
          detailName[id-1] = value;
          setNameDetail(detailName);
     }

     //to set values times station of inputs
     const setDetailValue = (id,value) => {
          detailValue[id-1] = value;
          setdetailValue(detailValue);
     }

     //get form data
     const onSubmit = (data) => {
          var details = [];
          for(var i=0; i < detailName.length; i++){
               const detail = {
                    detailName: detailName[i],
                    detailValue: detailValue[i]
               }
               details.push(detail);
          }
          data["details"] = details;
          sendData(data);
     }

     const sendData = (data) => {

          const options = {
               url: 'http://localhost:3500/cars',
               method: 'POST',
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json;charset=UTF-8',
                 'Authorization': 'Bearer ' + localStorage.getItem('jwt')
               },
               data: data
             };
             axios(options)
               .then(response => {
                   console.log(response.data);
                   reset();
                   props.close(true);
               });

               
               
     }


    return (
        <div className={`newline-popup ${!props.popup ? 'closed' : 'pop'}`}>
            <div className='form-new-line card'>
               <h3>Add New Line</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                       <p>Model Name</p>
                            <input 
                            type='text'
                            name='name'
                            {...register("name")}
                            placeholder='model1'
                            required 
                            />
                    </label>
                    <label>
                       <p>Model Price</p>
                            <input 
                            type='text'
                            name='price'
                            {...register("price")}
                            placeholder='##'
                            required 
                            />
                    </label>
                    <label>
                       <p>Model description</p>
                            <input
                            type='text'
                            name='description'
                            {...register("description")}
                            placeholder='Description'
                            required
                            />
                    </label>
                    {stations.map((item, index) => (
                    <label>
                       <p>Detail {item} {(item === stations.length)? <span onClick={removeStation}>Remove</span> : ''}</p>
                       <div className='inputs-section'>
                            <input 
                            type='text'
                            name='detailname'
                            placeholder='Detail Name'
                            onChange={(e) => setDetailName(item,e.target.value)}
                            class="name"
                            required
                            />
                            <input 
                            type='text'
                            name='detailvalue'
                            placeholder='Detail Value'
                            onChange={(e) => setDetailValue(item,e.target.value)}
                            class="time"
                            required 
                            /> 
                       </div>
                       
                    </label>
                    ))}
                    <label id='label-add-station'>
                       <div onClick={addStation} className='add-station sidebar__item-inner'>
                              Add details
                       </div>
                    </label>
                    <label>
                       <div className='add-station sidebar__item-inner'>
                            Submit
                       </div>
                       <button></button>
                       <div onClick={handleClick} className='add-station sidebar__item-inner'>
                            Cancel
                       </div>
                    </label>
                </form>
            </div>
        </div>
    )
}


export default NewLine;