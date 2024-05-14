import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/shadcn/ui/navigation-menu"


const Filter = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Filter by region</NavigationMenuTrigger>

                    <NavigationMenuContent className="p-4 w-[200px]">
                        <NavigationMenuLink className="block">Africa</NavigationMenuLink>
                        <NavigationMenuLink className="block">America</NavigationMenuLink>
                        <NavigationMenuLink className="block">Asia</NavigationMenuLink>
                        <NavigationMenuLink className="block">Europe</NavigationMenuLink>
                        <NavigationMenuLink className="block">Oceania</NavigationMenuLink>
                    </NavigationMenuContent>


                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}

export default Filter