import axios from "axios";

export const getResponse = async (field: string | null, text: string) => {
  const res = await axios.post<{ response: string }>(
    `https://fuzzy-couscous-vr5w7wxq6gjfw4jx-5000.app.github.dev/${
      field || "text"
    }`,
    field === "health"
      ? {
          text,
          support_type: "mental_health",
        }
      : { text }
  );
  return res.data.response;
};

export const getSummary = async (file: File, endpoint: string) => {
  const formData = new FormData();

  formData.set("file", file);

  const res = await axios.post<{ response: string }>(
    `https://fuzzy-couscous-vr5w7wxq6gjfw4jx-5000.app.github.dev/${endpoint}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data.response;
};
