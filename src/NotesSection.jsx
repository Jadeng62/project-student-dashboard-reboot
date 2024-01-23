import React, { useState } from "react";

export const NotesSection = () => {
  const [toggleSubmit, setToggleSubmit] = useState(false);

  const [userInput, setUserInput] = useState({
    author: "",
    comment: "",
  });

  const [commentSection, setCommentSection] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    // Create a new variable to store the userInput, more efficient
    const newComment = { ...userInput };
    // Spread the comment section with the new comment
    setCommentSection([...commentSection, newComment]);
    setToggleSubmit(true);
    setUserInput({
      author: "",
      comment: "",
    });
  }

  function handleChange(event) {
    setUserInput({ ...userInput, [event.target.id]: event.target.value });
  }

  return (
    <div>
      <div className="h-12 bg-black">
        <h2 className=" text-white text-xl p-2.5">1-on-1 Notes</h2>
      </div>
      <form
        className=" border-8 border-black grid grid-cols-2 p-4"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-rows-6 text-xl auto-cols-auto">
          <label className="px-3" htmlFor="author">
            Author:
          </label>
          <input
            className=" border border-black px-2 py-1 mb-4 w-4/5"
            type="text"
            id="author"
            name="author"
            onChange={handleChange}
            value={userInput.author}
            required
          />
          <label className="px-3" htmlFor="comment">
            Comment:
          </label>
          <input
            className=" border border-black px-2 py-1 mb-4 w-4/5 row-span-5 align-top"
            type="text"
            id="comment"
            name="comment"
            onChange={handleChange}
            value={userInput.comment}
            required
          />
          <button
            className="bg-black text-white px-2 py-4 w-4/5 row-span-6 mt-auto rounded hover:bg-blue-700"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div className="border-8 border-black">
          <h2 className="text-xl bg-black text-white h-12 p-2.5 text-center">
            Comment Section
          </h2>
          <div className="text-lg text-center overflow-y-scroll h-80">
            {toggleSubmit &&
              commentSection.map((note, index) => (
                <div className="border-b-2 border-black p-1.5" key={index}>
                  {note.author} says: {note.comment}
                </div>
              ))}
          </div>
        </div>
      </form>
    </div>
  );
};
