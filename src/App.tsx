import Footer from "./components/Footer";
import Game from "./components/Game";

function App() {
	return (
		<>
			<header className="self-center text-xl bg-gradient-to-r from-red-500 via-blue-800 to-yellow-500 bg-clip-text text-transparent">
				Classic tik tak toe for two users
			</header>
			<main>
				<Game />
			</main>
			<Footer />
		</>
	);
}

export default App;
