import "./ProfileStats.css"

function ProfileStats({ projects, followers, following}) {
    return (
        <div style={{margin: "15px 10px"}}>
            <button>{projects} |  {followers} |  {following} </button>
        </div>
    );
}

export default ProfileStats;