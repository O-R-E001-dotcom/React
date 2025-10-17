from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
import uvicorn
import os

load_dotenv()

students_details = [
    {
        "name": "Abolore Sanni",
        "track": "AI Development"
    },
    {
        "name": "Brittany Sanni",
        "track": "AI Engineering"
    }
]
app = FastAPI(title="FastAPI with Frontend", version="1.0.0")


@app.get("/students_details", description="Linking FastAPI with frontend")
def root():
    return {"students_details": students_details}

if __name__ == "__main__":
    print(os.getenv("port"))
    print(os.getenv("host"))
    uvicorn.run(app, host =os.getenv("host"), port=int(os.getenv("port")))


