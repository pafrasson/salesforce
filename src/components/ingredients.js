const allIngredients = [
    { icon: "📋", label: "O.S" },
    { icon: "📦", label: "Pedido" }
];

const [OS, Pedido] = allIngredients;
export const initialTabs = [OS, Pedido];

function getNextIngredient(ingredients) {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
}  