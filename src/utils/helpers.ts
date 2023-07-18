
export const httpReq = async (type: string, url: URL, data: string) => {
    type = type.toUpperCase()
    let config: RequestInit = {
        method: type,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    }
    let res
    try {
        if(type == "GET" || "DELETE") {
            const req = await fetch(url, config)
            res = req.json()
        }else if (type == "POST" || "PUT") {
            config["body"] = JSON.stringify(data)
            const req = await fetch(url, config)
            res = req.json()
        }
        return res
    }catch (e) {
        console.log(e)
        return e
    }
}

