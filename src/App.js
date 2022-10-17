import { useState } from "react";

function App() {
	const [formData, setFormData] = useState({
		firstName: "",
		email: "",
	});

	const handleChange = (e) => {
		const { value, name } = e.target;
		setFormData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		setFormData({
			firstName: "",
			email: "",
		});
	};

	return (
		<div className=" w-screen h-screen p-6">
			<div className="rounded-md h-full w-full bg-[url('./assets/banner-img.jpg')] bg-cover flex flex-col justify-between">
				<div className="mt-[120px] md:w-1/2 w-full  bg-gradient-to-r from-white to-transparent h-[200px] flex justify-center">
					<div className="h-full leading-none flex flex-col justify-center">
						<p className="relative italic">
							<span className="text-[65px] font-bold text-gray">
								#
							</span>
							<span className="absolute top-[14px] left-6">
								<span className="text-[50px] font-bold text-green">
									Flo
								</span>
								<span className="text-[50px] font-bold text-gray">
									Qast
								</span>
								<span className="ml-2">The</span>
							</span>
						</p>
						<p className="text-[30px] italic text-green">
							Fastest, Most Accurate
						</p>
						<p className="italic text-gray">
							Way to Close Your Books!
						</p>
					</div>
				</div>
				<div className="flex justify-center mb-[150px] h-20 relative flex-col md:flex-row md:p-0 p-5">
		<div className="bg-green flex justify-center text-center flex-col text-white md:p-5 p-2 rounded-bl-md rounded-tl-md rounded-tr-md md:rounded-tr-none">
						<p className="font-bold">SCHEDULE A DEMO</p>
						<p className="text-xs">Learn More About FloQast.</p>
					</div>

					<div className="w-[20px]  overflow-hidden inline-block bg-white relative z-10">
						<div className="h-[80px] bg-green transform origin-bottom-right absolute w-[150px] top-[-40px] right-0 skew-y-[-50deg] skew-x-[10deg] rotate-[-15deg]"></div>
					</div>

		<div className="px-5 flex justify-center flex-col bg-white md:p-0 p-2 md:rounded-tr-md rounded-br-md rounded-tr-none rounded-bl-md md:rounded-bl-none">
						<form className="text-center px-2 flex md:inline flex-col gap-2">
							<p className="text-xs">
								<span className="text-gray font-bold">
									Learn How FloQast Can
								</span>
								<span className="text-green font-bold ml-2">
									Improve Your Month-End
								</span>
							</p>
							<input
								name="firstName"
								type="text"
								placeholder="First Name*"
								className="px-2 py-1 text-[10px] border border-[#e8e8e8] rounded-md"
								value={formData.firstName}
								onChange={handleChange}
							/>
							<input
								name="email"
								type="email"
								placeholder="Email*"
								className="md:mx-2 mx-0 px-2 py-1 text-[10px] border border-[#e8e8e8] rounded-md"
								value={formData.email}
								onChange={handleChange}
							/>
							<button
								className="text-white bg-green px-2 py-1 text-[10px] rounded-md"
								onClick={handleSubmit}
							>
								SCHEDULE NOW
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
