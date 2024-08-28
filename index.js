import { Octokit } from '@octokit/rest';

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const {
      topic,
      start_time: date,
      recording_files: files,
    } = body.payload.object;
    const data = {
      topic,
      date,
      url: files[0].download_url,
    };
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e.message,
    };
  }
};
