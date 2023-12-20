import { TriangleUpIcon } from "@radix-ui/react-icons";

type feedbackItemProps = {
  upvoteCount: number;
  companyLetter: string;
  companyName: string;
  description: string;
  daysAgo: string;
};

export default function FeedbackItem({
  upvoteCount,
  companyLetter,
  companyName,
  description,
  daysAgo,
}: feedbackItemProps) {
  return (
    <div>
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>{upvoteCount}</span>
        </button>
        <div>
          <p>{companyLetter}</p>
        </div>
        <div>
          <p>{companyName}</p>
          <p>{description}</p>
        </div>
        <div>
          <p>{daysAgo}</p>
        </div>
      </li>
    </div>
  );
}
