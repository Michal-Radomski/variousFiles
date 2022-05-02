// Fetching with Node18

const testingFetchWithNode18 = async function () {
  const response: Response = await fetch("https://ipwhois.app/json/?objects=ip,country,city");
  if (response.ok) {
    const data: {ip: string; country: string; city: string} = await response.json();
    console.log(`You IP is: ${data.ip}, you are in: ${data.country}, ${data.city}`);
  }
};

testingFetchWithNode18();
