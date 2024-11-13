import { createContext, useState, useContext, startTransition } from "react";

import { cn } from "@/libs/cn";

type TabsContextProps = { active: string; onTab: (tab: string) => void };

const TabsContenxt = createContext<TabsContextProps>({ active: "", onTab: () => {} });

type TabsProps = { defaultValue: string; onChange: (tab: string) => void } & React.ComponentProps<"div">;

type TabsItemProps = { value: string; activeTabClassName?: string } & React.ComponentProps<"div">;

function Tabs({ children, defaultValue, onChange = () => {}, className }: TabsProps) {
    const [tab, setTab] = useState<string>(defaultValue);

    const onTab = (tab: string) => {
        startTransition(() => {
            setTab(tab);
            onChange(tab);
        });
    };

    return (
        <div className={cn("flex items-center", className)}>
            <TabsContenxt.Provider value={{ active: tab, onTab }}>{children}</TabsContenxt.Provider>
        </div>
    );
}

Tabs.Item = function ({ children, value, className, activeTabClassName = "bg-gray-100 dark:bg-gray-500/10" }: TabsItemProps) {
    const { active, onTab } = useContext(TabsContenxt);

    const isActive = active === value;

    return (
        <div role="tab" onClick={() => onTab(value)} className={cn("py-2.5 px-4 text-gray-800 dark:text-gray-300 rounded-lg cursor-pointer transition-colors", className, isActive && activeTabClassName)}>
            {children}
        </div>
    );
};

export default Tabs;
