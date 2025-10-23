function Profile({ name, title, avatar}) {
    return (
        <div style={{margin: "15px 10px"}}>
            <img src= {avatar} alt={`${name} image`} style={{width: "350px"}}/>
            <h2>{name}</h2>
            <p>{title}</p>
            
        </div>
    );
}

export default Profile;