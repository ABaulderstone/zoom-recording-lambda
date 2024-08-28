exports.handler = async (event) => {
  const details = {
    githubToken: process.env.GITHUB_TOKEN,
    repo: process.env.GITHUB_REPO.split('/')[1],
  };
  return {
    statusCode: 200,
    body: JSON.stringify(details),
  };
};
