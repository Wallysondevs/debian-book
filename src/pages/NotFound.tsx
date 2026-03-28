import { useNavigate } from "react-router-dom";

  const NotFound = () => {
    const navigate = useNavigate();
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <div className="text-6xl mb-4">🐞</div>
        <h1 className="text-3xl font-bold mb-2">Página não encontrada</h1>
        <p className="text-muted-foreground mb-6">A página que você procura não existe.</p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Voltar ao início
        </button>
      </div>
    );
  };

  export default NotFound;
  