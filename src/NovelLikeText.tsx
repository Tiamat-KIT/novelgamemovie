
export default function NovelLikeText({text,human,AddPadding}:{text:string,human?:string,AddPadding:number}){
    const ViewText = "「" + text + "」"
    const NewPadding = 10 + AddPadding * 50
    // const LeftPadding = typeof human === "string" ? "30px" : "0px"
    // console.log(LeftPadding)
    return (
        <>
            <div style={{paddingTop: `${NewPadding}px`/* ,paddingLeft: `${LeftPadding}px` */,WebkitTextStroke: "1px #000"}}>
                <p className="text-cyan-300 animate-typing overflow-hidden whitespace-nowrap text-3xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                   {human !== undefined && `${human} : `} {ViewText}
                </p>
            </div>
        </>
    )
}