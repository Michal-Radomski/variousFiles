import axios, { AxiosError } from "axios";

//* The best way!
const fetchPosts = async (): Promise<void> => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(1, "response?.data?.[0]?.userId:", response?.data?.[0]?.userId);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
      console.error("Status code:", error.response?.status);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};
fetchPosts();

interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}

const fetchPosts2 = async (): Promise<void> => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(2, "response?.data?.[0]?.userId:", response?.data?.[0]?.userId);
  } catch (error) {
    if (axios.isAxiosError<ValidationError>(error) && error.response) {
      console.log("Validation errors:", error.response.data.errors);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};
fetchPosts2();

function axiosErrorHandler<T>(callback: (err: AxiosError<T>) => void) {
  return (error: unknown) => {
    if (axios.isAxiosError(error)) {
      callback(error);
    } else {
      console.error("Non-Axios error:", error);
    }
  };
}

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(3, "response?.data?.[0]?.userId:", response?.data?.[0]?.userId);
  })
  .catch(
    axiosErrorHandler((error) => {
      console.error("Handled Axios Error:", error.response?.data);
    })
  );
