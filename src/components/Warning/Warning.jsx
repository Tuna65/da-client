import './Warning.scss'

function Warning({message}) {
    return ( <div className="Warning">
        <div className="Warning__wrapper">
            <p>{message}</p>
        </div>
    </div> );
}

export default Warning;