import { useState, useEffect } from "react";

function Contact() {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Contact page loaded");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.subject ||
      !form.message
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage("Form submitted successfully!");
  }

  return (
    <main>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Subject"
          onChange={(e) =>
            setForm({ ...form, subject: e.target.value })
          }
        />

        <textarea
          placeholder="Message"
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        ></textarea>

        <button type="submit">Submit</button>

        <p>{message}</p>

      </form>
    </main>
  );
}

export default Contact;