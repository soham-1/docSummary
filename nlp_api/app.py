from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

from .pysummarize import summary

app = FastAPI()

@app.get("/summary/{text}")
def get_text(text : str):
    response = jsonable_encoder(summary(text))
    return JSONResponse(content = response)