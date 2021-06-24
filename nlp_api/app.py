from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware

from .pysummarize import summary, summ_keywords

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
async def index() -> str:
    return "hello"

@app.get("/summary/{text}")
def get_text(text : str):
    response = jsonable_encoder(summary(text))
    return JSONResponse(content = response)

@app.get("/keywords/{text}")
def get_keywords(text : str):
    response = jsonable_encoder(summ_keywords(text))
    return JSONResponse(content = response)