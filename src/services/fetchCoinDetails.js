import axiosInstance from "../helpers/axiosInstance";

export default async function fetchCoinDetails(coinId) {
  try {
    const responce = await axiosInstance.get(
      `/coins/${coinId}` //
    );
    return responce.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
