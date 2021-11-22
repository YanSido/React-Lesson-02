import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import OptionsDropdown from './components/OptionsDropdown'
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ToggleButton from './components/ToggleButton';
import ClearButton from './components/ClearButton';


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCountries, setShowCountries] = useState(false);
  const [showClear, setShowClear] = useState(false);
  return(
    <div >
      <h1 className = "text-center mt-3">All Countries</h1>
      <div id ="search-div">
        <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setShowCountries={setShowCountries}
        />

        <ToggleButton
        showCountries={showCountries}
        setShowCountries={setShowCountries}
        />

      {showClear && <ClearButton
      setSearchQuery={setSearchQuery}
      setShowClear={setShowClear}
      />}
      </div>

      <OptionsDropdown
      showCountries={showCountries}
      searchQuery={searchQuery}
      setShowClear={setShowClear}
      setShowCountries={setShowCountries}
      setSearchQuery={setSearchQuery}
      />

      
    </div>
  )
}

export default App;
