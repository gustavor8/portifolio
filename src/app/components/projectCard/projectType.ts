interface Tecnology {
  name: string;
  icon: React.ReactNode;
}

export default interface Project {
  name: string;
  status: "Finalizado" | "Em Produção" | "Pausado";
  linkExecute?: string;
  tecnology: Tecnology[];
  repository?: string;
  description: string;
}
