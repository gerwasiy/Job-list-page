
export default function FormatingDesc(str: string) {
  
    // let firstText = str.match(/^[\s\w\.]+[\n\s]+/);
    // let responsopilities = str.match(/responsopilities:/gi);
    // let secondText = str.match(/\n [\s\w\.]+[\n\s]+\n/);
    // let thirdText = str.match(/\t[\s\w\.]+[\s]+/)
    // let c_b = str.match(/Compensation & Benefits:/);
  
    let text = str.split("\n").filter((el) => el.length > 2);

    return (
      <div className="flex gap-2 flex-col">
        {text.map((el: string, id: number) => (
          <p className=" text-lg" key={id}>
            {el.length < 30 ? <span className=" font-bold text-xl">{el}</span> : el}
          </p>
        ))}
      </div>
    );
  };