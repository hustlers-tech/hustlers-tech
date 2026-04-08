import { Metadata } from "next";
import ContactClient from "../Wrapper/ContactClient";

export const metadata: Metadata = {
  title: "Contact us | Hustlers Tech",
  description: "Get in touch with Hustlers Tech for quick support and business inquiries. We’re here to help you grow with simple, effective digital solutions.",
};

const ContactPage = () => {
  return (
    <ContactClient/>
  )
}

export default ContactPage
