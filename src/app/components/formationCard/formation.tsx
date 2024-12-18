import FormationCardType from "./formationType";
export default function Formation({
  course,
  level,
  institution,
  conclusionYear,
  status,
}: FormationCardType) {
  let statusInfoStyle: string = "rounded-[10px] p-1 ";
  switch (status) {
    case "Concluído":
      statusInfoStyle += "bg-green-500";
      break;
    case "Cursando":
      statusInfoStyle += "bg-yellow-500 ";
      break;
    default:
      statusInfoStyle += "";
      break;
  }
  const styleTextDescribe: string =
    "text-slate-600 italic dark:text-gray-500 block text-size-[0.2rem] ";
  const stylesBorder: string =
    "leading-none border-b w-full p-1 border-white dark:border-blue-800";
  return (
    <article className="h-[17rem] w-[13rem] p-[0.5rem] flex flex-row  justify-center rounded-[10px] shadow-md shadow-[#FF5733] bg-slate-400  dark:bg-slate-800 flex-wrap dark:text-white transition-colors duration-300 ease-in-out overflow-y-auto text-center">
      <h2 className="font-bold"> {course.toUpperCase()}</h2>
      {level ? (
        <h2 className={stylesBorder}>
          <span className={styleTextDescribe}>Level: </span>
          {level}
        </h2>
      ) : (
        ""
      )}
      <h3 className={stylesBorder}>
        <span className={styleTextDescribe}>Instituition:</span> {institution}
      </h3>
      <div className="w-full">
        <h3 className={stylesBorder}>
          <span className={`${styleTextDescribe}`}>
            {status == "Concluído" ? "Concluído em: " : "Finaliza em: "}
          </span>
          {conclusionYear}
        </h3>
        <h3>
          <span className={styleTextDescribe}> Status: </span>
          <span className={statusInfoStyle}>{status}</span>
        </h3>
      </div>
    </article>
  );
}
