const requestTemplate = {
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
};

export const getResponseTemplate = {
  method: "get",
  ...requestTemplate,
};

/**
 * Simple wrapper to utilize fetching API data and catchind the exception.
 * @param {*} url
 * @param {*} request
 * @returns
 */
export const fetchWrapper = async (url, request) => {
  try {
    const response = await fetch(url, request);

    return response;
  } catch (exception) {
    console.log("Error: fetch exception.");
    return {};
  }
};
