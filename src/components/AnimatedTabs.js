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
        <div className="flex justify-center items-center mt-10">
            <div className="overflow-hidden flex flex-col">
                <nav className="p-4 pb-0">
                    <ul className="flex space-x-5">
                        {tabs.map((item) => (
                            <button
                                key={item.label}
                                className={`m-3 font-poppins font-semibold text-base w-100 p-8 flex justify-between items-center select-none
                                    ${item === selectedTab ? "selected text-sky-600" : "hover:text-sky-600"}`}
                                onClick={() => handleTabClick(item)}
                            >
                                {`${item.icon} ${item.label}`}
                                {item === selectedTab ? (
                                    <div className="underline absolute bottom-0 left-0 right-0 h-1"></div>
                                ) : null}
                            </button>
                        ))}
                    </ul>
                </nav>
                <main className="flex items-center justify-center pb-6">
                    <AnimatePresence>
                        {/* Renderizar OSInput se a aba selecionada for "O.S" */}
                        {selectedTab.label === "O.S" && (
                            <motion.div
                                key={selectedTab ? selectedTab.label : "empty"}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.1 }}
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
                                exit={{ y: -10, opacity: 0 }}
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
                                exit={{ y: -10, opacity: 0 }}
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