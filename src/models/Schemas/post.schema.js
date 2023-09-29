import { body } from "express-validator";

export const createPostSchema = [
    body('title')
        .isString().withMessage("Debe ser string")
        .notEmpty().withMessage("No debe ser vacio"),
    body('description')
        .isString().withMessage("Debe ser string")
        .notEmpty().withMessage("No debe ser vacio"),
    body('linkUrl')
        .isURL().withMessage("Ingrese una url valida")
        .notEmpty().withMessage("No debe ser vacio"),
]

export const editPostSchema = [
    body('title')
        .optional()
        .isString().withMessage("Debe ser string")
        .notEmpty().withMessage("No debe ser vacio"),
    body('description')
        .optional()
        .isString().withMessage("Debe ser string")
        .notEmpty().withMessage("No debe ser vacio"),
    body('linkUrl')
        .optional()
        .isURL().withMessage("Ingrese una url valida")
        .notEmpty().withMessage("No debe ser vacio"),
]