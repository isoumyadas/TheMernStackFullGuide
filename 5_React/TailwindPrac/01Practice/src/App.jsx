function App() {
  return (
    <>
      {/* <div className="flex justify-end">
        <div className="bg-yellow-500">Yellow</div>
        <div className="bg-red-700">Red</div>
        <div className="bg-green-600">Green</div>
      </div> */}

      {/* <div className="grid grid-cols-10 mb-2">
        <div className="bg-yellow-500 col-span-4">Yellow</div>
        <div className="bg-red-700 col-span-3">Red</div>
        <div className="bg-green-600 col-span-2">Green</div>
        <div className="bg-pink-300 col-span-1">Pink</div>
      </div> */}

      {/* Here this means when it is above 640px then apply green if its 768px and above then its blue and its below 640 then apply yellow */}
      {/* <div className="bg-yellow-500 sm:bg-green-300 md:bg-blue-400 ">
        {console.log(window.innerWidth)}
        {window.innerWidth > 640
          ? window.innerWidth > 768
            ? "Blue"
            : "Green"
          : "Yellow"}
      </div> */}

      <div className="grid grid-cols-1 mb-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-yellow-500 ">Yellow</div>
        <div className="bg-red-700 ">Red</div>
        <div className="bg-green-600 ">Green</div>
      </div>
    </>
  );
}

export default App;
