import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ShowsTemplete } from '../components'

const Home = () => {

	const [showsData, setShowsData] = useState([])

	useEffect(() => {
		async function fetchData() {
			await axios.get('https://api.tvmaze.com/search/shows?q=all')
				.then(res => {
					console.log(res.data);
					setShowsData(res.data)
				}).catch(err => console.log(err))
		}
		fetchData()
	}, [])

	return (
		<>
			<div className='flex flex-wrap container  my-20 mx-auto'>
			{
				showsData.map((items) => {
					return (
						<ShowsTemplete key={items.show.id} items={items} />
					)
				})
			}
			</div>
		</>
	)
}

export default Home