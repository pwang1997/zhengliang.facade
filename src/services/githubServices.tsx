
export const fetchReadMe = async (repo: string) => {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/${repo}/main/README.md`,
      {
        method: "GET",
        headers: {
          'accept':'application/vnd.github.v3.raw'
        },
        next: { revalidate: 3600 }
      },
    );
    const data = await response.text();

    return data;
  } catch (err: any) {
    console.error(err);
  }
};