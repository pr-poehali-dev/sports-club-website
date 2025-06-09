import WorkoutCard from "./WorkoutCard";

const UpcomingWorkouts = () => {
  const workouts = [
    {
      id: 1,
      name: "Силовая тренировка",
      time: "09:00",
      trainer: "Анна Петрова",
      duration: 60,
      difficulty: "Средний",
      spots: 8,
    },
    {
      id: 2,
      name: "Йога для начинающих",
      time: "11:00",
      trainer: "Мария Иванова",
      duration: 45,
      difficulty: "Легкий",
      spots: 12,
    },
    {
      id: 3,
      name: "Кроссфит",
      time: "18:00",
      trainer: "Дмитрий Козлов",
      duration: 90,
      difficulty: "Сложный",
      spots: 5,
    },
    {
      id: 4,
      name: "Танцы",
      time: "19:30",
      trainer: "Елена Смирнова",
      duration: 60,
      difficulty: "Средний",
      spots: 15,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ближайшие тренировки
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выбирайте подходящие тренировки и записывайтесь прямо сейчас
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:space-x-0 lg:gap-6">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingWorkouts;
