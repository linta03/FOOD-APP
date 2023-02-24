import React from "react";

const Main = ({handleGoOnFood}) => {
    return (
        <>
            <div className="h-[100vh] w-full flex p-10">
                <div className="m-9 pt-16 flex flex-col">
                    <h1 className="font-bold text-7xl text-purple-500">Food Ride</h1>
                    <p className=" py-3 items-center text-gray-400 w-[70%]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
                        laudantium quae ratione ab illo totam dicta suscipit dignissimos
                        impedit.
                    </p>
                    <button className="bg-purple-500 px-4 py-2 rounded-full border-purple-900 font-bold text-white w-32" onClick={handleGoOnFood}>Find Food</button>
                </div>
                <div>
                    <img className="pr-16 pt-9"
                        src="https://i.ibb.co/bW0fGyJ/7740693-removebg-preview.png"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default Main;
