import Breadcrumb from "@/components/common/Breadcrumbs";
import Contact from "@/components/contact/Contact";
import ContactUs from "@/components/contact/ContactUs";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="We would love to hear from you! If you have any questions, feedback, or simply want to connect with us,"
      />
      <ContactUs />
      <Contact />
    </>
  );
};

export default ContactPage;
