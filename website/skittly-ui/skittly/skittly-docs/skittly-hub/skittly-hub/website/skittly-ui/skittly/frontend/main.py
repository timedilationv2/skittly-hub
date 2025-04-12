from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .jd_generator import generate_response

app = FastAPI()

origins = [
    "https://skittle-frontend-4glr.vercel.app",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class JobDescription(BaseModel):
    job_description: str

@app.post("/generate-response")
async def create_response(jd: JobDescription):
    response = generate_response(jd.job_description)
    return {"response": response}

@app.get("/")
async def root():
    return {"message": "Skittly API is live!"}
