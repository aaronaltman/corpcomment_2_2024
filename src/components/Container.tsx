import FeedbackList from "./FeedbackList";
import Header from "./Header";

export default function Container() {
  return (
    <>
      <div>Container</div>
      <Header />
      <input type="text" placeholder="Enter your comment here" />
      <FeedbackList />
    </>
  );
}
