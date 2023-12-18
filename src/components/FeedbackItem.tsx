import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackItem() {
  return (
    <div>
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>48</span>
        </button>
        <div>
          <p>C</p>
        </div>
        <div>
          <p>Company Name Goes Here</p>
          <p>description goes here</p>
        </div>
        <div>
          <p>4d</p>
        </div>
      </li>
    </div>
  );
}
