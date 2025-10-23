import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import SkillBadge from "./SkillBadge";
import ProfileCard from "./ProfileCard";
import "./App.css"

function App() {
  return (
    <div className="app" style={{margin: "5px 10px"}}>
      <ProfileHeader
        avatar= "https://plus.unsplash.com/premium_photo-1739376473691-cdc1db244ac6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
        name = "Abolore Sanni"
        title = "AI Developer"
        
      />

      <ProfileStats
        projects = "Projects: 10"
        followers= "Followers: 1M"
        following= "Following: 100"
      />

      <p>Skills:</p>
      <SkillBadge
        skill = "React"
        level= "Expert"
      />
       <SkillBadge
        skill = "FastAPI"
        level= "Beginner"
      />
       <SkillBadge
        skill = "HTML"
        level = "Expert"
      />

      <ProfileCard
      />

    </div>
  );
}

export default App;