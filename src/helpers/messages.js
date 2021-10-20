let msg = {
    serverError:{
        code: 500,
        error: true,
        msg: 'Internal Server Error'
    },
    badRequest:{
        code: 400,
        error: true,
        msg: 'Data Error'
    },
    fieldsRequire:{
        code: 400,
        error: true,
        msg: 'Please Enter All Fields'
    },
    authFailed:{
        code: 401,
        erroe: true,
        msg: 'Auth Failed'
    }
}

module.exports = msg