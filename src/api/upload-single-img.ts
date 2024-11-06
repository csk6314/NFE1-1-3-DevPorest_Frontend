import api from "./index";
import { PortfolioThumbnailResType } from "../types/api-types/PortfolioType";

export const uploadSingleImg = async (img: File): Promise<string | undefined> => {
  const formData = new FormData();
  formData.append("image", img);
  try {
    const response = await api
      .post("portfolios/upload", {
        body: formData,
      })
      .json<PortfolioThumbnailResType>();

    if (response.success) return response.data?.url;
    throw new Error(response.error);
  } catch (error) {
    console.error("단일 이미지 업로드 오류:", error);
    throw error;
  }
};
