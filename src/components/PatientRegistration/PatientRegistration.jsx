import { useState } from "react";
import "./PatientRegistration.css";
import InputMask from "react-input-mask";

const PatientRegistration = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		cpf: "",
		birthDate: "",
		email: "",
		cellPhone: "",
		doctor: "",
	});

	const [formErrors, setFormErrors] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});

		// Validate the field on change
		validateField(name, value);
	};

	const validateField = (name, value) => {
		let errors = { ...formErrors };

		switch (name) {
			case "fullName":
				errors.fullName = value ? false : true;
				break;
			case "cpf":
				const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
				errors.cpf = cpfRegex.test(value) ? false : true;
				break;
			case "birthDate":
				errors.birthDate = value ? false : true;
				break;
			case "email":
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				errors.email = emailRegex.test(value) ? false : true;
				break;
			case "cellPhone":
				errors.cellPhone = value ? false : true;
				break;
			case "doctor":
				errors.doctor = value ? false : true;
				break;
			default:
				break;
		}

		setFormErrors(errors);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const errors = validateForm();
		setFormErrors(errors);
		setIsSubmitted(true);
		if (Object.keys(errors).length === 0) {
			// Handle form submission
			console.log("Form submitted successfully:", formData);
		} else {
			console.log("Form has errors:", errors);
		}
	};

	const validateForm = () => {
		const errors = {};
		// Simple validation rules
		if (!formData.fullName) errors.fullName = true;
		if (!formData.cpf) errors.cpf = true;
		if (!formData.birthDate) errors.birthDate = true;
		if (!formData.email) errors.email = true;
		if (!formData.cellPhone) errors.cellPhone = true;
		if (!formData.doctor) errors.doctor = true;
		return errors;
	};

	return (
		<div className="patient-registration">
			<h2>Registration Form</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="fullName">
						Full Name:
						{isSubmitted && formErrors.fullName && <span className="error"> *</span>}
					</label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						value={formData.fullName}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="cpf">
						CPF:
						{isSubmitted && formErrors.cpf && <span className="error"> *</span>}
					</label>
					<InputMask
						mask="999.999.999-99"
						id="cpf"
						name="cpf"
						value={formData.cpf}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="birthDate">
						Birth Date:
						{isSubmitted && formErrors.birthDate && <span className="error"> *</span>}
					</label>
					<input
						type="date"
						id="birthDate"
						name="birthDate"
						value={formData.birthDate}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email">
						Email:
						{isSubmitted && formErrors.email && <span className="error"> *</span>}
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="cellPhone">
						Cell Phone:
						{isSubmitted && formErrors.cellPhone && <span className="error"> *</span>}
					</label>
					<input
						type="tel"
						id="cellPhone"
						name="cellPhone"
						value={formData.cellPhone}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="doctor">
						Doctor Responsible:
						{isSubmitted && formErrors.doctor && <span className="error"> *</span>}
					</label>
					<select id="doctor" name="doctor" value={formData.doctor} onChange={handleChange}>
						<option value="">Select a doctor</option>
						<option value="drSmith">Dr. John Smith</option>
						<option value="drJones">Dr. Sarah Jones</option>
						<option value="drWilliams">Dr. Emily Williams</option>
						<option value="drBrown">Dr. Michael Brown</option>
					</select>
				</div>

				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default PatientRegistration;
