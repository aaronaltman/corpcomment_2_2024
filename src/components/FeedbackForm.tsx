import { useState } from "react";

export default function FeedbackForm() {
  const [text, setText] = useState("");

  return (
    <form className="form">
      <textarea id="feedback-textarea" placeholder="abc" />
      <label htmlFor="feedback-textarea">
        Enter Your Corporate Feedback Here. Remember to # the company name.
      </label>
      <div>
        <p className="u-italic">150</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
