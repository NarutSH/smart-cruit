import axios from "axios";
///GetResumeList?createdBy=
export const smartCruitAPI = axios.create({
  baseURL: "https://resumeapiservice.azurewebsites.net/api",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export const getResumeList = async () => {
  const response = await smartCruitAPI.get("/GetResumeList");

  return response.data;
};
