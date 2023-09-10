import equilibrium from "./assets/images/image-equilibrium.jpg";
import ethIcon from "./assets/images/icon-ethereum.svg";
import clockIcon from "./assets/images/icon-clock.svg";
import avatar from "./assets/images/image-avatar.png";
import eyeIcon from "./assets/images/icon-view.svg";

const App = () => {
	return (
		<div className="min-h-screen grid place-items-center">
			<div className="card">
				<div className="relative group">
					<img
						src={equilibrium}
						className="object-contain w-72 rounded-lg"
						alt="NFT"
					/>

					<div className="absolute top-0 left-0 w-full h-full hidden justify-center items-center bg-cyan/70 group-hover:flex">
						<img src={eyeIcon} alt="view" />
					</div>
				</div>

				<a href="#" className="text-white text-xl hover:text-cyan">
					Equilibrium #3429
				</a>

				<p className="text-soft-blue text-base font-light">
					Our Equilibrium collection promotes balance and calm
				</p>

				<div className="flex flex-wrap justify-between text-base">
					<div className="flex justify-center items-center gap-2">
						<img src={ethIcon} alt="eth price" />
						<p className="text-cyan">0.051 ETH</p>
					</div>
					<div className="flex justify-center items-center gap-2">
						<img src={clockIcon} alt="clock" />
						<p className="text-soft-blue font-light">3 days left</p>
					</div>
				</div>

				<span className="w-full h-1 border-t border-dark-blue-line"></span>

				<div className="flex items-center gap-5">
					<img src={avatar} alt="avatar" className="w-10 h-10" />
					<p className="text-soft-blue text-base">
						Creation of{" "}
						<a href="#" className="text-white hover:text-cyan">
							Jules Wyvern
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default App;
