import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Modal } from '../components';
import { AiFillStar } from 'react-icons/ai';
import { ImTicket } from 'react-icons/im';

const Shows = () => {

  const [data, setData] = useState([])
  const [bookTicket, setBookTicket ] = useState(false)

  const params = useParams()

  const handleClick = ()=>{
    setBookTicket(!bookTicket)
  }

  useEffect(() => {
    async function fetchData() {
      await axios.get(`https://api.tvmaze.com/shows/${params.id}`)
        .then(res => {
          console.log(res.data);
          setData(res.data)
        })
    }
    fetchData()
  }, [])

  return (
    <>
    <div className='my-24 container mx-auto text-white'>
      {
        data.image &&
        <div className='sm:flex px-4'>
          <img className='sm:w-1/2 mr-5  rounded shadow-lg' src={data.image.original} alt="" />
          <div>

            <h1 className='text-5xl my-5 font-bold'>{data.name}</h1>

            {/* This login removes the html tags which is already was in summary */}
            <p className='text-white'>{data.summary.replace(/<[^>]+>/g, '')}</p>

            {
              data.rating.average ?
                <div className='flex items-center my-2'>
                  <AiFillStar className=' text-red-500 text-3xl mx-2' />
                  <span className='text-3xl'> <b>{data.rating.average}</b>/<b>10</b></span>
                </div>
                :
                ''
            }

            <p title='language' className='bg-gray-200 w-fit text-black py-1 px-4 font-bold my-3 rounded'>{data.language}</p>

            <button onClick={handleClick} className='w-fit bg-red-500 flex items-center justify-center text-xl px-12 my-6 rounded-lg py-3 font-bold hover:bg-red-600 shadow-xl'><ImTicket className='mx-2' />Book Ticket</button>
          </div>

        </div>
      }
    </div>
    
    {bookTicket && <Modal onClose={handleClick} values={data}/>}
    </>
  )
}

export default Shows