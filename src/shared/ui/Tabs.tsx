"use client";

type TabsProps<T extends string> = {
  tabs: readonly T[];
  activeTab: T;
  onChange: (tab: T) => void;
};

function Tabs<T extends string>({ tabs, activeTab, onChange }: TabsProps<T>) {
  return (
    <div className="mb-6">
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => {
              onChange(tab);
            }}
            className={`flex-1 py-3 text-center font-semibold transition-colors ${
              activeTab === tab
                ? "text-primary border-b-2 border-primary"
                : "hover:text-primary"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
