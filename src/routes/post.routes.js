import { Router } from "express";
import { ctrlCreatePost, ctrlDeletePost, ctrlGetPost, ctrlUpdatePost } from "../controllers/post.controllers";
import { PostModel } from "../models/Posts";

const postRouter = Router();

// endpoint para traer todas las tareas
postRouter.get("/api/posts", ctrlGetPost)

// endpoint para Crear una tarea
postRouter.post("/api/posts", ctrlCreatePost)

// endpoint para modificar una tarea
postRouter.put("/api/posts/:id", ctrlUpdatePost)

// endpoint para eliminar una tarea
postRouter.delete("/api/posts/:id", ctrlDeletePost)

export { postRouter }