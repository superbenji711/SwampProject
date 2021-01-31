import './App.css';
import FoodFilters from './FoodFilters'
import Header from './Header'
import Results from './Results'

function App() {
  return (
    <div>
      <Header title="The Ultimate Cookbook" />
      <FoodFilters />
      <div className="recipes">
        <Results />
        <Results />
        <Results />
        <Results />
        <Results />

      </div>
    </div>
  );
}

export default App;
