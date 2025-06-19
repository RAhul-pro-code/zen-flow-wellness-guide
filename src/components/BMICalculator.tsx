
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Users, Activity } from "lucide-react";

export const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    
    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(Math.round(bmiValue * 10) / 10);
      
      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue < 25) {
        setCategory("Normal weight");
      } else if (bmiValue < 30) {
        setCategory("Overweight");
      } else {
        setCategory("Obese");
      }
    }
  };

  const getBMIColor = () => {
    if (!bmi) return "gray";
    if (bmi < 18.5) return "blue";
    if (bmi < 25) return "green";
    if (bmi < 30) return "yellow";
    return "red";
  };

  const getIdealWeight = () => {
    if (!height) return null;
    const heightInMeters = parseFloat(height) / 100;
    const minIdeal = Math.round(18.5 * heightInMeters * heightInMeters);
    const maxIdeal = Math.round(24.9 * heightInMeters * heightInMeters);
    return { min: minIdeal, max: maxIdeal };
  };

  const idealWeight = getIdealWeight();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">BMI & Body Metrics</h2>
        <p className="text-gray-600">Calculate your BMI and get personalized health recommendations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* BMI Calculator */}
        <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-800">
              <Users className="w-5 h-5" />
              <span>BMI Calculator</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                placeholder="Enter your height in cm"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="Enter your weight in kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1"
              />
            </div>
            <Button onClick={calculateBMI} className="w-full bg-blue-500 hover:bg-blue-600">
              Calculate BMI
            </Button>

            {bmi && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-blue-800">Your BMI: {bmi}</h3>
                <Badge variant="secondary" className={`mt-2 bg-${getBMIColor()}-100 text-${getBMIColor()}-800`}>
                  {category}
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Ideal Weight & Recommendations */}
        <Card className="bg-white/80 backdrop-blur-sm border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-green-800">
              <Activity className="w-5 h-5" />
              <span>Health Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {idealWeight && (
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Ideal Weight Range</h4>
                <p className="text-green-700">
                  {idealWeight.min} - {idealWeight.max} kg
                </p>
              </div>
            )}

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Personalized Tips:</h4>
              
              <div className="p-3 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-800">💧 Hydration</h5>
                <p className="text-sm text-blue-700">
                  Drink at least {weight ? Math.round(parseFloat(weight) * 35) : 2500}ml of water daily
                </p>
              </div>

              <div className="p-3 bg-purple-50 rounded-lg">
                <h5 className="font-medium text-purple-800">🏃 Exercise</h5>
                <p className="text-sm text-purple-700">
                  Aim for 150 minutes of moderate exercise per week
                </p>
              </div>

              <div className="p-3 bg-orange-50 rounded-lg">
                <h5 className="font-medium text-orange-800">🍎 Nutrition</h5>
                <p className="text-sm text-orange-700">
                  Daily calorie intake: {weight ? Math.round(parseFloat(weight) * 25) : 2000}-{weight ? Math.round(parseFloat(weight) * 30) : 2400} calories
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
