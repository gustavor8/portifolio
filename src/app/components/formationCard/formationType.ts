export default interface FormationCardTypes {
  course: string;
  level?: string;
  institution: string;
  conclusionYear: number;
  status: "Concluído" | "Cursando";
}
