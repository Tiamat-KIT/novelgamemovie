
export default function NovelLikeText({text,human,AddPadding}:{text:string,human?:string,AddPadding:number}){
    const ViewText = "「" + text + "」"
    const NewPadding = 125 + AddPadding * 105

    return (
        <>
            <div style={{paddingTop: `${NewPadding}px`,paddingLeft: `150px`,WebkitTextStroke: "1px #000"}}>
                <p className="text-cyan-300 animate-typing overflow-hidden whitespace-nowrap text-5xl border-r-4 border-r-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ">
                   {human !== undefined && `${human} : `} {ViewText}
                </p>
            </div>
        </>
    )
}