import React, {useState, useEffect, useRef}from "react";


function App() {
  const [quotes, setQuotes] = useState("");
  const textRef = useRef();
  let colors = ["#ffff00", "#90ee90", "#ffa500", "#ff68ff", "a9a9e7"];
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    textRef.current.style.color =
      colors[Math.floor(Math.random() * colors.length)];
  });

  return (
    <div className="min-h-screen flex bg-indigo-700">
      <div className="m-auto w-full max-w-md min-h-min px-8 py-8 bg-gray-700 shadow-slate-900 flex flex-col justify-between items-start">
        <p ref={textRef} className="text-white text-2xl break-normal">{quotes.text} </p>
        <p className="my-2.5 text-white text-2xl ">Author: {quotes.author}</p>
        <div>
          <button onClick={getQuote} className="mr-3 bg-sky-600 text-white w-20 py-2 text-sm rounded-md cursor-pointer hover:bg-sky-800  ">
            Get quotes
          </button>
          <a
            href={`https://twitter.com/intent/tweet?text=${quotes.text}  %0a %0a Shared from: %0a https://random-quo.netlify.app`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center bg-sky-600 text-white w-20 py-2 text-sm rounded-md cursor-pointer hover:bg-sky-800 "
          >
            Tweet
          </a>
        </div>
        <h2 className="text-white py-8 text-xl ">Made with ❤ by <a href="https://twitter.com/BoluTejumola" className="text-sky-400 hover:text-sky-800">Bolu</a></h2>
      </div>
    </div>
  );
}

export default App;
