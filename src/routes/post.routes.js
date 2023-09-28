import { Router } from "express";
import { ctrlCreatePost, ctrlDeletePost, ctrlGetPosts, ctrlUpdatePost, ctrlView } from "../controllers/post.controllers.js";
import { createPostSchema, editPostSchema } from "../models/Schemas/post.schema.js";
import { validator } from "../middlewares/validator.js";
import { PostModel } from "../models/Posts.js";

const postRouter = Router();

// RUTA PARA LA VISTA
postRouter.get('/posts', ctrlView)

// endpoint para traer todas las tareas
postRouter.get('/api/posts', ctrlGetPosts)

// endpoint para Crear una tarea
postRouter.post('/api/posts', createPostSchema, validator, ctrlCreatePost)

// endpoint para modificar una tarea
postRouter.put('/api/posts/:id', editPostSchema, validator, ctrlUpdatePost)

// endpoint para eliminar una tarea
postRouter.delete('/api/posts/:id', ctrlDeletePost)

export { postRouter }