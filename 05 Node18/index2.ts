// An AJAX request Refresher

function fetchGitHubUser1(): void {
  fetch("https://api.github.com/users/Michal-Radomski")
    .then((response) => response.json())
    .then((json) => console.log("json.id - fetchGitHubUser1():", json.id));
}

fetchGitHubUser1();

async function fetchGitHubUser2(): Promise<void> {
  const response = await fetch("https://api.github.com/users/Michal-Radomski");
  const json = await response.json();
  console.log("json.id - fetchGitHubUser2():", json.id);
}

fetchGitHubUser2();

const fetchGitHubUser3 = async (): Promise<void> => {
  const response = await fetch("https://api.github.com/users/Michal-Radomski");
  const json = await response.json();
  console.log("json.id - fetchGitHubUser3():", json.id);
};

fetchGitHubUser3();
