async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    console.log("JSON.stringify(data):", JSON.stringify(data));
    return data;
  } catch (error: unknown) {
    // console.log("error:", error);
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.log("Something went wrong");
    }
  } finally {
    console.log("Job done!");
  }
}

fetchData("https://jsonplaceholder.typicode.com/users/1");
