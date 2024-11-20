from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict, Optional

app = FastAPI()


class CreateIdentityRequest(BaseModel):
    address: str
    secret: str


class VerifyIdentityRequest(BaseModel):
    address: str
    secret: str
    blinding_factor: str


@app.post("/identity/create")
async def create_identity(request: CreateIdentityRequest):
    try:
        identity = await identity_manager.create_identity(
            request.address,
            request.secret.encode()
        )
        return {"status": "success", "address": identity.address}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.post("/identity/verify")
async def verify_identity(request: VerifyIdentityRequest):
    is_valid = await identity_manager.verify_identity(
        request.address,
        request.secret.encode(),
        bytes.fromhex(request.blinding_factor)
    )
    return {"status": "success", "valid": is_valid}
