import { Coffee } from "lucide-react";

export const metadata = {
  title: "Menu | Raada Resto & Cafe",
  description: "Explore our wide range of starters, main courses, and beverages.",
};

const menuItems = {
  "Starters": [
    { name: "Garlic Parmesan Fries", price: "₹220", description: "Crispy fries tossed in garlic and parmesan cheese." },
    { name: "Bruschetta Platter", price: "₹280", description: "Toasted baguette slices topped with tomatoes and basil." },
    { name: "Crispy Cheese Balls", price: "₹250", description: "Deep fried mozzarella balls served with marinara sauce." },
    { name: "BBQ Chicken Wings", price: "₹350", description: "Juicy wings coated in our signature BBQ sauce." },
  ],
  "Main Course": [
    { name: "Truffle Mushroom Pasta", price: "₹450", description: "Creamy fettuccine with wild mushrooms and truffle oil." },
    { name: "Margherita Pizza", price: "₹400", description: "Classic pizza with fresh tomatoes, mozzarella, and basil." },
    { name: "Grilled Herb Chicken", price: "₹550", description: "Tender chicken breast with herb butter and seasonal veggies." },
    { name: "Paneer Tikka Panini", price: "₹380", description: "Spicy paneer tikka grilled in a sourdough panini." },
  ],
  "Beverages": [
    { name: "Signature Cappuccino", price: "₹250", description: "Perfectly brewed espresso with velvety steamed milk." },
    { name: "Iced Caramel Macchiato", price: "₹280", description: "Espresso over ice with caramel syrup and milk." },
    { name: "Matcha Latte", price: "₹300", description: "Premium matcha blended with steamed milk." },
    { name: "Fresh Berry Smoothie", price: "₹320", description: "A refreshing blend of mixed berries and yogurt." },
  ],
};

export default function MenuPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-brand-darkBrown mb-6">Our Menu</h1>
          <p className="text-lg text-brand-darkBrown/70">
            Carefully curated dishes to tantalize your taste buds. Order your favorites right here.
          </p>
        </div>

        <div className="space-y-16 max-w-4xl mx-auto">
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center gap-4 mb-8">
                <Coffee className="w-8 h-8 text-brand-green" />
                <h2 className="text-3xl font-bold text-brand-darkBrown border-b-2 border-brand-green pb-2 inline-block">
                  {category}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {items.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-brown/10 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-brand-darkBrown">{item.name}</h3>
                      <span className="text-xl font-bold text-brand-green whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                    <p className="text-brand-darkBrown/70 mb-4 h-12">{item.description}</p>
                    <a 
                      href={`https://wa.me/918238959529?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center py-2.5 bg-brand-beige text-brand-darkBrown font-medium rounded-xl hover:bg-brand-green hover:text-white transition-colors border border-brand-brown/20"
                    >
                      Order via WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
