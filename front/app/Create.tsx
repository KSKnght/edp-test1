import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const nav = useNavigate();
    const [values, setValues] = useState({
        brand: '',
        model: '',
        price: ''
    })
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        axios.post('http://localhost:8081/car', values)
        .then(res => {
            console.log(res);
            nav('/');
        })
        .catch(err => console.log(err));
    }
  return (
    <div className='flex h-screen w-auto bg-green-200 justify-center'>
        <div className='w-auto h-80 bg-white rounded-lg p-3 content-center'>
            <form onSubmit={handleSubmit}>
                <h2 className='mb-2'>Add Task</h2>
                <div className='mb-2'>
                    <label className='block'>Task:</label>
                    <input type="text" placeholder='Add Task' className='mx-2'
                    onChange={e => setValues({...values, brand: e.target.value})}/>
                </div>
                {/* <div className='mb-2'>
                    <label className='block'>model</label>
                    <input type="text" placeholder='model' className='mx-2'
                    onChange={e => setValues({...values, model: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label className='block'>price</label>
                    <input type="text" placeholder='price' className='mx-2'
                    onChange={e => setValues({...values, price: e.target.value})}/>
                </div> */}
                
                <button className=' bg-green-200 mx-1 p-1 rounded-lg'>Submit</button>
               
            </form>
        </div>
    </div>
  )
}

export default Create