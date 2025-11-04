import { useState } from "react";

function NameTag() {
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')

    function handleDownload() {
        alert(
        `--- NAME TAG ---\nHello, my name is: ${name.toUpperCase()}\nTitle: ${title}\nCompany Name: ${company}`
        );
    };

    return (
        <div style={{ 
                    margin: "30px 8px", 
                    width: "80%",
                    padding: "5px 10px",
                    backgroundColor: "silver",
                    color: "green"}}>
                    <h2>Name Tag Generator</h2>
            <div style={{
                    display: "flex", 
                    flexDirection: "column", 
                    width: "40%",
                    border: "1px solid black",
                    padding: "5px 10px",
                    margin: "10px 0"}}>    
                <input style={{padding: "5px 10px", margin: "6px 0"}}
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input style={{padding: "5px 10px", margin: "6px 0"}}
                    placeholder= "Job title"
                    value= {title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input style={{padding: "5px 10px", margin: "6px 0"}}
                    placeholder="Company"
                    value= {company}
                    onChange={(e) => setCompany(e.target.value)}
                />
            </div>

            <div >
                <h3>--- NAME TAG ---</h3>
                <p>Hello! my name is: {name}</p>
                <p>Title: {title}</p>
                <p>Company Name: {company}</p>
                <button onClick={handleDownload} 
                    style={{cursor: "pointer", 
                    borderRadius: "5px",
                    padding: "6px",
                    backgroundColor: "green",
                    color: "white",
                    marginBottom: "10px"
                    }}
                    >Download Information</button>
            </div>
        </div>
    );
}

export default NameTag;


