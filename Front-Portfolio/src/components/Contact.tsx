import { useState } from "react";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    company: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "number") {
      let numericValue = value.replace(/[^\d+]/g, ""); // Autoriser "+"

      // Vérifier si c'est un numéro FR valide après saisie complète
      if (numericValue.length >= 10) {
        if (numericValue.startsWith("+33")) {
          numericValue = "0" + numericValue.slice(3);
        }

        if (!numericValue.startsWith("06") && !numericValue.startsWith("07")) {
          toast.error("Le numéro doit commencer par 06 ou 07.");
          return;
        }

        // Formatter avec des tirets
        numericValue = numericValue
          .slice(0, 10)
          .replace(/(\d{2})/g, "$1-")
          .slice(0, -1);
      }

      setFormData((prev) => ({
        ...prev,
        number: numericValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!captchaValue) {
      toast.error("Veuillez valider le reCAPTCHA.");
      setLoading(false);
      return;
    }

    try {
      console.log("Données du formulaire : ", formData);

      const response = await fetch(
        "https://portfolio-api.onrender.com/mailer.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            "g-recaptcha-response": captchaValue, // Nom utilisé par Google
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur du serveur");
      }

      const data = await response.json();
      console.log("Réponse du serveur : ", data);

      if (data.success) {
        toast.success(data.message);
        setFormData({
          firstname: "",
          lastname: "",
          company: "",
          email: "",
          number: "",
          message: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error: any) {
      toast.error("Erreur lors de l'envoi du message");
      console.error("Erreur : ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="bg-orange-50 px-6 py-5 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-semibold mt-2 sm:mt-3 md:mt-5 mb-5 sm:mb-5 md:mb-10">
            Contact
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-semibold text-gray-900"
              >
                Prénom
              </label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-gray-300 focus:outline-stone-800"
                onChange={handleChange}
                value={formData.firstname}
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-semibold text-gray-900"
              >
                Nom
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-gray-300 focus:outline-stone-800"
                onChange={handleChange}
                value={formData.lastname}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-gray-300 focus:outline-stone-800"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-gray-300 focus:outline-stone-800"
                onChange={handleChange}
                value={formData.message}
                required
              />
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <ReCAPTCHA
              sitekey="6Lcdq_0qAAAAAIqVstxgoP7yTQWIIxcbKs5fyElS"
              onChange={handleCaptchaChange}
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md"
            disabled={loading}
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
