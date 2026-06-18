import Accordion from "../components/Accordion";
import CustomerReviews from "../components/CustomerReviews";
import DownloadApp from "../components/DownloadApp";

export default function About() {
  return (
    <div>
      <DownloadApp />
      <CustomerReviews />
      <Accordion />
    </div>
  );
}
