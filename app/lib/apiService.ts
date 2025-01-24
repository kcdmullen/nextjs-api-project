const baseUrl = process.env.API_URL || '';
const apiKey = process.env.API_KEY || '';

export async function getCategories(type: string) {
  type Category = {
    des_lg: string;
    vn_name: string;
  };

  const categories: string[] = [];
  const url = `${baseUrl}po/${type}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const key = type === 'departments' ? 'des_lg' : 'vn_name';
    const json = await response.json();
    json.forEach((i: Category) => {
      categories.push(i[key].trim());
    });
    return categories;
  } catch (error) {
    console.error(error);
  }
}

export async function searchPOs(params: FormData) {
  const url = `${baseUrl}po`;
  // Convert FormData to a plain object
  const formDataToJSON = (formData: FormData) => {
    const obj: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      obj[key] = value as string; // Assume all values are strings (adjust if needed)
    });
    return obj;
  };

  // Transform FormData to JSON
  const jsonBody = JSON.stringify(formDataToJSON(params));

  const request = new Request(url, {
    method: 'POST',
    body: jsonBody,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
  });

  try {
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
}
