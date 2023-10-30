
export const httpReq = async (type: string, url: string, data: string) => {
    // an empty string is used for requests without data
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
        if(type === "GET" || type === "DELETE") {
            const req = await fetch(url, config)
            res = req.json()
        }else if (type === "POST" || type === "PUT") {
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

