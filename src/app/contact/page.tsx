import { Navbar2 } from "@/components/shared/Navbar2";
import { Footer3 } from "@/components/shared/Footer3";
import { Header62 } from "@/components/contact/Header62";
import { Contact13 } from "@/components/contact/Contact13";
import { Contact6 } from "@/components/contact/Contact6";
import { Cta52 } from "@/components/contact/Cta52";
import { Faq5 } from "@/components/contact/Faq5";
import { Cta52_1 } from "@/components/contact/Cta52_1";

export default function ContactPage() {
  return (
    <div className="pt-18">
      <Navbar2 />
      <Header62 />
      <Contact13 />
      <Contact6 />
      <Cta52 />
      <Faq5 />
      <Cta52_1 />
      <Footer3 />
    </div>
  );
}
