
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";

export const WellnessTips = () => {
  const tips = [
    {
      category: "Nutrition",
      tip: "Start your day with protein to stabilize blood sugar and mood",
      color: "green"
    },
    {
      category: "Exercise",
      tip: "Even 10 minutes of movement can boost endorphins and reduce stress",
      color: "blue"
    },
    {
      category: "Sleep",
      tip: "Maintain consistent sleep schedule to regulate hormones naturally",
      color: "purple"
    },
    {
      category: "Mindfulness",
      tip: "Practice gratitude for 2 minutes daily to improve mental well-being",
      color: "orange"
    }
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-yellow-200">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-yellow-800">
          <Lightbulb className="w-5 h-5" />
          <span>Daily Wellness Tips</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tips.map((tip, index) => (
          <div key={index} className={`p-4 bg-${tip.color}-50 rounded-lg`}>
            <div className="flex items-start justify-between mb-2">
              <Badge variant="secondary" className={`bg-${tip.color}-100 text-${tip.color}-800`}>
                {tip.category}
              </Badge>
            </div>
            <p className={`text-${tip.color}-700 text-sm`}>{tip.tip}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
