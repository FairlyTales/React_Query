import "./App.css";
import {QueryClientProvider, QueryClient} from "react-query";
import {Characters} from "./Characters";

const queryClient = new QueryClient();

const App = () => {
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<div className="container">
					<h1>Rick and Morty characters</h1>
					<Characters/>
				</div>
			</QueryClientProvider>
		</div>
	);
}

export default App;
