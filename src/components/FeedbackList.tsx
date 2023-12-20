import FeedbackItem from "./FeedbackItem";

const feedbackItem = {
  upvoteCount: 0,
  companyLetter: "A",
  companyName: "Apple",
  description: "I love working at Apple",
  daysAgo: "1 day ago",
};

type feedbackItemProps = {
  upvoteCount: number;
  companyLetter: string;
  companyName: string;
  description: string;
  daysAgo: string;
};
export default function FeedbackList() {
  return (
    <div>
      <FeedbackItem {...feedbackItem} />
    </div>
  );
}
