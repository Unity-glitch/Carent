import AboutContent from "../components/AboutContent";
import Accordion from "../components/Accordion";
import CustomerReviews from "../components/CustomerReviews";
import DownloadApp from "../components/DownloadApp";

export default function About() {
  return (
    <div>
      <AboutContent />
      <DownloadApp />
      <CustomerReviews />
      <Accordion />
    </div>
  );
}
