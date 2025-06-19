
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, Timer, Moon } from "lucide-react";

export const StressTracker = () => {
  const [stressLevel, setStressLevel] = useState(3);
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathingCount, setBreathingCount] = useState(0);

  const stressLabels = ["Very Low", "Low", "Moderate", "High", "Very High"];
  const stressColors = ["green", "green", "yellow", "orange", "red"];

  const startBreathingExercise = () => {
    setBreathingActive(true);
    setBreathingCount(0);
    
    // Simple breathing exercise timer
    const interval = setInterval(() => {
      setBreathingCount(prev => {
        if (prev >= 10) {
          setBreathingActive(false);
          clearInterval(interval);
          return 0;
        }
        return prev + 1;
      });
    }, 4000); // 4 seconds per breath cycle
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Stress Relief & Mindfulness</h2>
        <p className="text-gray-600">Monitor your stress and practice calming techniques</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Stress Level Tracker */}
        <Card className="bg-white/80 backdrop-blur-sm border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-red-800">
              <Heart className="w-5 h-5" />
              <span>Current Stress Level</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {stressLabels[stressLevel - 1]}
              </div>
              <Badge variant="secondary" className={`bg-${stressColors[stressLevel - 1]}-100 text-${stressColors[stressLevel - 1]}-800`}>
                Level {stressLevel}/5
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Very Low</span>
                <span>Very High</span>
              </div>
              <Progress value={stressLevel * 20} className="h-3" />
            </div>

            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((level) => (
                <Button
                  key={level}
                  variant={stressLevel === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStressLevel(level)}
                  className={stressLevel === level ? `bg-${stressColors[level - 1]}-500` : ""}
                >
                  {level}
                </Button>
              ))}
            </div>

            {stressLevel > 3 && (
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800">High Stress Detected</h4>
                <p className="text-red-700 text-sm">
                  Consider taking a break and trying our breathing exercises below.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Breathing Exercise */}
        <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-800">
              <Timer className="w-5 h-5" />
              <span>Breathing Exercise</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              {!breathingActive ? (
                <div className="space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                    <Moon className="w-16 h-16 text-white" />
                  </div>
                  <Button 
                    onClick={startBreathingExercise}
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    Start 4-7-8 Breathing
                  </Button>
                  <p className="text-sm text-gray-600">
                    Inhale for 4, hold for 7, exhale for 8 seconds
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto flex items-center justify-center animate-pulse">
                    <div className="text-white font-bold text-2xl">
                      {breathingCount + 1}/10
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-blue-800">
                    Breathe deeply and relax...
                  </div>
                  <Progress value={(breathingCount + 1) * 10} className="w-full" />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stress Relief Tips */}
      <Card className="bg-white/80 backdrop-blur-sm border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800">Quick Stress Relief Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800">🧘 Meditation</h4>
              <p className="text-sm text-green-700">5 minutes daily meditation can reduce stress significantly</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800">🚶 Nature Walk</h4>
              <p className="text-sm text-blue-700">10-15 minutes outdoors can lower cortisol levels</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-800">📱 Digital Detox</h4>
              <p className="text-sm text-purple-700">Take breaks from screens every hour</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-800">😂 Laughter</h4>
              <p className="text-sm text-orange-700">Watch something funny to release endorphins</p>
            </div>
            <div className="p-4 bg-pink-50 rounded-lg">
              <h4 className="font-semibold text-pink-800">🎵 Music</h4>
              <p className="text-sm text-pink-700">Calming music can reduce anxiety and stress</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-semibold text-indigo-800">💭 Journaling</h4>
              <p className="text-sm text-indigo-700">Write down thoughts to clear your mind</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
