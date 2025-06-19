
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Moon, Sun } from "lucide-react";

export const HormoneBalance = () => {
  const hormoneFactors = [
    {
      hormone: "Testosterone",
      level: 75,
      status: "Optimal",
      color: "blue",
      tips: [
        "Get 7-9 hours of quality sleep",
        "Include zinc-rich foods (oysters, pumpkin seeds)",
        "Lift heavy weights 3x per week",
        "Manage stress through meditation"
      ]
    },
    {
      hormone: "Cortisol",
      level: 30,
      status: "Good",
      color: "green",
      tips: [
        "Practice deep breathing exercises",
        "Avoid caffeine after 2 PM",
        "Maintain consistent sleep schedule",
        "Try adaptogenic herbs like ashwagandha"
      ]
    },
    {
      hormone: "Serotonin",
      level: 80,
      status: "Excellent",
      color: "purple",
      tips: [
        "Get morning sunlight exposure",
        "Exercise regularly",
        "Eat tryptophan-rich foods (turkey, eggs)",
        "Practice gratitude daily"
      ]
    }
  ];

  const lifestyleFactors = [
    {
      category: "Sleep Quality",
      icon: Moon,
      color: "indigo",
      recommendations: [
        "Maintain 7-9 hours nightly",
        "Keep bedroom cool (65-68°F)",
        "Avoid screens 1 hour before bed",
        "Use blackout curtains"
      ]
    },
    {
      category: "Stress Management",
      icon: Brain,
      color: "green",
      recommendations: [
        "Practice 10 minutes daily meditation",
        "Try progressive muscle relaxation",
        "Journal thoughts and emotions",
        "Limit news and social media"
      ]
    },
    {
      category: "Circadian Rhythm",
      icon: Sun,
      color: "orange",
      recommendations: [
        "Get morning sunlight (15-30 min)",
        "Eat meals at consistent times",
        "Exercise in the morning or afternoon",
        "Dim lights 2 hours before sleep"
      ]
    }
  ];

  const moodStabilizers = [
    {
      nutrient: "Omega-3 Fatty Acids",
      sources: ["Salmon", "Walnuts", "Flax seeds"],
      benefit: "Reduces inflammation and supports brain health",
      color: "blue"
    },
    {
      nutrient: "Magnesium",
      sources: ["Dark chocolate", "Almonds", "Spinach"],
      benefit: "Calms nervous system and improves sleep",
      color: "green"
    },
    {
      nutrient: "Vitamin D",
      sources: ["Sunlight", "Fatty fish", "Egg yolks"],
      benefit: "Supports mood regulation and testosterone",
      color: "yellow"
    },
    {
      nutrient: "B-Complex Vitamins",
      sources: ["Whole grains", "Leafy greens", "Meat"],
      benefit: "Essential for neurotransmitter production",
      color: "orange"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Hormone Balance & Mood Stability</h2>
        <p className="text-gray-600">Natural approaches to optimize hormones and maintain emotional well-being</p>
      </div>

      {/* Hormone Levels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hormoneFactors.map((hormone, index) => (
          <Card key={index} className={`bg-white/80 backdrop-blur-sm border-${hormone.color}-200`}>
            <CardHeader>
              <CardTitle className={`text-${hormone.color}-800`}>{hormone.hormone}</CardTitle>
              <Badge variant="secondary" className={`bg-${hormone.color}-100 text-${hormone.color}-800 w-fit`}>
                {hormone.status}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Level</span>
                  <span>{hormone.level}%</span>
                </div>
                <Progress value={hormone.level} className="h-3" />
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800">Natural Boosters:</h4>
                {hormone.tips.map((tip, tipIndex) => (
                  <div key={tipIndex} className={`p-2 bg-${hormone.color}-50 rounded text-sm`}>
                    {tip}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lifestyle Factors */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {lifestyleFactors.map((factor, index) => {
          const Icon = factor.icon;
          return (
            <Card key={index} className={`bg-white/80 backdrop-blur-sm border-${factor.color}-200`}>
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-${factor.color}-800`}>
                  <Icon className="w-5 h-5" />
                  <span>{factor.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {factor.recommendations.map((rec, recIndex) => (
                  <div key={recIndex} className={`p-3 bg-${factor.color}-50 rounded-lg`}>
                    <p className={`text-${factor.color}-700 text-sm`}>{rec}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Mood Stabilizing Nutrients */}
      <Card className="bg-white/80 backdrop-blur-sm border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-800">🧠 Mood-Stabilizing Nutrients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {moodStabilizers.map((nutrient, index) => (
              <div key={index} className={`p-4 bg-${nutrient.color}-50 rounded-lg`}>
                <h4 className={`font-semibold text-${nutrient.color}-800 mb-2`}>{nutrient.nutrient}</h4>
                <p className={`text-${nutrient.color}-700 text-sm mb-3`}>{nutrient.benefit}</p>
                <div className="space-y-1">
                  <h5 className="text-xs font-medium text-gray-600">Best Sources:</h5>
                  {nutrient.sources.map((source, sourceIndex) => (
                    <Badge key={sourceIndex} variant="secondary" className={`bg-${nutrient.color}-100 text-${nutrient.color}-800 mr-1 mb-1`}>
                      {source}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Action Plan */}
      <Card className="bg-white/80 backdrop-blur-sm border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800">🎯 Daily Action Plan for Hormone Health</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <h4 className="font-semibold text-green-800">Morning</h4>
              <ul className="text-sm text-green-700 mt-2 space-y-1">
                <li>☀️ Get sunlight exposure</li>
                <li>🥗 Protein-rich breakfast</li>
                <li>💧 Drink 2 glasses water</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <h4 className="font-semibold text-blue-800">Afternoon</h4>
              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                <li>🏃 Physical activity</li>
                <li>🧘 5-min meditation</li>
                <li>🥙 Balanced lunch</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg text-center">
              <h4 className="font-semibold text-purple-800">Evening</h4>
              <ul className="text-sm text-purple-700 mt-2 space-y-1">
                <li>🍽️ Light, early dinner</li>
                <li>📚 Relaxing activity</li>
                <li>📱 Screen-free time</li>
              </ul>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg text-center">
              <h4 className="font-semibold text-indigo-800">Night</h4>
              <ul className="text-sm text-indigo-700 mt-2 space-y-1">
                <li>🛁 Warm bath/shower</li>
                <li>📖 Read or journal</li>
                <li>😴 7-9 hours sleep</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
