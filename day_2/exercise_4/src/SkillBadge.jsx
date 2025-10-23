import "./SkillBadge.css"

function SkillBadge({ skill, level}) {
    return (
        <div className={`badge ${level === "Beginner" ? 'Beginner' : level === "Intermediate" ? 'Intermediate' : level === "Expert" ? 'Expert' : ''}`} style={{margin: "15px 10px"}}>
            <p>{skill} - {level}</p>
            
        </div>
    );
}

export default SkillBadge;