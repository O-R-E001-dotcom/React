import StateCard from "./StateCard";
import './App.css'

function App() {
    return (
        <div>
            <h2 className="h2">Nigerian States and their capitals</h2> 
            <div className="app">
                <div
                    style={{
                    backgroundColor: "#4169E1",
                    color: "white",
                    border: "2px dotted black",
                    width: "20%",
                    margin: "0",
                    height: "80vh"
                    }}>

                    <StateCard 
                        state = "Lagos State"
                        capital="Capital: Ikeja"
                        region = "Region: South-West"
                        population= "Population: 10 million"
                            
                    />
                    <p className="landmark">Famous landmark: Third Mainland Bridge </p>

                </div>
            
                <div 
                    style={{
                    backgroundColor: "#8B4513",
                    color: "white",
                    border: "2px dotted black",
                    width: "20%",
                    margin: "0",
                    height: "80vh"
                    }}>

                    <StateCard
                        state = "Bauchi State"
                        capital="Capital: Bauchi"
                        region = "Region: North"
                        population= "Population: 2 million"
                    />
                    <p className="landmark">Famous landmark: Yankari Game Reserve</p>
                </div>
                
                <div 
                    style={{
                    backgroundColor: "#FFD700",
                    color: "white",
                    border: "2px dotted black",
                    width: "20%",
                    margin: "0",
                    height: "80vh"
                    }}>

                    <StateCard
                        state = "Anambra State"
                        capital="Capital: Awka"
                        region = "Region: South-East"
                        population= "Population: 1 million"
                    />
                    <p className="landmark">Famous landmark: Ogbunike Cave</p>
                </div>

                <div 
                    style={{
                    backgroundColor: "#008751",
                    color: "white",
                    border: "2px dotted black",
                    width: "20%",
                    margin: "0",
                    height: "80vh"
                    }}>

                    <StateCard
                        state = "Akwa-Ibom State"
                        capital="Capital: Uyo"
                        region = "Region: South"
                        population= "Population: 1 million"
                    />
                    <p className="landmark">Famous landmark: Godswill Akpabio International Stadium</p>
                </div>
            </div>
        </div>
        
    );
}

export default App;