import React from "react";
import ContactForm from "@/components/contactForm/ContactForm";
import pics from "../../../public/images/contact.jpg";
import Image from 'next/image'
import PageLayout from "@/components/utils/MediaQuery";

const Page = () => {
  return (
    <PageLayout>
      <div className="my-12">

        <div className="w-full md:grid md:grid-cols-2 justify-center item-center gap-12 relative">
          <div className="p-6">
            <h1 className="capitalize font-bold text-xl text-themeColor">
              Feel free to contact us with your enquiries
            </h1>
            <div className="space-y-6">
              <div className="">
                <p className="font-light">
                  Send a messge anytime, we endeavoour to answer all enquiries with 24
                  hours on business days. We will be happy to answer your questions.
                </p>
              </div>
              <div className="">
                <h1 className="capitalize font-bold text-xl text-themeColor">
                  Let's Talk
                </h1>
                <p className="font-light">
                  Fill out our contact form, and we’ll get straight back to you!
                </p>
              </div>

              <div className="">
                <h1 className="capitalize font-bold text-xl text-themeColor">
                  email
                </h1>
                <p className="font-light">
                  nextgeninterface@gmail.com
                </p>
              </div>

              <div className="">
                <h1 className="capitalize font-bold text-xl text-themeColor">
                  phone
                </h1>
                <p className="font-light">
                  07830 769306
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 p-4 mb-24">
            <h1 className="text-2xl font-bold">You are just one step away...</h1>
            <ContactForm />
          </div>
        </div>
      </div>

    </PageLayout>

  );
};

export default Page;
