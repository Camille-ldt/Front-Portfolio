import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
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
      // Supprimer les caractères non numériques sauf "+"
      let numericValue = value.replace(/\D/g, "");

      // Si le numéro commence par +33, on le convertit en 06 ou 07
      if (numericValue.startsWith("33")) {
        numericValue = "0" + numericValue.slice(2);
      }

      // Vérifier que le numéro commence par 06 ou 07
      if (!numericValue.startsWith("06") && !numericValue.startsWith("07")) {
        return;
      }

      const formattedValue =
        numericValue
          .slice(0, 10) // Limite à 10 chiffres
          .match(/.{1,2}/g) // Regroupe les chiffres par paquets de 2
          ?.join("-") || ""; // Ajoute un tiret entre chaque groupe

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
    setLoading(true); // Définir l'état de chargement sur true au début

    if (!captchaValue) {
      toast.error("Veuillez valider le reCAPTCHA.");
      setLoading(false);
      return; // Si le captcha n'est pas validé, on ne soumet pas le formulaire
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
            ...formData, // Les données du formulaire
            captcha: captchaValue, // Ajouter la réponse du reCAPTCHA
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur du serveur");
      }

      const data = await response.json();
      console.log("Réponse du serveur : ", data);

      if (data.success) {
        toast.success(data.message); // Afficher le message du serveur
        setFormData({
          // Réinitialiser le formulaire
          firstname: "",
          lastname: "",
          company: "",
          email: "",
          number: "",
          message: "",
        });
      } else {
        toast.error(data.message); // Afficher le message d'erreur du serveur
      }
    } catch (error: any) {
      toast.error("Erreur lors de l'envoi du message");
      console.error("Erreur : ", error);
    } finally {
      setLoading(false); // Définir l'état de chargement sur false à la fin
    }
  };

  return (
    <section>
      <div className="bg-orange-50 px-6 py-5 sm:py-10 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>
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
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Prénom
              </label>
              <div className="mt-2.5">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-800"
                  onChange={handleChange}
                  value={formData.firstname}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Nom
              </label>
              <div className="mt-2.5">
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-800"
                  onChange={handleChange}
                  value={formData.lastname}
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Entreprise
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-800"
                  onChange={handleChange}
                  value={formData.company}
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-800"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="number"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Numéro de téléphone
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-stone-800">
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-800 sm:text-sm/6"
                    >
                      <option>FR</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                  <input
                    id="number"
                    name="number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-800 sm:text-sm/6"
                    onChange={handleChange}
                    value={formData.number}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-stone-800"
                  onChange={handleChange}
                  value={formData.message}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <ReCAPTCHA
              sitekey="6Lcdq_0qAAAAAIqVstxgoP7yTQWIIxcbKs5fyElS"
              onChange={handleCaptchaChange} // Fonction appelée quand l'utilisateur valide le captcha
            />
            <button
              type="submit"
              className={`inline-flex items-center justify-center rounded-md border border-transparent bg-stone-800 px-6 py-2 text-base font-semibold text-white shadow-sm transition-all hover:bg-stone-700 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 mt-7 cursor-pointer ${
                loading ? "cursor-not-allowed opacity-50" : ""
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
