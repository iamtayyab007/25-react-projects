import React from "react";
import useFetch from ".";
import { GiH2O } from "react-icons/gi";

export const TestData = () => {
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>Test Results</h1>
      {pending ? <h2>Please wait! data is loading</h2> : null}
      {error ? <h3>{error}</h3> : null}
      <div>
        {data && data.products && data.products.length
          ? data.products.map((items) => <p key={items.id}>{items.title}</p>)
          : null}
      </div>
    </div>
  );
};
