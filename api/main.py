from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/v0/koii/round/{round_id}")
def get_round_number(round_id: int):
    return {"cid": round_id}
