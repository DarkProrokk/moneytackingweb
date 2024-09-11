export default function UsefulArea({isUseful}){
    if(isUseful){
        return (
            <p className="useful">
                <img src="../../img/check.png" alt="" />
            </p>
        )
    } else {
        return (     
            <img src="../../img/delete.png" alt="" />
        )
    }
}