import React from "react";
import sukuti from "../images/sukuti.jpg";
import bbq from '../images/bbq.png'
import khaja from '../images/khajaset.jpg'
import ghongi from '../images/ghongi.jpg'


function Menubar() {
  return (
    <div id="menu" className="text-center bg-slate-800 text-white">
      <div className="">
        <h1 className="inline-block bg-yellow-500 p-3 mt-12 font-bold">OUR MENU</h1>
        <h1 className="font-flame text-xl mt-4">Order & Taste Delicious Food</h1>
      </div>

      <div className="p-6 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg scale-90 hover:scale-95 duration-1000">
            <img
              src={sukuti}
              alt="Dish"
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Buff Sukuti
              </h2>
              <p className="text-gray-600 mb-4">
                Juicy Buff sukuti served with veggies and salad.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg scale-90 hover:scale-95 duration-1000">
            <img
              src={bbq}
              alt="Dish"
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Chicken & Buff BBQ
              </h2>
              <p className="text-gray-600 mb-4">
                Fresh BBQ with veggies & juccie sucage
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg scale-90 hover:scale-95 duration-1000">
            <img
              src={khaja}
              alt="Dish"
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Khaja Set
              </h2>
              <p className="text-gray-600 mb-4">
                Khaja set with Chicken, Buff, Fish, Duck Meat & other dishes
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-lg scale-90 hover:scale-95 duration-1000">
            <img
              src={ghongi}
              alt="Dish"
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Ghongi Curry
              </h2>
              <p className="text-gray-600 mb-4">
                Tharu Traditional Food Ghongi
              </p>
            </div>
          </div>
{/* card5 */}
          <div className="bg-white rounded-2xl shadow-lg scale-90 hover:scale-95 duration-1000">
            <img
              src={sukuti}
              alt="Dish"
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Buff Sukuti
              </h2>
              <p className="text-gray-600 mb-4">
                Juicy Buff sukuti served with veggies and salad.
              </p>
            </div>
          </div>

          {/* card6 */}
          <div className="bg-white rounded-2xl shadow-lg scale-90 hover:scale-95 duration-1000">
            <img
              src={sukuti}
              alt="Dish"
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Buff Sukuti
              </h2>
              <p className="text-gray-600 mb-4">
                Juicy Buff sukuti served with veggies and salad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menubar;
