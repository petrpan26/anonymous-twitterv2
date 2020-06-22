const API_ROOT = "https://us-central1-confesison-280206.cloudfunctions.net/";
const FETCH_PATH = "confesison-dev-fetch";
const CREATE_PATH = "confesison-dev-create";

class StoryService {
  constructor() {}
  async fetchStories(tag, cursor, limit) {
    const result = await fetch(API_ROOT + FETCH_PATH, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'tag': tag,
        'cursor': cursor,
        'limit': limit,
      }),
    });
    if (result.ok) {
      console.log(result);
      return result.json();
    } else {
      return {
        results: [],
        cursor: null,
      };
    }
  }

  async createStory(tag, content) {
    const result = await fetch(API_ROOT + CREATE_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tag,
        content,
      }),
    });
  }
}

export default StoryService;
