import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Start = () => {
  const [data, setData] = useState<any[]>([])
  const navigate = useNavigate()
  const handleDelete = (id:any) => {
    axios.delete('http://localhost:8081/d/' + id)
    .then(res => {console.log(res); navigate("/")})
    .catch(err => {console.log("kani ang naay error");});
  }

  useEffect(()=> {
    axios.get('http://localhost:8081/')
    // .then(res => console.log(res))
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [])
  return (
    <div className='flex h-screen w-auto bg-green-200 justify-center content-center py-[8%]'>
      <div className='w-auto h-4/5 bg-white rounded-lg p-3 justify-center content-center'>
        <h2 className='flex justify-center'>Task List</h2>
        <div className='flex justify-end p-3'>        
          <Link to="/create" className=' bg-green-300 p-1 no-underline rounded-md'>Create</Link>
        </div>
        <div>
        </div>
        <div className='overflow-auto h-4/5'>
          <table className='table-auto overflow-scroll w-full'>
          <thead>
            <tr>
              <th className=' text-center'>id</th>
              <th className=' text-center'>task</th>
              {/* <th className=' p-3 justify-center'>model</th>
              <th className=' p-3 justify-center'>price</th> */}
              <th className=' text-center'>action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((car, i) => {
              return <tr key={i}>
                <td className=' p-3 justify-center'>{car.id}</td>
                <td className=' p-6 justify-center'>{car.brand}</td>
                {/* <td className=' p-3 justify-center'>{car.model}</td>
                <td className=' p-3 justify-center'>{car.price}</td> */}
                <td className=' p-3 justify-center'>
                  {/* <button className=' bg-indigo-300 mx-1 p-1 rounded-lg'>Read</button> */}
                  <Link to={'/edit/' + car.id} className=' bg-green-200 mx-1 p-1 rounded-lg no-underline'>Edit</Link>
                  <button onClick={() => {handleDelete(car.id)}} className=' bg-red-300 mx-1 p-1 rounded-lg'>Remove</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
        </div>
        
      </div>
    </div>
  )
}

export default Start