const questionsListResponse = {};

export default async function mockFetch(url) {
  if (url === "http://localhost:4000/api/v1/word-list") {
    return {
      ok: true,
      status: 200,
      json: async () => questionsListResponse,
    };
  } else if (url === "http://localhost:89/api/v1/word-list") {
    return {
      ok: true,
      status: 200,
      json: async () => questionsListResponse,
    };
  } else {
    throw new Error(`Unhandled request: ${url}`);
  }
}
