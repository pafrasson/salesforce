import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";
import OSinput from "./OSinput";
import PedidoInput from "./PedidoInput";

export default function AnimatedTabs() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="flex justify-center items-center my-5">
            <div className="overflow-hidden flex flex-col">
                <nav className="p-4 flex">
                        {tabs.map((item) => (
                            <motion.button
                                key={item.label}
                                className={`m-3 font-poppins font-semibold text-base p-8 flex justify-between items-center select-none
                                 rounded-full relative px-3 py-1.5
                                    ${item === selectedTab ? " bg-slate-300 dark:bg-gray-700 text-sky-600" : "hover:text-sky-600"}`}
                                onClick={() => handleTabClick(item)}
                                style={{ borderRadius: 9999 }}
                            >
                                {`${item.icon} ${item.label}`}
                                {item === selectedTab ? (
                                    <div className="underline absolute bottom-0 left-0 right-0 h-1"></div>
                                ) : null}
                            </motion.button>
                        ))}
                </nav>
                <main className="flex items-center justify-center pb-6">
                    <AnimatePresence>
                        {/* Renderizar OSInput se a aba selecionada for "O.S" */}
                        {selectedTab.label === "O.S" && (
                            <motion.div
                                key={selectedTab ? selectedTab.label : "empty"}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <OSinput />
                            </motion.div>
                        )}

                        {/* Renderizar PedidoInput se a aba selecionada for "Pedido" */}
                        {selectedTab.label === "Pedido" && (
                            <motion.div
                                key={selectedTab ? selectedTab.label : "empty"}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <PedidoInput />
                            </motion.div>
                        )}

                        {/* Renderizar o ícone da aba selecionada se não for "O.S" ou "Pedido" */}
                        {!selectedTab || (selectedTab.label !== "O.S" && selectedTab.label !== "Pedido") ? (
                            <motion.div
                                key={selectedTab ? selectedTab.label : "empty"}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                {selectedTab ? selectedTab.icon : ""}
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}   
