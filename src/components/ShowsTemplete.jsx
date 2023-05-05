import React, { useState } from 'react'
import { CiImageOff } from 'react-icons/ci'
import { MdStars } from 'react-icons/md'
import { TbExternalLink } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const ShowsTemplete = ({ items }) => {

	return (
		<>

			{
				items.show.image &&
				<>
					<div className='w-52 m-6 rounded shadow-xl bg-gray-400 relative'>
						<Link to={`/show/${items.show.id}`}>
							<img className='mx-auto pb-2 rounded' src={items.show.image.medium} alt='no-image' />
							<div className='flex justify-between items-center px-3'>
								<p className='text-center text-lg mb-2'>{items.show.name}</p>
								<div className='flex justify-center py-2'>
									<MdStars className=' text-gray-800 text-2xl mx-2' />
									<span className=''> {(items.score * 10).toFixed(1)}</span>
								</div>
							</div>

							<hr />

							<div className='flex justify-between items-center bg-gray-700 hover:bg-gray-900 text-white px-2 w-full py-1 rounded-b'>Read more...<TbExternalLink className='mx-1' /></div>
						</Link>
					</div>
				</>
			}
		</>
	)
}

export default ShowsTemplete