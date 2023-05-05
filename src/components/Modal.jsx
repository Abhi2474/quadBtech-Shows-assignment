import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AiFillCloseCircle } from 'react-icons/ai'
import BookModal from './BookModal';


const fieldStyle = 'focus:outline-none rounded-sm sm:py-2 py-1 px-2 sm:px-4 py-1 px-2 my-1 sm:mx-auto'
const errStyle = ' border-4 border-red-700 rounded-lg'
const errStyle2 = 'border-b border-gray-400 border'
const btn = 'rounded px-3 py-1 mx-auto text-white text-lg font-bold transition-all bg-green-500 hover:bg-green-700 sm:w-64'


const validationSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	dateTime: Yup.string().required('Date and Time is required'),
	email: Yup.string().email('Invalid email address').required('Email is required'),
	viewers: Yup.number().required('No. of viewers is required')
});

const initialValues = {
	name: '',
	email: '',
	viewers: '',
	dateTime: '',
};

const Modal = ({ onClose, values }) => {

	const [formValues, setFormValues] = useState(null)
	const [formSubmit, setFormSubmitted] = useState(false)

	const handleSubmit = (values) => {
		console.log(values);
		setFormValues(values)
		setFormSubmitted(true);
	};

	return (
		<>
			<div className="fixed z-10 inset-0 overflow-y-auto">

				<div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">

					<div className="fixed inset-0 transition-opacity" aria-hidden="true">
						<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
					</div>

					<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

					<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-fit px-6">

						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-8 ">

							<h3 className="text-2xl leading-6 font-medium text-gray-900 my-3 text-center"><b>Show: </b>{values.name}</h3>

							<AiFillCloseCircle onClick={onClose} className='absolute top-4 right-4 text-2xl hover:text-red-700 cursor-pointer' />

							<hr className='mb-4' />

							<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>

								{({ errors, touched }) => (

									<Form className='w-10/12 mx-auto flex flex-col'>

										<Field className={`${fieldStyle}  ${touched.name && errors.name ? `${errStyle}` : `${errStyle2}`} `} type="text" id="name" name="name" placeholder='Name' />
										<ErrorMessage name="name" />

										<Field className={`${fieldStyle}  ${touched.email && errors.email ? `${errStyle}` : `${errStyle2}`} `} type="email" id="email" name="email" placeholder='Email' />
										<ErrorMessage name="email" />

										<Field className={`${fieldStyle}  ${touched.dateTime && errors.dateTime ? `${errStyle}` : `${errStyle2}`} `} type="text" id="dateTime" name="dateTime" placeholder='dd/mm/yy, hh:mm' />
										<ErrorMessage name="dateTime" />

										<Field className={`${fieldStyle}  ${touched.viewers && errors.viewers ? `${errStyle}` : `${errStyle2}`} `} type="number" id="viewers" name="viewers" placeholder='No. of viewers' />
										<ErrorMessage name="viewers" />

										<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">

											<button onClick={handleSubmit} type="submit" className={btn}>
												Book Ticket
											</button>

										</div>

									</Form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</div>

			{formSubmit && <BookModal onClose={onClose} values={formValues} show={values.name} />}

		</>

	)
}

export default Modal