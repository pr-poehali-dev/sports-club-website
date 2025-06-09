import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: { label: string; href: string }[];
}

const MobileMenu = ({ isOpen, onClose, navigationItems }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t">
      <div className="px-4 pt-2 pb-4 space-y-1">
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}

        <div className="border-t pt-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-2"
          >
            <Icon name="Sun" className="w-4 h-4" />
            <span>Тема</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-blue-600 border-blue-600"
          >
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
