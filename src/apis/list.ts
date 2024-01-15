import { ListCardData } from '@/types/apis/listData';

export const fetchListData = async (): Promise<ListCardData[]> => {
  try {
    const response = await fetch('http://localhost:4000/products');

    if (!response.ok) {
      throw new Error('Server responded with an error');
    }
    const data: ListCardData[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
