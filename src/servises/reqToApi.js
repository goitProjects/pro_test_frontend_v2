import axios from "axios";

axios.defaults.baseURL = "https://protest-backend.goit.global";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const postRegister = async (user) => {
  try {
    const newUser = await axios.post("/auth/register", user);
    return await newUser.data;
  } catch (error) {
    console.log("error", { error });
    throw error;
  }
};

const postSignInUser = async (user) => {
  try {
    const userData = await axios.post("/auth/login", user);
    await token.set(userData.data.accessToken);

    return await userData.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const postLogoutUser = async () => {
  try {
    await axios.post("/auth/logout");
    await token.unSet();
  } catch (error) {
    console.log("error", { error });
    throw error;
  }
};

const postRefreshUser = async (refreshToken, sid) => {
  token.set(refreshToken);
  try {
    const user = await axios.post("auth/refresh", { sid });
    token.set(user.data.newAccessToken);
    return await user.data;
  } catch (error) {
    console.log("error", { error });
    throw error;
  }
};

const getTech = async () => {
  try {
    const questions = await axios.get("/qa-test/tech");
    return await questions.data;
  } catch (error) {
    console.log("error", { error });
    throw error;
  }
};

const getTheory = async () => {
  try {
    const questions = await axios.get("/qa-test/theory");
    return await questions.data;
  } catch (error) {
    console.log("error", { error });
    throw error;
  }
};

const postTechResults = async (results) => {
  try {
    const response = await axios.post("/qa-test/tech-results", results);
    return await response.data;
  } catch (error) {
    console.log("error", { error });
    throw error;
  }
};

const postTheoryResults = async (results) => {
  try {
    const response = await axios.post("/qa-test/theory-results", results);
    return await response.data;
  } catch (error) {
    console.log("error", { error });
    throw error;
  }
};

const getUser = async (userToken) => {
  try {
    await token.set(userToken);
    const user = await axios.get("/user");
    return await user.data;
  } catch (error) {
    console.log("error", { error });
    throw error;
  }
};

const getTestData = async (type) => {
  try {
    if (type === "technical") {
      const data = await axios.get("/qa-test/tech");
      return data;
    }

    const data = await axios.get("/qa-test/theory");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export {
  postRegister,
  postSignInUser,
  postLogoutUser,
  postRefreshUser,
  getTech,
  getTheory,
  postTechResults,
  postTheoryResults,
  getUser,
  getTestData,
};
