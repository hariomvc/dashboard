import './Header.css';

function Header(){
    return(
        <div className='header'>
            <div className='search--box'>
            <div className="search--bar">
                <img src="/assests/icons/search.png" alt="search" className="search--icon"/>
                <input type='text' placeholder="Search patient name, date" className="search--text"/>
            </div>
            </div>
            <img src='/assests/images/user.jpg' alt='messages' className='header--icon user--icon'/>
            <img src='/assests/icons/bell.png' alt='messages' className='header--icon'/>
            <img src='/assests/icons/chat.png' alt='messages' className='header--icon'/>
        </div>
    )
}

export default Header;