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
    const newComment = { ...userInput };
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
        <h2 className="text-white text-xl p-2.5">1-on-1 Notes</h2>
      </div>
      <form
        className="border-8 border-black grid grid-cols-2 p-4"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-rows-3 gap-6 pr-10">
          <div className="text-xl flex flex-col">
            <label className="px-3" htmlFor="author">
              Author:
            </label>
            <input
              className="border-2 border-black px-2 py-2"
              type="text"
              id="author"
              name="author"
              onChange={handleChange}
              value={userInput.author}
              required
            />
          </div>
          <div className="text-xl flex flex-col">
            <label className="px-3" htmlFor="comment">
              Comment:
            </label>
            <textarea
              className="border-2 border-black px-2 resize-none"
              id="comment"
              name="comment"
              onChange={handleChange}
              value={userInput.comment}
              rows="3"
              required
            />
          </div>

          <div className="pt-12">
            <button
              className="bg-black text-white px-4 py-2 w-full rounded hover:bg-blue-700"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-xl bg-black text-white p-2.5 text-center">
            Comment Section
          </h2>
          <div className="text-lg text-center overflow-y-scroll h-80 border-8 border-black">
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
