AOS.init({
  duration: 2000,
  once: true,
  offset: 20,
});

const btn = document.querySelector(".btn");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const Details = [...formData.entries()];
  const url = "";

  const jsonDetails = {};

  for (const d of Details) {
    jsonDetails[d[0]] = d[1];
  }

  form.reset();
  onSubmit({ url, jsonDetails });
  console.log(jsonDetails);
});

const onSubmit = async ({ url, jsonDetails }) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonDetails,
    });
  } catch (error) {
    console.log(error);
  }
};
