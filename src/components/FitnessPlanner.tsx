
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Timer, Activity, Heart } from "lucide-react";

export const FitnessPlanner = () => {
  const [selectedPlan, setSelectedPlan] = useState("beginner");
  const [completedWorkouts, setCompletedWorkouts] = useState<number[]>([]);

  const fitnessPlans = {
    beginner: {
      name: "Beginner Friendly",
      description: "Perfect for starting your fitness journey",
      duration: "30 min",
      frequency: "3x/week",
      color: "green",
      workouts: [
        {
          id: 1,
          name: "Full Body Starter",
          exercises: ["10 Bodyweight squats", "5 Push-ups", "30s Plank", "10 Lunges"],
          duration: "20 min"
        },
        {
          id: 2,
          name: "Cardio & Core",
          exercises: ["5 min walking", "15 Crunches", "30s Mountain climbers", "1 min rest"],
          duration: "15 min"
        }
      ]
    },
    intermediate: {
      name: "Intermediate Level",
      description: "Build strength and endurance",
      duration: "45 min",
      frequency: "4x/week",
      color: "blue",
      workouts: [
        {
          id: 3,
          name: "Strength Training",
          exercises: ["15 Push-ups", "20 Squats", "1 min Plank", "15 Burpees"],
          duration: "30 min"
        },
        {
          id: 4,
          name: "HIIT Cardio",
          exercises: ["30s High knees", "30s Rest", "30s Jumping jacks", "Repeat 8x"],
          duration: "20 min"
        }
      ]
    },
    advanced: {
      name: "Advanced Training",
      description: "Maximize performance and results",
      duration: "60 min",
      frequency: "5x/week",
      color: "purple",
      workouts: [
        {
          id: 5,
          name: "Strength Circuit",
          exercises: ["25 Push-ups", "30 Squats", "2 min Plank", "20 Burpees"],
          duration: "40 min"
        },
        {
          id: 6,
          name: "Endurance Training",
          exercises: ["15 min running", "100 Crunches", "50 Jump squats", "Cool down"],
          duration: "45 min"
        }
      ]
    }
  };

  const markWorkoutComplete = (workoutId: number) => {
    if (!completedWorkouts.includes(workoutId)) {
      setCompletedWorkouts([...completedWorkouts, workoutId]);
    }
  };

  const currentPlan = fitnessPlans[selectedPlan as keyof typeof fitnessPlans];
  const completionRate = (completedWorkouts.length / currentPlan.workouts.length) * 100;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Fitness & Exercise Planner</h2>
        <p className="text-gray-600">Customized workout plans based on your fitness level and goals</p>
      </div>

      {/* Plan Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(fitnessPlans).map(([key, plan]) => (
          <Card 
            key={key}
            className={`cursor-pointer transition-all duration-300 ${
              selectedPlan === key 
                ? `bg-${plan.color}-100 border-${plan.color}-300 shadow-lg` 
                : "bg-white/80 hover:bg-gray-50"
            }`}
            onClick={() => setSelectedPlan(key)}
          >
            <CardContent className="p-4 text-center">
              <h3 className={`font-semibold ${selectedPlan === key ? `text-${plan.color}-800` : "text-gray-800"}`}>
                {plan.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
              <div className="mt-3 flex justify-center space-x-4 text-xs">
                <div className="flex items-center space-x-1">
                  <Timer className="w-3 h-3" />
                  <span>{plan.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Activity className="w-3 h-3" />
                  <span>{plan.frequency}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Workouts */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">Your Workout Plan</h3>
            <Badge variant="secondary" className={`bg-${currentPlan.color}-100 text-${currentPlan.color}-800`}>
              {currentPlan.name}
            </Badge>
          </div>

          <div className="space-y-4">
            {currentPlan.workouts.map((workout) => (
              <Card key={workout.id} className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">{workout.name}</h4>
                      <p className="text-sm text-gray-600">{workout.duration}</p>
                    </div>
                    {completedWorkouts.includes(workout.id) ? (
                      <Badge variant="default" className="bg-green-500">
                        Completed ✓
                      </Badge>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => markWorkoutComplete(workout.id)}
                        className={`bg-${currentPlan.color}-500 hover:bg-${currentPlan.color}-600`}
                      >
                        Mark Complete
                      </Button>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-700">Exercises:</h5>
                    {workout.exercises.map((exercise, index) => (
                      <div key={index} className={`p-2 bg-${currentPlan.color}-50 rounded text-sm`}>
                        {exercise}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Progress & Tips */}
        <div className="space-y-6">
          <Card className="bg-white/80 backdrop-blur-sm border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-800">
                <Heart className="w-5 h-5" />
                <span>Weekly Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">
                  {Math.round(completionRate)}%
                </div>
                <p className="text-green-600 text-sm">Workouts Completed</p>
              </div>
              <Progress value={completionRate} className="h-3" />
              <p className="text-sm text-gray-600 text-center">
                {completedWorkouts.length} of {currentPlan.workouts.length} workouts done
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">💪 Fitness Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-800">Consistency</h5>
                <p className="text-blue-700 text-sm">Regular exercise is better than intense sporadic workouts</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-800">Recovery</h5>
                <p className="text-green-700 text-sm">Allow 24-48 hours rest between intense sessions</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <h5 className="font-medium text-purple-800">Progression</h5>
                <p className="text-purple-700 text-sm">Gradually increase intensity as you get stronger</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800">🎯 Exercise Benefits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-orange-50 rounded-lg">
                <h5 className="font-medium text-orange-800">Stress Relief</h5>
                <p className="text-orange-700 text-sm">Exercise releases endorphins, natural mood boosters</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <h5 className="font-medium text-red-800">Hormone Balance</h5>
                <p className="text-red-700 text-sm">Regular activity helps regulate testosterone and cortisol</p>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg">
                <h5 className="font-medium text-indigo-800">Mental Focus</h5>
                <p className="text-indigo-700 text-sm">Improves cognitive function and concentration</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
