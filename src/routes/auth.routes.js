const express =  require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const { check, validationResult } = require('express-validator')

/**
 * @api {post} /register Registro de usuarios
 * @apiName Registro
 * @apiGroup AUTH
 * @apiDescription registro de usuarios usando los campos name, email y password
 * @apiParam {string} name Nombre del usuario que se registra
 * @apiParam {string} email Email del usuario que se resgitra
 * @apiParam {string} password Contraseña del usuario 
 * @apiParamExample {json} Request-Example:
 *  {
 *      "name": "James",
 *      "email": "james@james.com",
 *      "password": "james."
 *  }
 * @apiPermission none
 * @apiSuccess {string} token Token de acceso del usuario
 * @apiSuccessExample {json} Succes-Response
 * HTTP/1.1 200 ok 
 *  {
 *      "token": {
        "user": {
            "name": "zam",
            "email": "zam@zam.com",
            "password": "$2b$10$8SEyEExnibD.cXz3O6TzrePHsv86v1bs9g5Z91mfakuRMJN0UGr1m",
            "_id": "617ae79178a2b1ca4cc6af61",
            "__v": 0
        },
        "code": 200,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdhZTc5MTc4YTJiMWNhNGNjNmFmNjEiLCJpYXQiOjE2MzU0NDQ2MjUsImV4cCI6MTYzNTUzMTAyNX0.YHeCf4kFoONHPSLz3KI0lND6gpfTKuqq2fwBWkC4TO0"
    }
 *  }
 * @apiError (200) Error El email debe ser único
 * @apiErrorExample {json} Error-Response
 * HTTP/1.1 200 ok
 *  {
 *      "token": {
        "index": 0,
        "code": 11000,
        "keyPattern": {
            "email": 1
        },
        "keyValue": {
            "email": "zam@zam.com"
        }
    }
 *  }
 * @apiError (200) Error El email es requerido
 * @apiErrorExample {json} Error-Response-Example
 * HTTP/1.1 200 ok
 * {
 *      {
    "token": {
        "errors": {
            "email": {
                "name": "ValidatorError",
                "message": "Path `email` is required.",
                "properties": {
                    "message": "Path `email` is required.",
                    "type": "required",
                    "path": "email"
                },
                "kind": "required",
                "path": "email"
            }
        },
        "_message": "user validation failed",
        "name": "ValidationError",
        "message": "user validation failed: email: Path `email` is required."
    }
}
 * }
 * @apiError (422) (Data error) error en la validación de los datos
 * @apiErrorExample {json} Data-Error-Example
 * HTTP/1.1 422 unprocessable entry
 * {
    "errors": [
        {
            "value": "z",
            "msg": "nombre no valido, minimo dos caracteres, maximo 40 caracteres",
            "param": "name",
            "location": "body"
        },
        {
            "value": "za",
            "msg": "debe ser un email válido",
            "param": "email",
            "location": "body"
        },
        {
            "value": "zam",
            "msg": "contraseña debil",
            "param": "password",
            "location": "body"
        }
    ]
} 
 */
router.post('/register', [
        check('name','nombre no valido, minimo dos caracteres, maximo 40 caracteres').isLength({min: 2, max: 40}),
        check('email','debe ser un email válido').isEmail(),
        check('password','contraseña debil').isStrongPassword()
    ],
    authController.register
    )

/**
 * @api {post} /login Ingreso de usuarios
 * @apiName Login
 * @apiGroup AUTH
 * @apiDescription Ingreso de usuarios a la plataforma usando email y password
 * @apiParam {string} email Email del usuario que ingresa
 * @apiParam {string} password Contraseña del usuario
 * @apiSampleRequest https://backendc4g18.herokuapp.com/auth/login 
 */
router.post('/login', authController.login)

module.exports = router