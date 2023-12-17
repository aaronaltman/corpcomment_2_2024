import FeedbackForm from "./FeedbackForm";
import Logo from "./Logo";
import Pattern from "./Pattern";

export default function Header() {
  return (
    <header>
      <Pattern />
      <Logo />
      <FeedbackForm />
    </header>
  );
}
