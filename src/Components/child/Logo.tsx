
type Props ={
    style:string,
    stspan:string
}


export default function Logo({style,stspan}:Props) {
  return (
      <h1 className={style}>
        <span className={stspan}><img src="/iconYk.png" className="w-8 h-8" alt="" />KIS</span> store
      </h1>
  );
}
