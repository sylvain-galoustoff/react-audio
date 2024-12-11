const apiUrl = "http://localhost:3000/api/";

export const fetchCategories = async () => {
  try {
    const response = await fetch(apiUrl + "categories");
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des catégories");
    }
    const data = await response.json();
    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return err.message;
    } else {
      return "Erreur inconnue";
    }
  }
};

export const fetchTracksFromCategoryId = async (categoryId: string | undefined) => {
  try {
    const response = await fetch(apiUrl + "tracks/" + String(categoryId));
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des catégories");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    } else {
      return "Erreur inconnue";
    }
  }
};

export const fetchCategoryById = async (categoryId: string | undefined) => {
  try {
    const response = await fetch(apiUrl + "category/" + String(categoryId));
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération de la catégorie");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    } else {
      return "Erreur inconnue";
    }
  }
};
