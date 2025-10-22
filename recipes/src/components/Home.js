

export const Home = (props) => {
    return <>
        {!props.loggedIn && <div className='right-aligned'>
            <img className='App-logo' src='/images/logo_white.png' alt='logo' id='logo'/><br/><br/>
            <div className='contained'>
                <h2 id='description' className='heading'>An App to Create and Share Recipes with Friends</h2>
            </div>
        </div>} 
    </>
}