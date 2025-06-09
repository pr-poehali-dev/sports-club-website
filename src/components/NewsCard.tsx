import Icon from "@/components/ui/icon";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Icon name="Calendar" className="w-4 h-4 mr-2" />
          {formatDate(news.date)}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {news.title}
        </h3>

        <p className="text-gray-600 line-clamp-2 mb-4">{news.description}</p>

        <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center group">
          Читать далее
          <Icon
            name="ArrowRight"
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
          />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
