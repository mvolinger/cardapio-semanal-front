
type UserLogginFunctions = {
    setuserIdLogged: Function
    setuserIsLogged: Function
    setuserNameLogged: Function
}

export default function SignOut(props:UserLogginFunctions) {
    return(
        <button className="NavLink" id='FloatRight' onClick={
            () => {
                props.setuserIdLogged();
                props.setuserIsLogged();
                props.setuserNameLogged();
            }
        }>Sair</button>
    )   
}