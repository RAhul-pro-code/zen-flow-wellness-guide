
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BMICalculator } from "@/components/BMICalculator";
import { StressTracker } from "@/components/StressTracker";
import { WellnessTips } from "@/components/WellnessTips";
import { GoalTracker } from "@/components/GoalTracker";
import { NutritionGuide } from "@/components/NutritionGuide";
import { FitnessPlanner } from "@/components/FitnessPlanner";
import { HormoneBalance } from "@/components/HormoneBalance";
import { Activity, Heart, Brain, Timer, Users, Lightbulb } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userName] = useState("Alex");

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Activity },
    { id: "bmi", label: "BMI & Body", icon: Users },
    { id: "stress", label: "Stress Relief", icon: Heart },
    { id: "nutrition", label: "Nutrition", icon: Lightbulb },
    { id: "fitness", label: "Fitness", icon: Timer },
    { id: "hormones", label: "Hormone Balance", icon: Brain },
    { id: "goals", label: "Goals", icon: Lightbulb }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent userName={userName} />;
      case "bmi":
        return <BMICalculator />;
      case "stress":
        return <StressTracker />;
      case "nutrition":
        return <NutritionGuide />;
      case "fitness":
        return <FitnessPlanner />;
      case "hormones":
        return <HormoneBalance />;
      case "goals":
        return <GoalTracker />;
      default:
        return <DashboardContent userName={userName} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                ZenFlow Wellness
              </h1>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              Welcome back, {userName}!
            </Badge>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/60 backdrop-blur-sm border-b border-green-100">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                      : "hover:bg-green-50 text-green-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

const DashboardContent = ({ userName }: { userName: string }) => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gray-800">
          Good morning, {userName}! 🌅
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your journey to better health and wellness starts here. Track your progress, 
          get personalized recommendations, and achieve your goals one step at a time.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-100 to-green-200 border-green-200">
          <CardContent className="p-6 text-center">
            <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-green-800">Stress Level</h3>
            <p className="text-2xl font-bold text-green-700">Low</p>
            <Progress value={25} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-blue-200">
          <CardContent className="p-6 text-center">
            <Activity className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-blue-800">Daily Activity</h3>
            <p className="text-2xl font-bold text-blue-700">78%</p>
            <Progress value={78} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-purple-200">
          <CardContent className="p-6 text-center">
            <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-purple-800">Focus Score</h3>
            <p className="text-2xl font-bold text-purple-700">85%</p>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-100 to-orange-200 border-orange-200">
          <CardContent className="p-6 text-center">
            <Timer className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <h3 className="font-semibold text-orange-800">Goals Progress</h3>
            <p className="text-2xl font-bold text-orange-700">3/5</p>
            <Progress value={60} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <WellnessTips />
        <Card className="bg-white/80 backdrop-blur-sm border-green-100">
          <CardHeader>
            <CardTitle className="text-green-800">Today's Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800">💧 Hydration Goal</h4>
              <p className="text-green-700">Drink 2 more glasses of water today</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800">🧘 Mindfulness Break</h4>
              <p className="text-blue-700">Take a 5-minute breathing exercise</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-800">🏃 Movement Time</h4>
              <p className="text-purple-700">15 minutes of light exercise recommended</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
