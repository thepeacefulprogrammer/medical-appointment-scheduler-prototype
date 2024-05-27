import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientRegistration from "./components/PatientRegistration/PatientRegistration";

function App() {
	return (
		<div className="app-container">
			<Router>
				<Routes>
					<Route path="/" element={<PatientRegistration />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
