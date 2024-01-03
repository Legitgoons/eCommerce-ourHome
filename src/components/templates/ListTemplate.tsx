import { ListCardData } from '@/types/apis/listData';

import Header from '../organisms/Header';
import ListCard from '../organisms/ListCard';

interface ListTemplateProps {
  data: ListCardData[];
}

export default function ListTemplate({ data }: ListTemplateProps) {
  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-auto">
      <Header currentPage="list" />
      <ol className="container flex flex-wrap justify-center">
        {data.map((item, index) => (
          <li
            key={item.id}
            className="w-80 h-500 flex items-start justify-center py-8"
          >
            <div className="w-72 flex flex-col items-start">
              <span className="t2">{String(index + 1).padStart(2, '0')}</span>
              <ListCard data={item} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
