import { useState } from 'react';
import Map from '../components/Map';
import NavMap from '../components/NavMap';
import '../App.css';
import { Link } from 'react-router-dom';

function Main() {
  const [floorNumber, setFloorNumber] = useState(1);
  const [buildingName, setBuildingName] = useState('rtf');
  const [searchedCabinet, setSearchedCabinet] = useState('');

  return (
    <div className="app">
      <Link to="/add">add</Link>
      <NavMap
        floor={floorNumber}
        setFloorNumber={setFloorNumber}
        buildingName={buildingName}
        setBuildingName={setBuildingName}
        searchedCabinet={searchedCabinet}
        setSearchedCabinet={setSearchedCabinet}
      />
      <Map
        floorNumber={floorNumber}
        buildingName={buildingName}
        searchedCabinet={searchedCabinet}
      />
    </div>
  );
}

export default Main;
