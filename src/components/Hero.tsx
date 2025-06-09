import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Твой путь к
                <span className="text-blue-600"> идеальной форме</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Современный спортивный клуб с персональным подходом к каждому
                участнику. Тренируйся с лучшими тренерами города.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                <Icon name="Calendar" className="w-5 h-5 mr-2" />
                Записаться на тренировку
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                Узнать больше
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Icon name="Users" className="w-5 h-5 text-blue-600" />
                <span>500+ участников</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" className="w-5 h-5 text-blue-600" />
                <span>15+ тренеров</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" className="w-5 h-5 text-blue-600" />
                <span>4.9 рейтинг</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Тренировка в спортзале"
                className="rounded-3xl shadow-2xl w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
