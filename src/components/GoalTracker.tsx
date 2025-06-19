
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Check, Timer } from "lucide-react";

interface Goal {
  id: number;
  title: string;
  category: string;
  progress: number;
  target: number;
  unit: string;
  completed: boolean;
}

export const GoalTracker = () => {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: 1,
      title: "Daily Water Intake",
      category: "Health",
      progress: 6,
      target: 8,
      unit: "glasses",
      completed: false
    },
    {
      id: 2,
      title: "Weekly Exercise",
      category: "Fitness",
      progress: 3,
      target: 5,
      unit: "sessions",
      completed: false
    },
    {
      id: 3,
      title: "Meditation Streak",
      category: "Mindfulness",
      progress: 7,
      target: 7,
      unit: "days",
      completed: true
    },
    {
      id: 4,
      title: "Sleep Hours",
      category: "Recovery",
      progress: 7,
      target: 8,
      unit: "hours",
      completed: false
    }
  ]);

  const [newGoal, setNewGoal] = useState({
    title: "",
    category: "",
    target: "",
    unit: ""
  });

  const updateProgress = (id: number, increment: number) => {
    setGoals(goals.map(goal => {
      if (goal.id === id) {
        const newProgress = Math.max(0, Math.min(goal.target, goal.progress + increment));
        return {
          ...goal,
          progress: newProgress,
          completed: newProgress >= goal.target
        };
      }
      return goal;
    }));
  };

  const addGoal = () => {
    if (newGoal.title && newGoal.category && newGoal.target && newGoal.unit) {
      const goal: Goal = {
        id: goals.length + 1,
        title: newGoal.title,
        category: newGoal.category,
        progress: 0,
        target: parseInt(newGoal.target),
        unit: newGoal.unit,
        completed: false
      };
      setGoals([...goals, goal]);
      setNewGoal({ title: "", category: "", target: "", unit: "" });
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Health": "green",
      "Fitness": "blue",
      "Mindfulness": "purple",
      "Recovery": "indigo",
      "Nutrition": "orange"
    };
    return colors[category] || "gray";
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Goal Tracking & Motivation</h2>
        <p className="text-gray-600">Set and track your wellness goals to stay motivated and focused</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Goals */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Your Active Goals</h3>
          {goals.map((goal) => {
            const progressPercentage = (goal.progress / goal.target) * 100;
            const color = getCategoryColor(goal.category);
            
            return (
              <Card key={goal.id} className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">{goal.title}</h4>
                      <Badge variant="secondary" className={`bg-${color}-100 text-${color}-800 mt-1`}>
                        {goal.category}
                      </Badge>
                    </div>
                    {goal.completed && (
                      <Badge variant="default" className="bg-green-500">
                        <Check className="w-4 h-4 mr-1" />
                        Completed
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{goal.progress} / {goal.target} {goal.unit}</span>
                      <span>{Math.round(progressPercentage)}%</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                    
                    {!goal.completed && (
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateProgress(goal.id, -1)}
                          disabled={goal.progress === 0}
                        >
                          -1
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => updateProgress(goal.id, 1)}
                          disabled={goal.progress >= goal.target}
                          className={`bg-${color}-500 hover:bg-${color}-600`}
                        >
                          +1
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Add New Goal & Motivation */}
        <div className="space-y-6">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-800">
                <Timer className="w-5 h-5" />
                <span>Add New Goal</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Goal title"
                value={newGoal.title}
                onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
              />
              <Input
                placeholder="Category (e.g., Health, Fitness)"
                value={newGoal.category}
                onChange={(e) => setNewGoal({...newGoal, category: e.target.value})}
              />
              <Input
                placeholder="Target number"
                type="number"
                value={newGoal.target}
                onChange={(e) => setNewGoal({...newGoal, target: e.target.value})}
              />
              <Input
                placeholder="Unit (e.g., glasses, sessions)"
                value={newGoal.unit}
                onChange={(e) => setNewGoal({...newGoal, unit: e.target.value})}
              />
              <Button onClick={addGoal} className="w-full bg-blue-500 hover:bg-blue-600">
                Add Goal
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-purple-800">
                <Lightbulb className="w-5 h-5" />
                <span>Motivation Boost</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800">💪 Daily Affirmation</h4>
                <p className="text-purple-700 text-sm">
                  "I am capable of achieving my wellness goals one step at a time."
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">🎯 Focus Tip</h4>
                <p className="text-green-700 text-sm">
                  Break large goals into smaller, achievable daily actions.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">🏆 Progress Matters</h4>
                <p className="text-blue-700 text-sm">
                  Celebrate small wins - they lead to big transformations!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
