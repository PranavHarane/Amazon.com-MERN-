const sentToken = (res , token) => {
    res.cookie('token' , token , {
        httpOnly : true ,
        secure : false ,
        sameSite : 'lax' ,
        maxAge : 24 * 60 * 60 * 1000
    })
}

module.exports = sentToken