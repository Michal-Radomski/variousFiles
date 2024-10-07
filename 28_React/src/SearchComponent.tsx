import React from "react";
import { BrowserRouter as Router, useSearchParams, Routes, Route } from "react-router-dom";

const SearchComponentChild: React.FC = (): JSX.Element => {
  // Initialize searchParams and setSearchParams using useSearchParams hook
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log("searchParams:", searchParams);

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params: Record<string, string> = {};

    // Convert form data to URLSearchParams
    formData.forEach((value: FormDataEntryValue, key: string) => {
      params[key] = value as string;
    });

    // Update search parameters
    setSearchParams(params);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
      <div>
        <h3>Current Search Params:</h3>
        <pre>{JSON.stringify(Object.fromEntries(searchParams.entries()), null, 2)}</pre>
      </div>
    </div>
  );
};

const SearchComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/search" element={<SearchComponentChild />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default SearchComponent;
