const send = (req, res, next) => {
    res.end(JSON.stringify(req.response));
}

module.send = send;