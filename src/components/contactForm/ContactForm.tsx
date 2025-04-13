"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../app/globals.css";

type FormType = {
  name: string;
  email: string;
  business_name: string
  industry: string
  location: string
  service: string
  additional: string
};

const initialValue = {
  name: "",
  email: "",
  business_name: '',
  industry: '',
  location: '',
  service: '',
  additional: '',
};
const ContactForm = () => {
  const [formValue, setFormValue] = useState<FormType>(initialValue);
  const [loading, setLoading] = useState(false);
  const [validattion, setValidation] = useState(false);

  () => toast("Wow so easy!");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // if (formValue.name && formValue.email && formValue.business_name && formValue.industry && formValue.location && formValue.service && formValue.additional) {
    //   setValidation(true)
    // }

    const formData = new FormData();
    formData.append("name", formValue.name);
    formData.append("email", formValue.email);
    formData.append("business_name", formValue.business_name);
    formData.append("industry", formValue.industry);
    formData.append("location", formValue.location);
    formData.append("service", formValue.service);
    formData.append("additional", formValue.additional);



    formData.append("access_key", process.env.FORM_ACCESS_KEY || "");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setLoading(false);
      toast.success("your form has been sent, will get back yo your shorlty");
      setFormValue(initialValue);
    } else {
      toast.error(`Failed to send form, ${data.message}`);
      setFormValue(initialValue);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <div className="w-full flex flex-col md:flex-row items-center gap-2">
        <input
          type="name"
          placeholder="Your Name"
          required
          className="w-full h-10 p-2 font-medium border border-neutral-200 placeholder:text-neutral-500 placeholder:font-light placeholder:text-sm bg-neutral-50 rounded-md focus:bg-neutral-100 "
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormValue({ ...formValue, name: e.target.value })
          }

        />
        <input
          type="email"
          placeholder="Your email"
          required
          className="w-full h-10 p-2 font-medium border border-neutral-200 placeholder:text-neutral-500 placeholder:font-light placeholder:text-sm bg-neutral-50 rounded-md focus:bg-neutral-100 "
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormValue({ ...formValue, email: e.target.value })
          }
        />
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-2">
        <input
          type="name"
          placeholder="Business name"
          required
          className="w-full h-10 p-2 font-medium border border-neutral-200 placeholder:text-neutral-500 placeholder:font-light placeholder:text-sm bg-neutral-50 rounded-md focus:bg-neutral-100"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormValue({ ...formValue, business_name: e.target.value })
          }
        /> <input
          type="name"
          placeholder="i.e health,technology etc."
          required
          className="w-full h-10 p-2 font-medium border border-neutral-200 placeholder:text-neutral-500 placeholder:font-light placeholder:text-sm bg-neutral-50 rounded-md focus:bg-neutral-100"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormValue({ ...formValue, industry: e.target.value })
          }
        />
      </div>
      <input
        type="name"
        placeholder="Cities i.e London,Paris, etc"
        required
        className="w-full h-10 p-2 font-medium border border-neutral-200 placeholder:text-neutral-500 placeholder:font-light placeholder:text-sm bg-neutral-50 rounded-md focus:bg-neutral-100"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormValue({ ...formValue, location: e.target.value })
        }
      />
      <textarea
        name="message"
        id=""
        placeholder="Describe what you need to be done"
        required
        rows={4}
        className="w-full p-2 font-medium border border-neutral-200 placeholder:text-neutral-500 placeholder:font-light placeholder:text-sm bg-neutral-50 rounded-md focus:bg-neutral-100 resize-none"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setFormValue({ ...formValue, service: e.target.value })
        }
      />
      <textarea
        name="message"
        id=""
        placeholder="What else would you like us to know?"
        required
        rows={4}
        className="w-full p-2 font-medium border border-neutral-200 placeholder:text-neutral-500 placeholder:font-light placeholder:text-sm bg-neutral-50 rounded-md focus:bg-neutral-100 resize-none"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setFormValue({ ...formValue, additional: e.target.value })
        }
      />
      <input
        type="hidden"
        name="apikey"
        value="b426fda8-3a99-474c-b181-aafefb0d463a"
      />
      <button
        type="submit"
        className="border-2 border-themeColor bg-white text-themeColor hover:bg-themeColor hover:text-white capitalize relative h-9 px-4 rounded-md text-sm font-bold duration-200"
      >{`${loading ? "sending..." : "Submit"}`}</button>
    </form>
  );
};

export default ContactForm;
