import { Exercise } from "@/types/module";
  import { useState } from "react";
  import { ChevronDown, ChevronRight, CheckCircle2, Lightbulb } from "lucide-react";

  interface ExerciseCardProps {
    exercise: Exercise;
  }

  const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [showHint, setShowHint] = useState(false);

    return (
      <div className="rounded-lg bg-secondary border border-border p-4 mb-3 animate-fade-in">
        <div className="flex items-start gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary text-sm font-bold shrink-0 mt-0.5">
            {exercise.id}
          </span>
          <div className="flex-1">
            <p className="text-foreground font-medium leading-relaxed">{exercise.question}</p>
            <div className="flex gap-2 mt-3">
              {exercise.hint && (
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center gap-1.5 text-xs font-medium text-warning hover:text-warning/80 transition-colors"
                >
                  <Lightbulb size={14} />
                  {showHint ? "Esconder dica" : "Ver dica"}
                </button>
              )}
              <button
                onClick={() => setShowAnswer(!showAnswer)}
                className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {showAnswer ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                {showAnswer ? "Esconder resposta" : "Ver resposta"}
              </button>
            </div>
            {showHint && exercise.hint && (
              <div className="mt-2 p-2 rounded bg-warning/10 border border-warning/20 text-sm text-warning">
                💡 {exercise.hint}
              </div>
            )}
            {showAnswer && (
              <div className="mt-2 p-3 rounded code-block flex items-center gap-2">
                <CheckCircle2 size={16} className="text-success shrink-0" />
                <code className="text-terminal text-sm font-mono">{exercise.answer}</code>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default ExerciseCard;
  