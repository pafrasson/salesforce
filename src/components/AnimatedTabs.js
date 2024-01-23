import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
    { id: "OS", label: "O.S" },
    { id: "pedido", label: "Pedido" },
];

function AnimatedTabs() {
    let [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="flex space-x-1">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${activeTab === tab.id ? "" : "hover:text-sky-600"
                        } relative rounded-full px-3 py-1.5 text-sm font-medium text-black outline-2 outline-sky-400 transition focus-visible:outline-2`}
                    style={{
                        WebkitTapHighlightColor: "transparent",
                    }}
                >
                    {activeTab === tab.id && (
                        <motion.div
                            layoutId="bubble"
                            className="absolute inset-0 bg-sky-600"
                            style={{ borderRadius: 9999 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">
                        {tab.label}
                    </span>

                </button>
            ))}
        </div>
    );
}
export default AnimatedTabs