import "./PatientRegistration.css";
import InputMask from "react-input-mask";

const PatientRegistration = () => {
	return (
		<div className="patient-registration">
			<h2>Registration Form</h2>
			<form>
				<div className="form-group">
					<label htmlFor="fullName">Full Name:</label>
					<input type="text" id="fullName" name="fullName" />
				</div>

				<div className="form-group">
					<label htmlFor="cpf">CPF:</label>
					<InputMask mask="999.999.999-99" id="cpf" name="cpf" />
				</div>

				<div className="form-group">
					<label htmlFor="birthDate">Birth Date:</label>
					<input type="date" id="birthDate" name="birthDate" />
				</div>

				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" />
				</div>

				<div className="form-group">
					<label htmlFor="cellPhone">Cell Phone:</label>
					<input type="tel" id="cellPhone" name="cellPhone" />
				</div>

				<div className="form-group">
					<label htmlFor="doctor">Doctor Responsible:</label>
					<select id="doctor" name="doctor">
						<option value="drSmith">Dr. John Smith</option>
						<option value="drJones">Dr. Sarah Jones</option>
						<option value="drWilliams">Dr. Emily Williams</option>
						<option value="drBrown">Dr. Michael Brown</option>
					</select>{" "}
				</div>

				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default PatientRegistration;
