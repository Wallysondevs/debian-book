import { Link } from "wouter";
import { PageContainer } from "@/components/layout/PageContainer";
import { DebianLogo } from "@/components/ui/DebianLogo";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <PageContainer>
      <div className="max-w-md mx-auto text-center py-20">
        <DebianLogo size={64} className="mx-auto mb-6 text-muted-foreground/30" />
        <div className="term-window term-window--debian inline-block mb-6">
          <div className="term-titlebar">
            <div className="flex items-center gap-1.5">
              <span className="term-dot" style={{ background: "#ff5f57" }} />
              <span className="term-dot" style={{ background: "#febc2e" }} />
              <span className="term-dot" style={{ background: "#28c840" }} />
            </div>
            <span className="font-mono text-[10px] text-white/60">error</span>
            <div className="w-16" />
          </div>
          <div className="term-body term-scanlines p-4 font-mono text-sm text-left">
            <div className="term-line text-[hsl(var(--debian-red))]">
              $ cat /dev/404
            </div>
            <div className="term-line text-[hsl(var(--debian-fg))] mt-1">
              cat: /dev/404: No such file or directory
            </div>
            <div className="term-line text-[hsl(var(--debian-amber))] mt-1">
              Dica: o caminho que você procura não existe.
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2">404</h1>
        <p className="text-muted-foreground mb-6">
          Página não encontrada. Este módulo não existe no curso.
        </p>
        <Link href="/">
          <Button variant="outline" className="font-mono gap-2">
            <Home className="w-4 h-4" /> Voltar ao início
          </Button>
        </Link>
      </div>
    </PageContainer>
  );
}
