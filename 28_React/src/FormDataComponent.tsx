import React from "react";

interface NewProperty {
  user_id: number;
  title: string;
  description: string;
  bed: number;
  price_per_night: number;
  images: (string | File)[];
  address: string;
  city: string;
  state: string;
  wifi: boolean;
  parking: boolean;
  pets: boolean;
  gym: boolean;
  pool: boolean;
  netflix: boolean;
  extraInfo: string;
}

const Component1 = (): JSX.Element => {
  return (
    <>
      <React.Suspense>
        <div>Div_1</div>
        <div>Div_2</div>
      </React.Suspense>
    </>
  );
};

const Component2 = (): JSX.Element => {
  return (
    <>
      <React.Suspense>
        <div>Div_1</div>
      </React.Suspense>
      <React.Suspense>
        <div>Div_2</div>
      </React.Suspense>
    </>
  );
};

const FormDataComponent: React.FC = (): JSX.Element => {
  const [propertyData, setPropertyData] = React.useState<NewProperty>({
    user_id: 1,
    title: "",
    description: "",
    bed: 0,
    price_per_night: 0,
    images: [],
    address: "",
    city: "",
    state: "",
    wifi: false,
    parking: false,
    pets: false,
    gym: false,
    pool: false,
    netflix: false,
    extraInfo: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target;
    setPropertyData((prevData: NewProperty) => ({
      ...prevData,
      [name]: name === "images" ? [...prevData.images, (event.target as HTMLInputElement).files![0]] : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const formDataToSend: FormData = new FormData();

    Object.entries(propertyData).forEach(([key, value]) => {
      if (key !== "images") {
        formDataToSend.append(key, value.toString());
      }
    });

    // Append images to FormData
    propertyData.images.forEach((image, index) => {
      if (image instanceof File) {
        formDataToSend.append(`image_${index}`, image);
      }
    });

    // Replace with your API endpoint
    // const response = await fetch("/api/submit", {
    //   method: "POST",
    //   body: formDataToSend,
    // });

    // if (response.ok) {
    //   console.log("Form submitted successfully");
    // } else {
    //   console.error("Error submitting form");
    // }

    const title = formDataToSend.get("title");
    console.log({ title });

    formDataToSend.forEach((key, value) => {
      console.log({ key, value });
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input type="text" name="title" value={propertyData.title} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea name="description" value={propertyData.description} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Bed:
            <input type="number" name="bed" value={propertyData.bed} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Price per Night:
            <input
              type="number"
              name="price_per_night"
              value={propertyData.price_per_night}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input type="text" name="address" value={propertyData.address} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            City:
            <input type="text" name="city" value={propertyData.city} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            State:
            <input type="text" name="state" value={propertyData.state} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Images:
            <input
              type="file"
              name="images"
              accept="image/*"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange({
                  target: { name: "images", files: (event.target as HTMLInputElement)?.files },
                } as React.ChangeEvent<HTMLInputElement>)
              }
              multiple
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <br />
      <Component1 />
      <Component2 />
    </React.Fragment>
  );
};

export default FormDataComponent;
