import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const BookModal = ({ onClose, values, show }) => {

	function generateRandomId() {
		const digits = '0123456789';
		let id = '';
		for (let i = 0; i < 10; i++) {
			id += digits[Math.floor(Math.random() * 10)];
		}
		return id;
	}

	const randomId = generateRandomId();

	return (
		<>
			<div className="fixed z-10 inset-0 overflow-y-auto">

				<div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">

					<div className="fixed inset-0 transition-opacity" aria-hidden="true">
						<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
					</div>

					<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

					<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-fit pb-9">

						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

							<AiFillCloseCircle onClick={onClose} className='absolute top-4 right-4 text-2xl hover:text-red-700 cursor-pointer' />

							<h3 className="text-2xl leading-6 font-medium text-gray-900 my-3 text-center">Booking Confirmation</h3>
							<hr className='border-green-300' />
							<p className="text-sm my-2"><b>BookingId: </b>{randomId}</p>
							<p className="text-sm my-2"><b>Name: </b>{values.name}</p>
							<p className="text-sm my-2"><b>Show: </b>{show}</p>
							<p className="text-sm my-2"><b>Email: </b>{values.email}</p>
							<p className="text-sm my-2"><b>Viewers: </b>{values.viewers}</p>
							<p className="text-sm my-2"><b>Date & Time: </b>{values.dateTime}</p>
						</div>

						<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center w-11/12 mx-auto" role="alert">
							<span className="block sm:inline mr-2">Your booking is confirmed. </span>
							<strong className="font-bold">Successfully !</strong>
							<span className="absolute top-0 bottom-0 right-0 px-4 py-3">
							</span>
						</div>

					</div>
				</div>
			</div>
		</>

	)
}

export default BookModal