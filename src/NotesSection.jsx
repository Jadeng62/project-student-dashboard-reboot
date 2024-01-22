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

  console.log(commentSection);

  return (
    <div>
      <h2>1:1 Notes</h2>
      <form className="grid grid-rows-4" onSubmit={handleSubmit}>
        <label className="px-3" htmlFor="author">
          Author:
        </label>
        <input
          className=" border border-black px-2 py-1 mb-4 w-1/2"
          type="text"
          id="author"
          name="author"
          onChange={handleChange}
          value={userInput.author}
        />
        <label className="px-3" htmlFor="comment">
          Comment:
        </label>
        <input
          className=" border border-black px-2 py-1 mb-4 w-1/2"
          type="text"
          id="comment"
          name="comment"
          onChange={handleChange}
          value={userInput.comment}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-32"
          type="submit"
        >
          Submit
        </button>
      </form>
      {toggleSubmit &&
        commentSection.map((note, index) => (
          <div key={index}>
            {note.author} says: {note.comment}
          </div>
        ))}
    </div>
  );
};
