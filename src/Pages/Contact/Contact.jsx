import { Helmet } from "react-helmet";
import ContactCover from "../../Components/ContactCover/ContactCover";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact</title>
      </Helmet>
      <ContactCover></ContactCover>
    </div>
  );
};

export default Contact;
