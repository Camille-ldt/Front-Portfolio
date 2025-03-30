const API_URL = import.meta.env.VITE_API_URL || "http://localhost:10000"; // Valeur par défaut pour le développement local

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/portfolio`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de l'appel API:", error);
  }
};
