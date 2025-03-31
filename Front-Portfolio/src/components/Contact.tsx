import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";

interface ContactProps {
  value: string | null;
  firstname: string;
  lastname: string;
  company: string;
  email: string;
  number: string;
  message: string;
}

const Contact: React.FC<ContactProps> = () => {
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
      let numericValue = value.replace(/\D/g, "");

      if (numericValue.startsWith("33")) {
        numericValue = "0" + numericValue.slice(2);
      }

      if (!numericValue.startsWith("06") && !numericValue.startsWith("07")) {
        return;
      }

      const formattedValue =
        numericValue
          .slice(0, 10)
          .match(/.{1,2}/g)
          ?.join("-") || "";

      setFormData((prev) => ({
        ...prev,
        number: formattedValue,
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
            captcha: captchaValue,
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
        setCaptchaValue(null);
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
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-2 sm:mt-3 md:mt-5 mb-5 sm:mb-5 md:mb-10">
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
              <div className="mt-2.5">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-stone-800"
                  onChange={handleChange}
                  value={formData.firstname}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-semibold text-gray-900"
              >
                Nom
              </label>
              <div className="mt-2.5">
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-stone-800"
                  onChange={handleChange}
                  value={formData.lastname}
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="number"
                className="block text-sm font-semibold text-gray-900"
              >
                Numéro de téléphone
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-white outline-gray-300 focus-within:outline-stone-800">
                  <div className="grid shrink-0 grid-cols-1">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-stone-800 sm:text-sm"
                    >
                      <option>FR</option>
                    </select>
                    <ChevronDownIcon className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" />
                  </div>
                  <input
                    id="number"
                    name="number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-stone-800"
                    onChange={handleChange}
                    value={formData.number}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <ReCAPTCHA
              sitekey="6Lcdq_0qAAAAAIqVstxgoP7yTQWIIxcbKs5fyElS"
              onChange={handleCaptchaChange}
            />
            <button
              type="submit"
              className={`mt-7 px-6 py-2 text-base font-semibold text-white bg-stone-800 rounded-md shadow-sm transition-all hover:bg-stone-700 focus:outline-indigo-600 ${
                loading || !captchaValue ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={loading || !captchaValue}
            >
              {loading ? "Envoi en cours..." : "Envoyer"}
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
