import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { MdArrowDropDown, MdSwapHoriz } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Search = () => {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [flightClass, setFlightClass] = React.useState('Economy');

  const handleFlightClassChange = (event) => {
    setFlightClass(event.target.value);
  };

  return (
    <div className='search'>
      <div className='btns newBtn'>
        <button
          className={`singleBtn ${flightClass === 'Economy' ? 'active' : ''}`}
          onClick={() => setFlightClass('Economy')}
        >
          <span>Economy</span>
        </button>
        <button
          className={`singleBtn ${flightClass === 'Business' ? 'active' : ''}`}
          onClick={() => setFlightClass('Business')}
        >
          <span>Business Class</span>
        </button>
        <button
          className={`singleBtn ${flightClass === 'First' ? 'active' : ''}`}
          onClick={() => setFlightClass('First')}
        >
          <span>First Class</span>
        </button>
      </div>
      <div className='sectionContainer'>

        <div className='searchInputs'>
          <div className='singleInput'>
            <div className='iconDiv'>
              <HiOutlineLocationMarker className='icon' />
            </div>
            <div className='texts'>
              <h4>From</h4>
              <input type='text' placeholder='Enter departure city' />
            </div>
          </div>

          <div className='exchangeIconDiv'>
            <MdSwapHoriz className='exchangeIcon' />
          </div>

          <div className='singleInput'>
            <div className='iconDiv'>
              <HiOutlineLocationMarker className='icon' />
            </div>
            <div className='texts'>
              <h4>To</h4>
              <input type='text' placeholder='Enter destination city' />
            </div>
          </div>

          <div className='singleInput'>
            <div className='iconDiv'>
              <RiAccountPinCircleLine className='icon' />
            </div>
            <div className='texts'>
              <h4>Passengers</h4>
              <div className='passenger-select'>
                <span>1 Adult, {flightClass}</span>
                <MdArrowDropDown />
              </div>
            </div>
          </div>

          <div className='singleInput'>
            <div className='iconDiv'>
              <HiOutlineLocationMarker className='icon' />
            </div>
            <div className='texts'>
              <h4>Dates</h4>
              <div className='date-picker-container'>
                <div className='date-picker-label'>
                  <span>Depart</span>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    dateFormat='dd/MM/yyyy'
                    placeholderText='dd/mm/yyyy'
                  />
                </div>
                <div className='date-picker-label'>
                  <span>Return</span>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    dateFormat='dd/MM/yyyy'
                    placeholderText='dd/mm/yyyy'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        <button className='search btn btnBlock flex'>Search Flights</button>

      </div>
    </div>
  );
};

export default Search;
