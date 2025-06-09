import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Workout {
  id: number;
  name: string;
  time: string;
  trainer: string;
  duration: number;
  difficulty: string;
  spots: number;
}

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легкий":
        return "bg-green-100 text-green-800";
      case "Средний":
        return "bg-yellow-100 text-yellow-800";
      case "Сложный":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 min-w-[300px] lg:min-w-0">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-sm text-gray-500">
          <Icon name="Clock" className="w-4 h-4 mr-1" />
          {workout.time}
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(workout.difficulty)}`}
        >
          {workout.difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{workout.name}</h3>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <Icon name="User" className="w-4 h-4 mr-2" />
          {workout.trainer}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Icon name="Timer" className="w-4 h-4 mr-2" />
          {workout.duration} минут
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Icon name="Users" className="w-4 h-4 mr-2" />
          {workout.spots} свободных мест
        </div>
      </div>

      <Button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        disabled={workout.spots === 0}
      >
        {workout.spots === 0 ? "Нет мест" : "Записаться"}
      </Button>
    </div>
  );
};

export default WorkoutCard;
