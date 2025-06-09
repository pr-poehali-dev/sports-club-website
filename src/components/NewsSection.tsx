import NewsCard from "./NewsCard";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Новое оборудование для кардио-зоны",
      description:
        "Мы установили современные беговые дорожки и велотренажеры последнего поколения",
      date: "2024-01-15",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "Мастер-класс по функциональной тренировке",
      description:
        "Приглашаем на открытую тренировку с чемпионом России по кроссфиту",
      date: "2024-01-12",
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      title: "Скидка 30% на годовое членство",
      description:
        "Только до конца месяца - специальное предложение для новых участников",
      date: "2024-01-10",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Новости клуба
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Следите за последними новостями, акциями и событиями в нашем клубе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
