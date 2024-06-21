import axios from "axios";

export const getResponse = async (field: string | null, text: string) => {
  const res = await axios.post<{ response: string }>(
    `https://api.myaitwin.in/${field || "text"}`,
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
    `https://api.myaitwin.in/${endpoint}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data.response;
};
