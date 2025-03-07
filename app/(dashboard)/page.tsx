import { UserButton } from "@clerk/nextjs";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const Dashboard = () => {
  return (
    <nav className="w-full bg-[#3C3C3C] text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <Image
                  src="/logo.svg"
                  height={50}
                  width={50}
                  alt="Tarot logo, a series of lines"
                />
          </div>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:text-gray-300 transition-colors" href="#">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:text-gray-300 transition-colors" href="#">
                Content
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:text-gray-300 transition-colors" href="#">
                Settings
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Dashboard;
