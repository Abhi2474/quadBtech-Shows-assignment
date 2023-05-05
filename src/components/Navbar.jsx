import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosHome } from 'react-icons/io'

const listStyle = 'mx-4 py-3 text-2xl text-gray-400 font-bold hover:text-gray-100'

const linkStyle = 'flex items-center justify-center'

const Navbar = () => {


	return (
		<>
			<div className='fixed top-0 w-full z-50 shadow-md'>
				<ul className='bg-gray-700 text-center transition-all'>
					<li className={listStyle}><Link to='/' className={linkStyle}>
						<IoIosHome className='mx-1' />
						Home
					</Link></li>
				</ul>
				<hr />
			</div>
		</>
	)
}

export default Navbar