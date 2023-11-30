class SistemaSeguranca {
    private static instance: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "SuperSenha123";

    private constructor() {}

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instance) {
            SistemaSeguranca.instance = new SistemaSeguranca();
        }
        return SistemaSeguranca.instance;
    }

    public acessarBaseSecreta(senhaInserida: string): void {
        if (senhaInserida === this.senhaBaseSecreta) {
            console.log("Acesso concedido à Base Secreta!");
        } else {
            console.log("Acesso negado! Intruso detectado!");
        }
    }
}

const sistemaSeguranca = SistemaSeguranca.getInstance();


sistemaSeguranca.acessarBaseSecreta("senhaIncorreta"); 
sistemaSeguranca.acessarBaseSecreta("SuperSenha123"); 
