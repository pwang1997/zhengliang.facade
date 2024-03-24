export const fetchReadMe = async (repo: string) => {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/${repo}/main/README.md`,
      {
        method: "GET",
        headers: {
          "Content-Type": "text/plain",
        },
      }
    );
    const data = await response.text();

    return data;
  } catch (err: any) {
    console.error(err);
  }
};
