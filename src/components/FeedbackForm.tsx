import { useState } from "react";
import { MAX_CHARS } from "../lib/constants";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const charCount = text.length;
  const charLeft = MAX_CHARS - charCount;

  return (
    <form className="form">
      <textarea
        onChange={(event) => {
          const newText = event.target.value;
          if (newText.length > MAX_CHARS) {
            return;
          }
          setText(newText);
        }}
        value={text}
        id="feedback-textarea"
        placeholder="abc"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter Your Corporate Feedback Here. Remember to # the company name.
      </label>
      <div>
        <p className="u-italic">{charLeft}</p>
        <button
          onSubmit={(event) => {
            event.preventDefault();
            console.log("submit");
          }}
        >
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
