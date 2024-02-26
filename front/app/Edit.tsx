import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const {id} = useParams()

    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:8081/read/'+id)
        // .then(res => console.log(res))
        .then(res => {
            setValues({...values, brand: res.data[0].brand, model: res.data[0].model, price: res.data[0].price})
        })
        .catch(err => console.log(err));
      }, [])

    const [values, setValues] = useState({
        brand: '',
        model: '',
        price: ''
    })

    const handleUpdate = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        axios.put('http://localhost:8081/edit/'+id, values)
        .then(res => {
            
        })
        .catch(err => console.log("naa pud ni error!"));
        navigate('/');
    }
  return (
    <div className='flex h-screen w-auto bg-green-200 justify-center'>
    <div className='w-auto h-80 bg-white rounded-lg p-3 content-center'>
        <form onSubmit={handleUpdate}>
            <h2 className='mb-2'>Edit Entry</h2>
            <div className='mb-2'>
                <label className='block'>Task</label>
                <input type="text" placeholder='brand' className='mx-2' value={values.brand}
                onChange={e => setValues({...values, brand: e.target.value})}/>
            </div>
            {/* <div className='mb-2'>
                <label className='block'>model</label>
                <input type="text" placeholder='model' className='mx-2' value={values.model}
                onChange={e => setValues({...values, model: e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label className='block'>price</label>
                <input type="text" placeholder='price' className='mx-2' value={values.price}
                onChange={e => setValues({...values, price: e.target.value})}/>
            </div> */}
            
            <button className=' bg-green-200 mx-1 p-1 rounded-lg'>Update</button>
           
        </form>
    </div>
</div>
  )
}

export default Edit