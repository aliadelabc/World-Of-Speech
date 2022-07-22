import { render, screen } from "@testing-library/react";
//testing sending data
test("Sending score to server to get rank%", async () => {
  const body = {
    score: "60",
  };
  try {
    await request(app).post("http://localhost:89/api/v1/fetch-rank").send(body);
  } catch (err) {
    // write test for failure here
    console.log(`Error ${err}`);
  }
});
