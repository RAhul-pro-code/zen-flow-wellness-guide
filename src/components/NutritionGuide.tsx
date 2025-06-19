
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Lightbulb, Clock } from "lucide-react";

export const NutritionGuide = () => {
  const [selectedMealPlan, setSelectedMealPlan] = useState("balanced");

  const mealPlans = {
    balanced: {
      name: "Balanced Nutrition",
      description: "Perfect for maintaining energy and mood stability",
      macros: { protein: 25, carbs: 45, fats: 30 },
      color: "green"
    },
    weightLoss: {
      name: "Weight Management",
      description: "Optimized for healthy weight loss and metabolism",
      macros: { protein: 35, carbs: 35, fats: 30 },
      color: "blue"
    },
    muscleGain: {
      name: "Muscle Building",
      description: "Higher protein for muscle development and recovery",
      macros: { protein: 40, carbs: 40, fats: 20 },
      color: "purple"
    }
  };

  const nutritionTips = [
    {
      category: "Testosterone Support",
      tip: "Include zinc-rich foods like pumpkin seeds, beef, and chickpeas",
      foods: ["Pumpkin seeds", "Lean beef", "Chickpeas", "Oysters"],
      color: "blue"
    },
    {
      category: "Stress Reduction",
      tip: "Omega-3 fatty acids help reduce cortisol and inflammation",
      foods: ["Salmon", "Walnuts", "Chia seeds", "Avocado"],
      color: "green"
    },
    {
      category: "Mood Stability",
      tip: "Complex carbs and B-vitamins support serotonin production",
      foods: ["Quinoa", "Sweet potato", "Leafy greens", "Eggs"],
      color: "purple"
    },
    {
      category: "Energy & Focus",
      tip: "Iron and magnesium combat fatigue and support brain function",
      foods: ["Spinach", "Dark chocolate", "Almonds", "Lentils"],
      color: "orange"
    }
  ];

  const sampleMeals = {
    breakfast: [
      "Greek yogurt with berries and almonds",
      "Oatmeal with banana and peanut butter",
      "Scrambled eggs with spinach and whole grain toast"
    ],
    lunch: [
      "Grilled chicken salad with mixed vegetables",
      "Quinoa bowl with roasted vegetables and chickpeas",
      "Salmon with sweet potato and steamed broccoli"
    ],
    dinner: [
      "Lean beef with roasted vegetables",
      "Baked cod with quinoa and asparagus",
      "Turkey and vegetable stir-fry with brown rice"
    ],
    snacks: [
      "Apple with almond butter",
      "Greek yogurt with nuts",
      "Hummus with vegetable sticks",
      "Trail mix with dried fruits"
    ]
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Nutrition & Diet Guide</h2>
        <p className="text-gray-600">Personalized nutrition recommendations for optimal health and wellness</p>
      </div>

      {/* Meal Plan Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(mealPlans).map(([key, plan]) => (
          <Card 
            key={key}
            className={`cursor-pointer transition-all duration-300 ${
              selectedMealPlan === key 
                ? `bg-${plan.color}-100 border-${plan.color}-300 shadow-lg` 
                : "bg-white/80 hover:bg-gray-50"
            }`}
            onClick={() => setSelectedMealPlan(key)}
          >
            <CardContent className="p-4 text-center">
              <h3 className={`font-semibold ${selectedMealPlan === key ? `text-${plan.color}-800` : "text-gray-800"}`}>
                {plan.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Protein: {plan.macros.protein}%</span>
                  <span>Carbs: {plan.macros.carbs}%</span>
                  <span>Fats: {plan.macros.fats}%</span>
                </div>
                <div className="space-y-1">
                  <Progress value={plan.macros.protein} className="h-1" />
                  <Progress value={plan.macros.carbs} className="h-1" />
                  <Progress value={plan.macros.fats} className="h-1" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Nutritional Tips */}
        <Card className="bg-white/80 backdrop-blur-sm border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-green-800">
              <Lightbulb className="w-5 h-5" />
              <span>Targeted Nutrition Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {nutritionTips.map((tip, index) => (
              <div key={index} className={`p-4 bg-${tip.color}-50 rounded-lg`}>
                <h4 className={`font-semibold text-${tip.color}-800 mb-2`}>{tip.category}</h4>
                <p className={`text-${tip.color}-700 text-sm mb-3`}>{tip.tip}</p>
                <div className="flex flex-wrap gap-2">
                  {tip.foods.map((food, foodIndex) => (
                    <Badge key={foodIndex} variant="secondary" className={`bg-${tip.color}-100 text-${tip.color}-800`}>
                      {food}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Sample Meals */}
        <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-800">
              <Clock className="w-5 h-5" />
              <span>Sample Daily Meals</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.entries(sampleMeals).map(([mealType, meals]) => (
              <div key={mealType}>
                <h4 className="font-semibold text-gray-800 mb-3 capitalize">{mealType}</h4>
                <div className="space-y-2">
                  {meals.map((meal, index) => (
                    <div key={index} className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-blue-700 text-sm">{meal}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Hydration & Supplements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm border-cyan-200">
          <CardHeader>
            <CardTitle className="text-cyan-800">💧 Hydration Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-cyan-50 rounded-lg">
              <h5 className="font-medium text-cyan-800">Daily Water Intake</h5>
              <p className="text-cyan-700 text-sm">8-10 glasses (2-2.5 liters) minimum</p>
            </div>
            <div className="p-3 bg-cyan-50 rounded-lg">
              <h5 className="font-medium text-cyan-800">Pre-Workout</h5>
              <p className="text-cyan-700 text-sm">1-2 glasses 30 minutes before exercise</p>
            </div>
            <div className="p-3 bg-cyan-50 rounded-lg">
              <h5 className="font-medium text-cyan-800">Post-Workout</h5>
              <p className="text-cyan-700 text-sm">Replace fluids lost during exercise</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-violet-200">
          <CardHeader>
            <CardTitle className="text-violet-800">🌿 Natural Supplements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-violet-50 rounded-lg">
              <h5 className="font-medium text-violet-800">Vitamin D3</h5>
              <p className="text-violet-700 text-sm">Supports testosterone and mood</p>
            </div>
            <div className="p-3 bg-violet-50 rounded-lg">
              <h5 className="font-medium text-violet-800">Magnesium</h5>
              <p className="text-violet-700 text-sm">Reduces stress and improves sleep</p>
            </div>
            <div className="p-3 bg-violet-50 rounded-lg">
              <h5 className="font-medium text-violet-800">Omega-3</h5>
              <p className="text-violet-700 text-sm">Anti-inflammatory and brain health</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
