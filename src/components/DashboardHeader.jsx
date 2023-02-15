import { useEffect, useState } from 'react';

function Header() {
    const [account, setAccount] = useState('gg');
    const [permission, setPermission] = useState('root');

    // fetch('/Admin/dashBoard', {
    //     body : JSON.stringify({"action": "accountInfo"}),
    //     method: 'POST'
    // }).then(response => response.json())
    // .then(data => {
    //     setAccount(data.adminAccount);
    //     setPermission(data.permission);
    // });

    useEffect(() => {
        setAccount('GG');
        setPermission('root');
    })

    return (
        <header>
            <h2>
                <label htmlFor="nav-toggle">
                    <span className="las la-bars" />
                </label>
                <span className="headerName">Dashboard</span>
            </h2>
            <div className="search-wrapper">
                <span className="las la-search" />
                <input type="search" placeholder="Ex:/ Search here" />
            </div>
            <div className="user-wrapper">
                {/* <img src="./icon/cat.jpg" width="40px" height="40px" alt="" /> */}
                <div id="currentAccount">
                    <h4>{account}</h4>
                    <small>{permission}</small>
                </div>
            </div>
        </header>
    )
}
export default Header;
