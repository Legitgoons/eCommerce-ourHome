import { useEffect, useState } from 'react';

import { fetchListData } from '@/apis/list';
import ListTemplate from '@/components/templates/ListTemplate';
import { ListCardData } from '@/types/apis/listData';

export default function ListPage() {
  const [data, setData] = useState<ListCardData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchListData();
      setData(data);
    };

    getData();
  }, []);

  return <ListTemplate data={data} />;
}
