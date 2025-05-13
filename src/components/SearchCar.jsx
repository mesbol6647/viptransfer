import React from 'react';
import "./searchcar.css";

const SearchCar = ({startDate,setStartDate,endDate, setEndDate, handleSearch}) => {
    return (
        <div className="loginDiv">
            <div className="h-[500px] w-11/12 sm:w-[475px] bg-transparent rounded-[20px] p-5 flex justify-between flex-col text-center">
            <div className="my-2">
                    <p className="font-montserrat text-white text-label mt-1">
                        Please enter the dates you wish to rent a vehicle 
                    </p>
                </div>

          
                <form className="flex flex-col text-left p-3 gap-5">
                    <div className="flex flex-col gap-2">
                        <label
                            className="font-montserrat text-label text-white hover:cursor-pointer  hover:after:text-black hover:after:pl-3 hover:after:underline"
                            htmlFor="email"
                        >
                            Start Date
                        </label>
                        <input
                            className="login-input"
                            type="date"
                            placeholder="Enter your start date"
                            name="startDate"
                            required
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            className="font-montserrat text-label text-white hover:cursor-pointer hover:after:text-black hover:after:pl-3 hover:after:underline"
                            htmlFor="pass"
                        >
                            End Date
                        </label>
                        <input
                            className="login-input"
                            type="Date"
                            name="endDate"
                            placeholder="Enter your end-date"
                            required
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-main h-[44px] w-full font-montserrat text-label text-white uppercase hover:opacity-90 rounded-[4px]"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </form>
               
            </div>
        </div>
    );
};

export default SearchCar;
