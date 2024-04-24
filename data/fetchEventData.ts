import { CODE_ACADEMY_EVENTS } from "./constants";

export const fetchData = async (URI?: string) => {
  let url = URI || CODE_ACADEMY_EVENTS;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
