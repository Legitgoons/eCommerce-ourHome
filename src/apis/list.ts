import { ListCardData } from '@/types/apis/listData';

export const fetchListData = async (): Promise<ListCardData[]> => {
  const response = await fetch('/data/listData.json');
  const data: ListCardData[] = await response.json();
  return data;
};
