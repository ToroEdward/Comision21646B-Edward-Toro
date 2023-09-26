import { Router } from "express";

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